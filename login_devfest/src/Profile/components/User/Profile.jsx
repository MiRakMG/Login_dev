import styles from "./Profile.module.scss";
import ProfileSettingL from "./ProfileSettingL";
import ProfileSettingR from "./ProfileSettingR";


function Profile () {
    return (
        <div className={styles.MainProfile}>
            <div className={styles.ProfileContainer}>
                <div className={styles.TopPortion}>
                    <div className={styles.UserProfileBgImage}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.UserProfileImage}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.UserName}>
                        <h1>DevFest User</h1>
                        <h2>Mise à jour de votre profile</h2>
                    </div>
                </div>
                <div className={styles.BottomPortion}>
                        <div className={styles.ContainerSett}>
                            <ProfileSettingL />
                            <ProfileSettingR />
                        </div>
                    <button className='w-96 my-10 p-2 bg-blue-500 text-white font-semibold rounded-lg'>Enregistrer</button>
                </div>
            </div>

        </div>
    )
}

export default Profile;