// pages/index.js (or any other file where you want to use the Avatar)
import Avatar from "../../../common/avatar";
import avataricon from "../../../styles/Avatar.module.css";
const ProfileIcon = () => {
  return (
    <div>
      <Avatar
        imageUrl="/DP-Tech Hunter Bhai.png"
        alt="Your Name"
        className={avataricon}
      />
    </div>
  );
};

export default ProfileIcon;
