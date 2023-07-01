// link profile-page from ProfilePage.tsx
// import ProfilePAge

import {ProfilePage} from "@/components/ProfilePage";
import {api} from "@/utils/api";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {type User} from "@/types/challenge";


const ProfilePagePage = () => {
    const session = useSession();
    const [user, setUser] = useState<User | null>(
        null
    );
    const userReq = api.auth.me.useQuery({
            email: session?.data?.user?.email || "",
        },
        {
            enabled: false,
        });

    const getUser = async () => {
        if (!session?.data?.user) {
            return;
        }
        await userReq.refetch();

        if (!userReq.isSuccess || !userReq.data.user) {
            return;
        }
        setUser(userReq.data.user);
    }

    useEffect(() => {
        void getUser();
    }, [userReq.isSuccess, session.status]);

    useEffect(() => {
        console.log(user);
    }, [user]);


    return <ProfilePage username={user?.username} email={user?.email} location={"Rostock"}
                        challenge_score={user?.challenge_score}/>
}

export default ProfilePagePage;