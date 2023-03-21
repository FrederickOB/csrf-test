export function TextInput({
  label,
  name,
  value,
  onChange,
  width = "w-full",
  error,
  textColor = "text-black",
  type = "text",
  placeholder,
  disabled = false,
  icon,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  autoComplete,
  onMouseDown,
  buttonIcon,
  buttonOnClick,
}) {
  return (
    <div className={`flex flex-col mb-4 ${textColor} `}>
      {label ? (
        <label className="ml-3 font-bold capitalize" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <div
        className={`flex items-center px-3 py-2 border-2 rounded-2xl ${
          label ? "mt-1" : ""
        } ${error ? "border-red-500" : ""}`}
      >
        {icon ? icon : null}
        <input
          className={`${width} pl-2 border-none outline-none`}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          autoComplete={autoComplete}
          onKeyUp={onKeyUp}
          onMouseDown={onMouseDown}
        />
        {buttonIcon && (
          <div
            className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer "
            onClick={() => buttonOnClick()}
            buttonOnClick
          >
            {buttonIcon}
          </div>
        )}
      </div>
      {error && <div className="mt-1 ml-2 text-xs text-red-500">{error}</div>}
    </div>
  );
}
