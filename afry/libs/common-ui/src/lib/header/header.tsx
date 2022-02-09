import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string
}

export function Header({title}: HeaderProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
