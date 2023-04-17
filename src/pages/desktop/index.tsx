import Layout from "~/shared/Layout";
import DesktopShortcut from "~/shared/ui/DesktopShortcut";

import menuItems from "~/data/menuItems";

const Desktop = () => {
  const renderShortcuts = () => {
    return menuItems.map((item, key) => (
      <DesktopShortcut key={key} name={item.name} img={item.img} />
    ));
  };

  return (
    <Layout title="Desktop">
      <div className="flex h-full w-full">
        {/* shortcuts */}
        <div className="flex h-full w-fit flex-col flex-wrap items-start justify-start gap-[20px]">
          {renderShortcuts()}
        </div>
        {/* shortcuts */}
      </div>
    </Layout>
  );
};

export default Desktop;
