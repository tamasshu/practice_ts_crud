type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant: "submit" | "delete";
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
      ? "bg-black hover:bg-blackHover"
      : "bg-pink hover:bg-pinkHover w-full";

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
