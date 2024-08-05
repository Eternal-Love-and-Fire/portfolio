type IconProps = {
  href: string;
  iconType: string;
};

const Icon = (props: IconProps) => {
  const { href, iconType } = props;
  return (
    <a 
      href={href} 
      className="flex items-center justify-center text-xl"
      target="_blank"
    >
      <span 
        className={`${iconType} transition-colors duration-300 hover:text-teal-400`}
      ></span>
    </a>
  );
};

export { Icon };
