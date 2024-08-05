import { ThemeToggle } from "../../../libs/components/theme-toggle";

type HeaderProps = {
  layoutStyle: string;
};

const Header = (props: HeaderProps) => {
  const { layoutStyle } = props;

  return (
    <div className={`${layoutStyle} flex justify-end lg:pr-10 pr-4`}>
      <ThemeToggle />
    </div>
  );
};

export { Header };
