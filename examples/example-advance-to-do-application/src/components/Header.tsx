import CurrentUser from "./CurrentUser";
import Project, { ProjectProps } from "./Project";
import css from "./Header.module.css";

interface HeaderProps extends ProjectProps{}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className={css.container}>
            <Project {...props} />
            <CurrentUser />
        </div>
    );
}