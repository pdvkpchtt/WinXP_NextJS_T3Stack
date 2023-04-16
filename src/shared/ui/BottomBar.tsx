import Image from "next/image";
import { useState } from "react";

import winlogo from "../../assets/winlogo.png";
import astronaut from "../../assets/profile/astronaut.bmp";
import TextBody from "./TextBody";

const BottomBar = ({ bottomHeight = 0 }) => {
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <div
        className="status-bar-task absolute bottom-0 left-0 z-20 w-full"
        style={{ height: bottomHeight }}
      >
        {/* start button */}
        <button
          type="button"
          className={`${
            openState ? "start-button-active" : "start-button"
          } flex items-center justify-center gap-[4px] p-0`}
          onClick={() => setOpenState(!openState)}
        >
          <Image src={winlogo} alt="winlogo" width={bottomHeight / 1.2} />
          <p>start</p>
        </button>
        {/* start button */}

        {/* start-menu */}
        {openState ? (
          <div
            className="start-menu-task h-fit w-full max-w-[300px]"
            style={{ bottom: bottomHeight }}
          >
            {/* header */}
            <div className="start-menu-header flex flex-row items-center gap-[10px] p-[5px]">
              <Image
                src={astronaut}
                width={48}
                height={48}
                alt="profile pic"
                className="rounded-[4px] border-[1px] border-[#c9d3ed]"
              />
              <TextBody text="User" styled="text-[16px] font-semibold" />
            </div>
            {/* header */}

            <div className="my-[200px] flex h-full flex-col items-center justify-center">
              work in progress
            </div>
          </div>
        ) : null}
        {/* start-menu */}
      </div>
      {/* backdrop */}
      {openState ? (
        <div
          className="fixed left-0 top-0 z-10 h-screen w-screen"
          // style={{ backgroundColor: "#000" }}
          onClick={() => setOpenState(false)}
        />
      ) : null}
      {/* backdrop */}
    </>
  );
};

export default BottomBar;
