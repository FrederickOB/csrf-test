import { spinner } from "../Spinner/spinner";

export function Button({
  text,
  textColor = "",
  color = "bg-amber-300",
  hover = "hover:bg-amber-400 ",
  active = "",
  focused = "",
  onClick,
  size = "w-full",
  styleProps,
  icon,
  type = "button",
  iconProd = "fa",
  iconType = "solid",
  disabled = false,
  processing = false,
}) {
  return (
    <button
      className={`${textColor} ${color} ${hover} ${active} ${focused} ${size} px-3 py-2 transition  group rounded-2xl duration-300 ${styleProps}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {processing || icon ? (
        <>
          <div className="relative flex items-center justify-center space-x-4">
            {icon && iconProd === "fa" && (
              <i
                className={`fa-${iconType}  fa-${icon} text-lg text-${textColor} absolute left-0 w-5`}
              ></i>
            )}
            {icon && iconProd !== "fa" ? icon : null}
            <span
              className={`block text-sm w-max sm:text-base ${
                processing ? "" : "mr-5"
              }`}
            >
              {text}
            </span>
            <div className="absolute right-0 w-5">
              {processing ? spinner("", textColor) : null}
            </div>
          </div>
        </>
      ) : (
        <p className="w-full text-center">{text}</p>
      )}
    </button>
  );
}

// export function IconButton({
//   textColor,
//   color,
//   hover = "",
//   active = "",
//   focused = "",
//   onClick,
//   iconProd = "fa",
//   iconType = "solid",
//   disabled = false,
//   ref,
// }) {
//   return (
//     <button
//       className={`px-2 py-2 transition group rounded-2xl duration-300 ${textColor} ${color} ${hover} ${active} ${focused} ${styleProps} `}
//       onClick={onClick}
//       disabled={disabled}
//       type={type}
//       ref={ref}
//     >
//       {icon && iconProd === "fa" && (
//         <i
//           className={`fa-${iconType}  fa-${icon} text-lg text-${textColor} `}
//         ></i>
//       )}
//       {icon && iconProd !== "fa" ? icon : null}
//     </button>
//   );
// }
