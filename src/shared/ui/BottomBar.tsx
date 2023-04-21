import Image from "next/image";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

import TextHead from "./Text/TextHead";

import winlogo from "../../assets/winlogo.png";
import astronaut from "../../assets/profile/astronaut.bmp";

import StartMenuItem from "./StartMenuItem";
import StartMenuSideItem from "./StartMenuSideItem";
import ReturnToMainButton from "./ReturnToMainButton";

import menuItems, { menuSideItems } from "~/data/menuItems";

const BottomBar = ({ bottomHeight = 0 }) => {
  const user = useUser();
  const router = useRouter();

  const [openState, setOpenState] = useState(false);

  const renderMenuItems = () => {
    return menuItems.map((item, key) => (
      <StartMenuItem
        key={key}
        name={item.name}
        text={item.text}
        img={item.img}
        onClick={() => void router.push(item.route)}
      />
    ));
  };

  const renderMenuSideItems = () => {
    return menuSideItems.map((item, key) => (
      <StartMenuSideItem key={key} name={item.name} img={item.img} />
    ));
  };
  return (
    <>
      <div
        className="status-bar-task fixed bottom-0 left-0 z-20 w-full"
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
            className="start-menu-task h-fit w-full max-w-[300px] flex-col"
            style={{ bottom: bottomHeight }}
          >
            {/* header */}
            <div className="start-menu-header flex flex-row items-center gap-[10px] p-[5px]">
              <Image
                src={astronaut}
                width={48}
                height={48}
                alt="profile pic"
                className="rounded-[4px] border-[2px] border-[#c9d3ed]"
              />
              <TextHead
                text={
                  !user.isSignedIn
                    ? "Unauthorized user"
                    : user.user.firstName
                    ? user.user.firstName
                    : "Undef"
                }
                styled="text-[16px]"
              />
            </div>
            {/* header */}

            <div className="flex h-[450px] flex-row items-center justify-center">
              {/* left col */}
              <div className="flex h-full w-[60%] flex-col items-start justify-start overflow-y-auto bg-[#f0f0f0]">
                {user.isSignedIn ? (
                  renderMenuItems()
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-center">
                    *this content avalible only for authorized users*
                  </div>
                )}
              </div>
              {/* right col */}
              <div className="flex h-full w-[40%] flex-col items-start justify-start border-l-[1px] border-[#b0cff5]">
                {renderMenuSideItems()}
              </div>
            </div>

            {/* footer */}
            <div className="start-menu-footer flex justify-end p-[5px]">
              {user.isSignedIn ? (
                <ReturnToMainButton />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-center text-[#c9d3ed]">
                  *this content avalible only for authorized users*
                </div>
              )}
            </div>
            {/* footer */}
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
