interface MainContentProps extends React.ComponentProps<"main"> {}
import cx from "classnames";

export default function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  return (
    <main
      className={cx(
        "mx-auto w-[67.625rem] m-10 py-10 bg-white gap-6 rounded-xl",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
