import Image, { StaticImageData } from "next/image";

import TextHead from "./Text/TextHead";
import TextCaption from "./Text/TextCaption";

import error from "../../assets/desktop-icons/error.png";
import "xp.css/dist/XP.css";

interface Props {
  name?: string;
  img?: StaticImageData;
  onClick?: () => void;
}

const StartMenuSideItem = ({
  name = "undef",
  img = error,
  onClick = () => console.log("undef"),
}: Props) => {
  return (
    <div
      className="flex w-full cursor-pointer flex-row items-center gap-[5px] p-[5px] hover:bg-[#c0daff]"
      onClick={() => onClick()}
    >
      <Image
        src={img}
        alt="side menu item icon"
        className="h-[28px] w-[28px]"
      />

      <TextHead text={name} styled="text-[14px] text-[#1d387a]" />
    </div>
  );
};

export default StartMenuSideItem;
