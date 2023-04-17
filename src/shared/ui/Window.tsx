import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useWindowSize } from "@react-hook/window-size";

interface Props {
  title?: string;
  styled?: string;
  bodyStyled?: string;
  dragable?: boolean;
  children?: ReactNode;
  // ref?: React.Ref<HTMLInputElement>;
}

const Window = ({
  title = "undefined",
  styled = "",
  bodyStyled = "",
  dragable = false,
  children,
}: Props) => {
  // to controll drag
  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });
  const [width, height] = useWindowSize();
  const [widthState, setWidthState] = useState(0);
  const [heightState, setHeightState] = useState(0);
  useEffect(() => {
    const element = document.getElementById("drag-controll");
    if (element != null) {
      setWidthState(element.clientWidth);
      setHeightState(element.clientHeight);
    }
  }, []);

  // to controll drag

  return (
    <motion.div
      className={`window ${styled}`}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      drag={dragable}
      dragConstraints={
        heightState != 0 && widthState != 0
          ? {
              top: -height / 2 + heightState,
              left: -width / 2 + widthState,
              right: width / 2 - widthState,
              bottom: height / 2 - heightState,
            }
          : {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }
      }
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      id="drag-controll"
    >
      <div className="title-bar">
        <div className="title-bar-text select-none">{title}</div>
        {/* <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div> */}
      </div>
      <div className={`window-body ${bodyStyled}`}>{children}</div>
    </motion.div>
  );
};

export default Window;
