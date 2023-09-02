import { CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { FcAbout } from "react-icons/fc";
import {
  MdPhotoSizeSelectActual,
  MdOutlineEvent,
  MdPersonOutline,
} from "react-icons/md";
import { ProfilePhoto } from "./ProfilePhoto";
import { Profile } from "../../types/profile";
import { observer } from "mobx-react-lite";
import { ProfileFollowings } from "./ProfileFollowings";
import { useStore } from "../../app/stores/store";

interface Props {
  profile: Profile;
}

export const ProfileContent = observer(({ profile }: Props) => {
  const { profileStore } = useStore();
  const panes = [
    {
      menuItem: "About",
      render: () => <div>About content</div>,
      icon: FcAbout,
    },
    {
      menuItem: "Photos",
      render: () => <ProfilePhoto profile={profile} />,
      icon: MdPhotoSizeSelectActual,
    },
    {
      menuItem: "Events",
      render: () => <div>Events content</div>,
      icon: MdOutlineEvent,
    },
    {
      menuItem: "Followers",
      render: () => <ProfileFollowings />,
      icon: MdPersonOutline,
    },
    {
      menuItem: "Following",
      render: () => <ProfileFollowings />,
      icon: MdPersonOutline,
    },
  ];
  return (
    <div className="p-2 mt-4 bg-white rounded-md shadow-md">
      <Tabs.Group
        style="fullWidth"
        theme={customTheme}
        onActiveTabChange={(tab) => profileStore.setActiveTab(tab)}
      >
        {panes.map((pan) => (
          <Tabs.Item icon={pan.icon} key={pan.menuItem} title={pan.menuItem}>
            {pan.render()}
          </Tabs.Item>
        ))}
      </Tabs.Group>
    </div>
  );
});

const customTheme: CustomFlowbiteTheme["tab"] = {
  tablist: {
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:outline-none focus:ring-transparent",
    },
  },
};
