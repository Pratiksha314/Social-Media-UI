import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatLists from './ChatLists';
import ProfilePage from './ProfilePage';
import FeedPage from './FeedPage';
import FriendRequests from './FriendRequests';
import AddPost from './AddPost';

const Tab = createBottomTabNavigator();

export default function NavigationPage() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }
            }}
        >
            <Tab.Screen name="Home" component={FeedPage}
                options={
                    {
                        tabBarIcon: () => <Icon
                            name='home'
                            size={26}
                        />,
                    }
                }
            />
            <Tab.Screen name="ChatLists" component={ChatLists}
                options={
                    {
                        tabBarIcon: () => <Icon
                            name='comment'
                            size={26}
                        />,
                        tabBarBadge: 3,
                    }
                }
            />
            <Tab.Screen name="Add Post" component={AddPost}
                options={
                    {
                        tabBarIcon: () => <Icon
                            name='plus'
                            size={40}
                        />,
                    }
                }
            />
            <Tab.Screen name="Notifications" component={FriendRequests}
                options={
                    {
                        tabBarIcon: () => <Icon
                            name='bell'
                            size={26}
                        />,
                        tabBarBadge: 2,
                    }
                }
            />

            <Tab.Screen name="Profile Page" component={ProfilePage}
                options={
                    {
                        tabBarIcon: () => <Icon
                            name='user'
                            size={26}
                        />,
                    }
                }
            />
        </Tab.Navigator>
    );
}