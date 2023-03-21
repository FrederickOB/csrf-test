"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useMemo } from "react";
import { sidebarNavItemsAdmin } from "./sidebarItems";
import { CollapsIcon, LogoutIcon } from "../icons";
import Image from "next/image";
import { Button } from "../Buttons/Button";


const Sidebar = ({ toggleCollapse, setToggleCollapse }) => {
  const pathname = usePathname();
  
  const activeMenu = useMemo(
    () => sidebarNavItemsAdmin.find((menu) => menu.to === pathname),
    [pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-blue-primary flex justify-between flex-col absolute z-[100]",
    {
      ["w-2/12"]: !toggleCollapse,
      ["w-[5vw]"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    ); 
  };

  // const onMouseOver = () => {
  //   setIsCollapsible(!isCollapsible);
  // };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
    // onMouseEnter={onMouseOver}
      // onMouseLeave={onMouseOver}  
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="absolute top-0 bottom-0 flex items-center justify-center w-10 h-20 my-auto bg-blue-primary -right-8">
        <button className={collapseIconClasses} onClick={handleSidebarToggle}>
          <CollapsIcon fill="#ffffff" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center">
          <div className="flex items-center gap-4 pl-1">
            {toggleCollapse ? (
              <Image src="/chale_icon.png" alt="logo" height={20} width={20} />
            ) : (
              <Image
                src="/chale_long_logo.png"
                alt="logo"
                height={100}
                width={200}
              />
            )}
          </div>
        </div>

        {!toggleCollapse && (
          <div className="flex flex-col items-center justify-center px-4 mt-10 space-y-4">
            <div className="w-40 h-40 bg-white rounded-full"></div>
            <h1 className="text-2xl text-white">User full name</h1>
            <Button
              text="view profile"
              textColor="text-blue-primary"
              // size="w-1/2"
            />
          </div>
        )}

        <div
          className={`flex flex-col ${
            toggleCollapse
              ? "items-center  h-[60vh] justify-between"
              : "items-start space-y-2"
          }   mt-24`}
        >
          {sidebarNavItemsAdmin.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={index}>
                <Link href={menu.to}>
                  <div className="flex items-center w-full h-full px-3 py-4">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light text-white"
                        )}
                      >
                        {menu.display}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span
            className={classNames(
              "text-md font-medium text-text-light text-white"
            )}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
