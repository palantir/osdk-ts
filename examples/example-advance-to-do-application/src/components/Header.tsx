import CurrentUser from "./CurrentUser";
import Project, { ProjectProps } from "./Project";
import css from "./Header.module.css";

export const Header: React.FC<ProjectProps> = (props) => {
    return (
        <div className={css.container}>
            <Project {...props} />
            <CurrentUser />
        </div>
    );
}