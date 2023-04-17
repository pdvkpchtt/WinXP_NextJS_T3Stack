import Image, { StaticImageData } from "next/image";

import TextHead from "./Text/TextHead";
import TextCaption from "./Text/TextCaption";

import error from "../../assets/desktop-icons/error.png";
import "xp.css/dist/XP.css";

interface Props {
  name?: string;
  text?: string;
  img?: StaticImageData;
  onClick?: () => void;
}

const StartMenuItem = ({
  name = "undef",
  text = "undef",
  img = error,
  onClick = () => console.log("undef"),
}: Props) => {
  return (
    <div
      className="flex w-full cursor-pointer flex-row items-start gap-[5px] p-[5px] hover:bg-[#e4e4e4]"
      onClick={() => onClick()}
    >
      <Image src={img} alt="menu item icon" className="h-[40px] w-[40px]" />

      <div className="flex flex-col items-start justify-start">
        <TextHead text={name} styled="text-[14px]" />
        <TextCaption text={text} styled="text-[12px] mt-[-5px]" />
      </div>
    </div>
  );
};

export default StartMenuItem;
