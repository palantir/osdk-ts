import { useCallback, useEffect, useState } from "react";
import useAdmin from "../dataServices/useAdmin";
import css from "./CurrentUser.module.css";

const CurrentUser: React.FC = () => {
    const { currentUser, getCurrentProfilePictureUrl } = useAdmin();
    const [profilePictureUrl, setProfilePictureUrl] = useState<string | undefined>(undefined);

    const getProfilePicture = useCallback(async () => {
        if (!currentUser) return;
        getCurrentProfilePictureUrl(currentUser).then((url) => {
            setProfilePictureUrl(url);
        });
    } , [currentUser, getCurrentProfilePictureUrl]);

    useEffect(() => {
        if (currentUser) {
            getProfilePicture()
        }
    } , [currentUser, getProfilePicture]);

    return (
        <div className={css.container}>
            <div className={css.details}>
                {profilePictureUrl && <img src={profilePictureUrl} alt="Profile" className={css.avatar} />}
                <b>{currentUser?.username}</b>
                <span>{currentUser?.familyName} {currentUser?.givenName}</span>
            </div>
        </div>
    );
}
export default CurrentUser;
