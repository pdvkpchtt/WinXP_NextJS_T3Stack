import { SignInButton } from "@clerk/nextjs";
import { type NextPage } from "next";

// import { api } from "~/utils/api";
import Layout from "~/shared/Layout";

import "xp.css/dist/XP.css";
import Window from "~/shared/ui/Window";
import TextBody from "~/shared/ui/Text/TextBody";

const Home: NextPage = () => {
  return (
    <Layout title="Sign In">
      <div className="flex h-full w-full items-center justify-center">
        <Window
          title="Sign In"
          styled="w-fit h-fit"
          bodyStyled="flex flex-col items-center p-[20px] gap-[10px]"
          dragable
        >
          <TextBody text="Please Sign In to continue" styled="select-none" />
          <SignInButton />
        </Window>
      </div>
    </Layout>
  );
};

export default Home;
