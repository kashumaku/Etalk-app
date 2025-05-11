import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen() {
  const [name, setName] = useState('Kasahun Melaku');
  const [username, setUsername] = useState('@kassahun');
  const [bio, setBio] = useState('Love traveling & photography!');
  const [profilePic, setProfilePic] = useState('https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600');

  return (
    <ScrollView className="flex-1 bg-white dark:bg-neutral-900 px-6 py-8">
      {/* Profile Picture */}
      <View className="w-32 h-32 rounded-full border-4 border-accent self-center">
        <Image
          source={{ uri: profilePic }}
          className="w-32 h-32 rounded-full"
        />
        <TouchableOpacity
          onPress={() => {
            // handle image picker
          }}
          className="absolute bottom-0 right-0 bg-accent p-2 rounded-full"
        >
          <Ionicons name="camera" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Full Name */}
      <View className="mb-6">
        <Text className="text-lg text-neutral-800 dark:text-white font-semibold mb-2">Full Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your full name"
          className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-xl p-4"
        />
      </View>

      {/* Username */}
      <View className="mb-6">
        <Text className="text-lg text-neutral-800 dark:text-white font-semibold mb-2">Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-xl p-4"
        />
      </View>

      {/* Bio */}
      <View className="mb-6">
        <Text className="text-lg text-neutral-800 dark:text-white font-semibold mb-2">Bio</Text>
        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="Tell us about yourself"
          multiline
          className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-xl p-4 h-24 text-base"
        />
      </View>

      {/* Save Changes Button */}
      <TouchableOpacity
        onPress={() => {
          // save logic
        }}
        className="bg-accent py-3 rounded-xl items-center"
      >
        <Text className="text-white font-semibold text-lg">Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
