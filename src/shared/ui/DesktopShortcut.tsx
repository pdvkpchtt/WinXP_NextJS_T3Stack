import Image, { StaticImageData } from "next/image";

import TextBody from "./Text/TextBody";

import error from "../../assets/desktop-icons/error.png";

interface Props {
  name?: string;
  img?: StaticImageData;
  onClick?: () => void;
}

const DesktopShortcut = ({
  name = "undef",
  img = error,
  onClick = () => console.log("undef"),
}: Props) => {
  return (
    <div
      className="flex h-fit w-fit cursor-pointer flex-col items-center justify-center gap-[5px]"
      onClick={() => onClick()}
    >
      <Image src={img} alt="Shortcut icon" width={48} height={48} />

      <TextBody
        text={name}
        styled="text-[14px] text-[#d8e0e4] drop-shadow-[1px_1px_rgba(0,0,0,1)]"
      />
    </div>
  );
};

export default DesktopShortcut;
