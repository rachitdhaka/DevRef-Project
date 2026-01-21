export const Container = ({
  children,
  className,
}: {
  className?: String;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`relative z-10 max-w-6xl px-4 sm:px-6 lg:px-2 mx-auto ${className || ""}`}
    >
      {children}
    </div>
  );
};
