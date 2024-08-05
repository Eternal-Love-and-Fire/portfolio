import { Icon } from "../../../libs/components/icon";

type SidebarProps = {
  layoutStyle: string;
};

const Sidebar = (props: SidebarProps) => {
  const { layoutStyle } = props;

  return (
    <div className={`${layoutStyle} flex flex-col items-center justify-center`}>
      <ul className="flex flex-col gap-6">
        <li>
          <Icon href="https://www.linkedin.com/in/yevhenkotyk/" iconType="icon-linkedin" />
        </li>
        <li>
          <Icon href="https://github.com/Eternal-Love-and-Fire" iconType="icon-github" />
        </li>
        <li>
          <Icon href="https://t.me/EternalLoveAndFire" iconType="icon-telegram" />
        </li>
        <li>
          <Icon href="https://www.instagram.com/imtg.kot/" iconType="icon-instagram" />
        </li>
        <li>
          <Icon href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=evhenisssss@gmail.com" iconType="icon-mail" />
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
