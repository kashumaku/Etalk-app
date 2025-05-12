import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

// Example data
const followingList = [
  { id: '1', name: 'Emily Johnson', username: 'emjay', profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '2', name: 'Chris Evans', username: 'chrise', profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '3', name: 'Sophia Lee', username: 'sophlee', profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function FollowingScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [following, setFollowing] = useState(followingList);

  const handleUnfollow = (id: string) => {
    setFollowing((prev) => prev.filter((user) => user.id !== id));
  };

  const filtered = following.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: any) => (
    <View className="flex-row justify-between items-center py-3 border-b border-neutral-200 dark:border-neutral-800">
      <View className="flex-row items-center space-x-4">
        <Image source={{ uri: item.profilePic }} className="w-12 h-12 rounded-full" />
        <View>
          <Text className="text-base font-semibold text-black dark:text-white">{item.name}</Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400">@{item.username}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleUnfollow(item.id)}
        className="bg-neutral-200 dark:bg-neutral-700 px-4 py-2 rounded-xl"
      >
        <Text className="text-sm text-neutral-700 dark:text-neutral-200">Unfollow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-white dark:bg-neutral-900">
      <View className="px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
        <Text className="text-2xl font-semibold text-black dark:text-white">Following</Text>
      </View>

      <View className="px-5 py-4">
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search following"
          className="bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-xl p-4"
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
