import '../global.css';

import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarLabelStyle: {
      color: 'orange',
    },
          tabBarIcon: ({ color }) => <Feather size={28} name="home" color={"orange"} />,
        }}
      />

      <Tabs.Screen name="add" options={{ headerShown: false, title: 'Add Note', tabBarLabelStyle: {
      color: 'orange',
    },
      tabBarIcon: ({ color }) =><MaterialIcons name="add-circle-outline" size={24} color={"orange"} />
       }} />

      <Tabs.Screen
        name="+not-found"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="details"
        options={{
          href: null, headerShown: false, title: 'Details'
        }}
      />

      <Tabs.Screen
        name="update"
        options={{
          href: null, headerShown: false, title: 'Update'
        }}
      />
    </Tabs>
  );
}
