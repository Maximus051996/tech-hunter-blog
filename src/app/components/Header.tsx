import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium lg"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <header
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Tech Hunter Blog
        </header>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "2rem",
          marginRight: "3rem",
        }}
      >
        <Image
          src="/photos/DP-Tech Hunter Bhai.png"
          alt="DP"
          style={{ borderRadius: "40%" }}
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
};

export default Header;
