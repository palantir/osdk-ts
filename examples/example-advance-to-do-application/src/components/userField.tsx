import { User } from "@osdk/foundry.admin";
import { Tooltip } from "react-tooltip";

interface UserFieldProps {
    user: User;
}

export const UserField: React.FC<UserFieldProps> = ({ user }) => {
  const {givenName, familyName, email} = user;

    const userFullName = `${givenName} ${familyName}`;
    const mailToHtml = `<a href="mailto:${email}">${email}</a>`;
    return (
      <div>
        <a 
            data-tooltip-id={`my-tooltip-data-html-${user.id}`}
            data-tooltip-html={mailToHtml}>
        {userFullName}
      </a>
      <Tooltip place="top" id={`my-tooltip-data-html-${user.id}`} clickable/>
    </div>
    );
  };