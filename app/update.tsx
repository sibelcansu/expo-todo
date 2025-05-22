import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '~/src/services/firebaseConfig';

const Update = () => {
  const router = useRouter();
  const { id, title: initialTitle, content: initialContent } = useLocalSearchParams<{
    id: string;
    title: string;
    content: string;
  }>();

  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);

      const tasksRef = doc(db, 'tasks', id as string);
      await updateDoc(tasksRef, {
        title,
        content,
      });
      //setTitle('');
      //setContent('');
      setLoading(false);

      // Güncellemeden sonra geri dön
      router.replace({
    pathname: '/details',
    params: {
      id: id as string,
      title,
      content,
    },
  });
  };

  return (
    <View className="flex-1 bg-slate-100">
      <SafeAreaView className="items-center px-8 pt-8">
        <Text className="text-3xl font-bold text-center">Edit Task</Text>
      </SafeAreaView>

      <View className="flex-1 px-6 mt-6">
        <Text className="text-xl font-semibold text-gray-700 mb-2">Task Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          className="bg-white rounded-md p-4 text-lg text-gray-800"
        />

        <Text className="text-xl font-semibold text-gray-700 mt-6 mb-2">Task Content</Text>
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          className="bg-white rounded-md p-4 text-lg text-gray-800 h-40"
        />
      </View>

      <View className="px-6 pb-6">
        <TouchableOpacity
          onPress={handleUpdate}
          disabled={loading}
          className="bg-orange-600 py-4 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-semibold">
            {loading ? 'Updating...' : 'Update Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Update;
