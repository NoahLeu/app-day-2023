// link profile-page from ProfilePage.tsx
// import ProfilePAge

import { ProfilePage } from "@/components/ProfilePage";


const User = {
    name: "Max Mustermann",
    email: "admin@admin.com",
    location: "Musterstadt",
    score: 300,
}

const ProfilePagePage = () => {
  return (
    <ProfilePage name={User.name} email={User.email} location={User.location} score={User.score} />

  );
}

export default ProfilePagePage;