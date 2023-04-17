import { useRouter } from "next/router";
import Image from "next/image";

import TextBody from "./Text/TextBody";

import shut from "../../assets/desktop-icons/shut.png";

const ReturnToDesktopButton = () => {
  const router = useRouter();
  return (
    <div
      className="flex w-fit cursor-pointer flex-row items-center gap-[5px] rounded-[4px] p-[5px] hover:bg-[#175db9]"
      onClick={() => {
        void router.push("/desktop");
      }}
    >
      <Image src={shut} alt="shut down icon" className="h-[26px] w-[26px]" />
      <TextBody styled="text-[#fff]" text="Back to desktop" />
    </div>
  );
};

export default ReturnToDesktopButton;
