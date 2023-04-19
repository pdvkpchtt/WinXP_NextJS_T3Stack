import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "~/shared/Layout";
import Window from "~/shared/ui/Window";
import TextBody from "~/shared/ui/Text/TextBody";
import Button from "~/shared/ui/Button";
import { api, RouterOutputs } from "~/utils/api";

import "xp.css/dist/XP.css";

const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex w-full items-center gap-[5px]">
      <p>profile img</p>
      <input placeholder="Type smth" type="text" />
    </div>
  );
};

type PostWithUser = RouterOutputs["posts"]["getAll"][number];
const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id}>{`${post.content} - ${
      author.username ? author.username : "undef"
    }`}</div>
  );
};

const Home: NextPage = () => {
  const user = useUser();
  // console.log(user);
  const router = useRouter();

  if (!user) return null;

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
            title="Sign Out"
            styled="w-fit h-fit"
            bodyStyled="flex flex-col items-center p-[20px] gap-[10px]"
            dragable
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <TextBody text="You can SignOut now" styled="select-none" />
              <SignOutButton />
            </div>

            <TextBody text="or" styled="select-none" />

            <div className="flex flex-col items-center justify-center gap-[5px]">
              <TextBody
                text="You can continue with desktop"
                styled="select-none"
              />
              <Button
                text="Go to desktop"
                onClick={() => void router.push("/desktop")}
              />
            </div>
            {/* <CreatePostWizard />

            {data?.map((fullPost) => (
              <PostView key={fullPost.post.id} {...fullPost} />
            ))} */}
          </Window>
        )}
      </div>
    </Layout>
  );
};

export default Home;
