import Image from "next/image";

export default function Loading({ text, size = 25 }) {
  return (
    <div
      role="status"
      className={`w-20 h-20 relative flex justify-center items-center flex-col`}
    >
      <div className="animate-bounce">
        <div className="w-8 h-8 bg-blue-primary/60 rounded-full animate-ping"></div>
        <Image
          src="/chale_icon.png"
          width={size}
          height={size}
          alt="altlogo"
          className=" "
        />
      </div>

      <span>Loading...</span>
    </div>
  );
}
