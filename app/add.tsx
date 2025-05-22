import { useRouter } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '~/src/services/firebaseConfig';

type Task = {
  id: string;
  title: string;
  content: string;
};

const Add = () => {
  //usss
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const handleAdd = () => {
    //collection?tablo demek
    //bir collection açmalıyız
    const tasksRef = collection(db, 'tasks');
    //document=tablo satırı demek
    addDoc(tasksRef, { title, content});
    setTitle('');
    setContent('');

    router.navigate('/');
  };

  return (
    <View className="flex-1 gap-4 bg-slate-100">
      <SafeAreaView className="flex-row items-center justify-between px-8 pt-8">
        <Text className="flex-1 text-center text-3xl font-bold">New Task</Text>
      </SafeAreaView>

      <View className="flex-1 px-5">
        <Text className="ml-5 mt-8 text-xl font-semibold">Task Title</Text>
        <TextInput
          className="mt-2 gap-4 rounded-md bg-white px-4 pt-4 text-lg text-gray-400"
          placeholder="Enter your task title"
          value={title}
          onChangeText={setTitle}
        />

        <Text className="ml-5 mt-8 text-xl font-semibold">Task Content</Text>
        <TextInput
          className="gap-4 rounded-md bg-white px-4 pt-4 text-lg text-gray-400 h-40 mt-2"
          placeholder="Write your notes"
          multiline={true}
          value={content}
          onChangeText={setContent}
        />
      </View>

      <View className="px-5 pb-8">
        <TouchableOpacity className="rounded-xl bg-orange-500 py-4" onPress={handleAdd}>
          <Text className="font-semi-bold text-center text-lg text-white">Add New Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;
