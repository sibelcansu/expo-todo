import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from '~/components/Card';
import { db } from '~/src/services/firebaseConfig';

type Task = {
  id: string;
  title: string;
  content: string;
};

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    const tasksRef = collection(db, 'tasks');

    const unsubscribe = onSnapshot(tasksRef, (snapshot) => {
      const updatedTasks: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, 'id'>),
      }));
      setTasks(updatedTasks);
    });

    return () => unsubscribe(); // bileşen unmount olursa listener'ı kapat
  }, []);

  return (
    <View className="flex-1 bg-slate-100">
      <SafeAreaView className="flex-row items-center px-8 pt-8">
        <Text className="text-center text-3xl font-bold">Your Notes</Text>
      </SafeAreaView>

      <ScrollView className="px-8 mt-4">
        {tasks.map((task) => (
          <Card key={task.id} id={task.id} name={task.title} content={task.content} />
        ))}
      </ScrollView>

    </View>
  );
};

export default Index;
