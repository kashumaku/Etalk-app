import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParams } from '../../types/navigatorParams/AppStackParams';

const mockPosts = Array.from({ length: 12 }, (_, i) => ({
  id: i.toString(),
  uri: `https://source.unsplash.com/random/300x300?sig=${i}`,
}));

const screenWidth = Dimensions.get('window').width;
const postSize = screenWidth / 3;

export default function ProfileScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>()
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    console.log('Logout tapped');
    navigation.navigate('Login')
  };

  const handleThemeToggle = () => {
    console.log('Toggle theme');
  };

  return (
    <View
      className="flex-1 bg-white dark:bg-black"
      style={{ paddingTop: insets.top }}
    >
      {/* Header */}
      <View className="px-5 pt-5 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
            className="w-20 h-20 rounded-full mr-4"
          />
          <View className="flex-1">
            <Text className="text-xl font-semibold text-black">
              Kassahun Melaku
            </Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">
              @kassahun
            </Text>
            <Text className="text-sm mt-1 text-neutral-700 dark:text-neutral-300">
              Passionate about tech & travel 🌍
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity
           onPress={()=>navigation.navigate('MyPosts')}
          className="items-center">
            <Text className="text-lg font-bold text-black">120</Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('Followers')}
          className="items-center">
            <Text className="text-lg font-bold text-black">4.3K</Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('Following')}
          
          className="items-center">
            <Text className="text-lg font-bold text-black">318</Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">Following</Text>
          </TouchableOpacity>
        </View>

        {/* Edit Profile */}
        <TouchableOpacity 
        onPress={()=>navigation.navigate('EditProfile')}
        className="mt-5 bg-accent py-2 rounded-xl items-center">
          <Text className="text-white font-medium">Edit Profile</Text>
        </TouchableOpacity>

        {/* Settings Section */}
        <View className="mt-4 gap-5">
          <TouchableOpacity
                   onPress={()=>navigation.navigate('EditProfile')}
            className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl"
          >
            <Ionicons name="pencil-sharp" size={20} color="#FFD700" />
            <Text className="text-black text-base">Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleThemeToggle}
            className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl"
          >
            <Ionicons name="moon" size={20} color="#FFD700" />
            <Text className="text-black text-base">Toggle Dark Mode</Text>
          </TouchableOpacity>
         

          <TouchableOpacity
            className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl"
          >
            <Feather name="settings" size={20} color="#FFD700" />
            <Text className="text-black text-base">Account Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl"
          >
            <MaterialIcons name="security" size={20} color="#FFD700" />
            <Text className="text-black text-base">Privacy & Security</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleLogout}
            className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl"
          >
                       <Feather name="log-out" size={20} color="red" />

            <Text className="text-red-600 dark:text-red-300 text-base">Logout</Text>

          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={handleLogout}
            className="flex-row items-center justify-center space-x-3 bg-red-100 dark:bg-red-900  px-4 py-3 rounded-xl"
          >
            <Feather name="log-out" size={20} color="red" />
            <Text className="text-red-600 dark:text-red-300 text-base">Logout</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* Posts Grid */}
      <FlatList
        data={mockPosts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={{ width: postSize, height: postSize }}
            className="border border-white dark:border-black"
          />
        )}
      />
    </View>
  );
}
