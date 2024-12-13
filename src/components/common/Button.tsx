type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant: "submit" | "delete" | "edit" | "update" | "cancel";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "submit",
  type = "button",
}) => {
  const baseClasses =
    "px-4 py-2 text-white font-bold tracking-wide whitespace-nowrap border-none rounded transition duration-300 ease-in-out";
  const variantClasses =
    variant === "submit"
      ? "bg-darkBlue hover:bg-darkBlueHover"
      : variant === "delete"
      ? "bg-orange hover:bg-orangeHover w-full"
      : variant === "edit"
      ? "text-darkBlue bg-yellow hover:bg-yellowHover w-full"
      : variant === "update"
      ? "bg-yellow hover:bg-yellowHover"
      : "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
};
