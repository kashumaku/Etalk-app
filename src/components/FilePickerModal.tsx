import React from 'react';
import { Modal, Text, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

interface Props {
  visible: boolean;
  onClose: () => void;
  onPickCamera: () => void;
  onPickGallery: () => void;
}

 const FilePickerModal = ({
  visible,
  onClose,
  onPickCamera,
  onPickGallery,
}: Props)=> {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
     <Pressable className='flex-1 bg-black/50'/>
     <ThemedView className="absolute bottom-0 w-full bg-white p-6 rounded-t-2xl">
          <ThemedText className="text-lg font-semibold mb-4 text-center">Choose Media Source</ThemedText>

          <TouchableOpacity
            onPress={() => {
              onPickCamera();
              onClose();
            }}
            className="flex-row items-center space-x-3 p-4 border-b border-gray-200 gap-3"
          >
            <Ionicons name="camera" size={22} color="#FFD700" />
            <ThemedText className="text-base">Camera</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onPickGallery();
              onClose();
            }}
            className="flex-row items-center space-x-3 p-4 gap-3"
          >
            <Ionicons name="images" size={22} color="#FFD700" />
            <ThemedText className="text-base">Gallery</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onClose}
            className="mt-4 p-3 bg-gray-100 rounded-lg items-center"
          >
            <ThemedText className="text-gray-600">Cancel</ThemedText>
          </TouchableOpacity>
        </ThemedView>
    </Modal>
  );
}

export default FilePickerModal