import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { userInfo } from "../../features/user";
import { ReportingService } from "../../Services/ReportingService";

export default function FormDropdown(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);

  const user = useSelector(userInfo);
  const sidebarDropdownRef = useRef();
  const indicatorDropdownRef = useRef();
  const location = useLocation();
  const [forms, setForms] = useState(null);

  const organisationId = user?.data.organisation.id;

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem =
        sidebarDropdownRef.current.querySelector(".dropdown-item");
      indicatorDropdownRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    ReportingService.getForms(organisationId)
      .then((res) => setForms(res.data.data))
      .catch((err) => console.log(err));
  }, [organisationId]);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[2];
    const activeItem = forms?.findIndex((item) => {
      return item.id === parseInt(curPath);
    });
    setActiveIndex(activeItem);
  }, [location, forms]);
  return (
    <div
      ref={sidebarDropdownRef}
      className="relative transition-all duration-200 ease-in-out"
    >
      {props.showFormDropdown ? (
        <>
          <div
            ref={indicatorDropdownRef}
            className="absolute hidden 2xl:flex h-12  items-center text-green-600 top-0 left-5  -z-[1] -translate-x-1/2 transition duration-200 ease-in-out "
            style={{
              transform: `translateX(-50%) translateY(${
                activeIndex * stepHeight + 16 * activeIndex
              }px)`,
            }}
          >
            <i className="my-auto fa fa-arrow-right" aria-hidden="true"></i>
          </div>
          <div className="">
            {forms && forms.length !== 0 ? (
              <>
                {forms
                  .filter((form) => form.label !== "")
                  .slice(0, 4)
                  .map((item, index) => (
                    <Link to={`/forms/${item.id}`} key={index}>
                      <div
                        className={`flex items-center content-start ml-4 2xl:ml-12 mb-4 truncate w-28 lg:w-40 2xl:w-48  py-3 px-3  transition duration-400 ease-in-out dropdown-item ${
                          activeIndex === item.id
                            ? "text-green-600"
                            : "text-gray-600"
                        }`}
                      >
                        <div className="text-sm ">{item.label}</div>
                      </div>
                    </Link>
                  ))}
                {forms.length > 4 && (
                  <Link to={"/forms"}>
                    <div
                      className={`flex items-center content-start ml-4 2xl:ml-12 mb-4  py-3 px-3  transition duration-400 ease-in-out dropdown-item ${
                        activeIndex === 5 ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      <div className="text-sm ">show all ...</div>
                    </div>
                  </Link>
                )}
              </>
            ) : (
              <div
                className={`flex items-center content-start ml-12 mb-4  py-3 px-3  transition duration-400 ease-in-out dropdown-item  text-gray-600`}
              >
                <div className="text-sm ">No form Added</div>
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
