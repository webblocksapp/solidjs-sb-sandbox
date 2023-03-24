import { Component, useContext } from 'solid-js';
import { ProfilePageContext } from './ProfilePageContext';

export const ProfilePage: Component<{ name: string; userId: string }> = (
  props
) => {
  const { UserPostsContainer } = useContext(ProfilePageContext);
  return (
    <>
      {JSON.stringify(props)}
      <UserPostsContainer />
    </>
  );
};
