import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const postSize = screenWidth / 3;

const initialPosts = [
    {
      id: '1',
      type: 'image',
      uri: 'https://picsum.photos/200?g=2',
    },
    {
      id: '2',
      type: 'video',
      thumbnail: 'https://picsum.photos/200?d=3',
    },
    {
      id: '3',
      type: 'image',
      uri: 'https://picsum.photos/200?b=4',
    },
    {
      id: '5',
      type: 'image',
      uri: 'https://picsum.photos/200?a=4',
    },
  ];

export default function MyPostsScreen() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLongPress = (id: string) => {
    setSelectedPostId(id);
    setModalVisible(true);
  };

  const handleDelete = () => {
    setPosts((prev) => prev.filter((p) => p.id !== selectedPostId));
    setModalVisible(false);
    setSelectedPostId(null);
  };

  const renderPost = ({ item }: any) => (
    <TouchableOpacity
      onLongPress={() => handleLongPress(item.id)}
      className="relative"
      style={{ width: postSize-15, height: postSize, marginRight:10 }}
    >
      <Image
        source={{ uri: item.type === 'image' ? item.uri : item.thumbnail }}
        className="w-full h-full"
      />
      {item.type === 'video' && (
        <View className="absolute bottom-1 right-1 bg-black/50 p-1 rounded-full">
          <Ionicons name="play-circle" size={16} color="#FFD700" />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <View className="px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
        <Text className="text-lg font-bold text-black dark:text-white">My Posts</Text>
      </View>

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60,padding:10,gap:10 }}
      />

      {/* Delete Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="bg-white dark:bg-neutral-900 p-6 rounded-xl w-11/12 max-w-sm">
            <Text className="text-lg font-semibold text-black dark:text-white mb-4">
              Delete Post?
            </Text>
            <Text className="text-neutral-600 dark:text-neutral-300 mb-6">
              Are you sure you want to delete this post? This action cannot be undone.
            </Text>

            <View className="flex-row justify-end space-x-3">
              <Pressable
                onPress={() => setModalVisible(false)}
                className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-md"
              >
                <Text className="text-black dark:text-white">Cancel</Text>
              </Pressable>
              <Pressable
                onPress={handleDelete}
                className="px-4 py-2 bg-accent rounded-md"
              >
                <Text className="text-white font-medium">Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
