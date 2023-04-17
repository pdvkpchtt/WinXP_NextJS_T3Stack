import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

// import { api } from "~/utils/api";
import Layout from "~/shared/Layout";

import "xp.css/dist/XP.css";
import Window from "~/shared/ui/Window";
import TextBody from "~/shared/ui/Text/TextBody";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  console.log(user);

  const { data } = api.posts.getAll.useQuery();

  return (
    <Layout title="Sign In">
      <div className="flex h-full w-full items-center justify-center">
        {!user.isSignedIn ? (
          <Window
            title="Sign In"
            styled="w-fit h-fit"
            bodyStyled="flex flex-col items-center p-[20px] gap-[10px]"
            dragable
          >
            <TextBody text="Please Sign In to continue" styled="select-none" />
            <SignInButton />
          </Window>
        ) : (
          <Window
            title="Sign In"
            styled="w-fit h-fit"
            bodyStyled="flex flex-col items-center p-[20px] gap-[10px]"
            dragable
          >
            <TextBody text="You can SignOut now" styled="select-none" />
            <SignOutButton />

            {data?.map((item) => (
              <div key={item.id}>{`${
                item.content
              } - ${item.createdAt.getHours()} hours`}</div>
            ))}
          </Window>
        )}
      </div>
    </Layout>
  );
};

export default Home;
