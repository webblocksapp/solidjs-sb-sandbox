// ProfilePage.stories.js|jsx

import { ProfilePage } from './ProfilePage';
import { ProfilePageContext } from './ProfilePageContext';
import { UserPosts } from './UserPosts';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ProfilePage',
  component: ProfilePage,
};

const ProfilePageProps = {
  name: 'Jimi Hendrix',
  userId: '1',
};

const context = {
  //👇 We can access the `userId` prop here if required:
  UserPostsContainer() {
    return <UserPosts />;
  },
};

export const Normal = {
  render: () => (
    <ProfilePageContext.Provider value={context}>
      <ProfilePage {...ProfilePageProps} />
    </ProfilePageContext.Provider>
  ),
};
