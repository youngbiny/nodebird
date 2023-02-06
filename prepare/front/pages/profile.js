import AppLayout from "../component/AppLayout";
import Head from 'next/head';

const Profile = () => {
  const followerList = [{nickname : 'biny'},{nickname : '바보'},{nickname:'노드버드'}];
  const follingList = [{nickname : 'biny'},{nickname : '바보'},{nickname:'노드버드'}];

  return(
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList}  />
        <FollowList header="팔로워 목록" data={follingList}  />
      </AppLayout>
    </>
  )
}

export default Profile;