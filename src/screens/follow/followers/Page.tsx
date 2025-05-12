import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mock data
const followersData = [
  { id: '1', name: 'Jane Doe', username: 'janedoe', profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '2', name: 'John Smith', username: 'johnsmith', profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '3', name: 'Alice Johnson', username: 'alicejohnson', profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
  // Add more data...
];

export default function FollowersScreen() {
  const [followers, setFollowers] = useState(followersData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFollowToggle = (id: string) => {
    setFollowers((prev) =>
      prev.map((follower:any) =>
        follower.id === id ? { ...follower, followed: !follower.followed } : follower
      )
    );
  };

  const filteredFollowers = followers.filter((follower) =>
    follower.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFollower = ({ item }: any) => (
    <View className="flex-row items-center justify-between py-3 border-b border-neutral-200 dark:border-neutral-800">
      <View className="flex-row items-center space-x-4">
        <Image
          source={{ uri: item.profilePic }}
          className="w-12 h-12 rounded-full"
        />
        <View>
          <Text className="text-lg font-semibold text-black dark:text-white">{item.name}</Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400">@{item.username}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleFollowToggle(item.id)}
        className={`py-2 px-4 rounded-lg ${
          item.followed ? 'bg-neutral-200 dark:bg-neutral-700' : 'bg-accent'
        }`}
      >
        <Text className={`text-sm ${item.followed ? 'text-neutral-600 dark:text-neutral-300' : 'text-white'}`}>
          {item.followed ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-white dark:bg-neutral-900">
      <View className="px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
        <Text className="text-2xl font-semibold text-black dark:text-white">Followers</Text>
      </View>

      <View className="px-5 py-4">
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search followers"
          className="bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-xl p-4"
        />
      </View>

      <FlatList
        data={filteredFollowers}
        keyExtractor={(item) => item.id}
        renderItem={renderFollower}
        showsVerticalScrollIndicator={false}
        contentContainerClassName='p-5'
      />
    </View>
  );
}
