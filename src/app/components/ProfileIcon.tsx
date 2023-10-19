// pages/index.js (or any other file where you want to use the Avatar)
import Image from "next/image";
const ProfileIcon = () => {
  return (
    <div>
      <Image
        src="/DP-Tech Hunter Bhai.png"
        alt="Tech Hunter"
        width={10}
        height={10}
      />
    </div>
  );
};

export default ProfileIcon;
