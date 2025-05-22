import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Details = () => {
  const { id, title, content } = useLocalSearchParams<{ id: string; title: string; content: string }>();
  const router = useRouter();

  

  return (
    <View className="flex-1 bg-slate-100">
      <SafeAreaView className="items-center px-8 pt-8">
        <Text className="text-3xl font-bold text-center">{title}</Text>
      </SafeAreaView>

      <ScrollView className="flex-1 px-6 mt-6">
        <Text className="text-lg text-gray-800">{content}</Text>
      </ScrollView>

      <View className="px-6 pb-6">
        <TouchableOpacity
          onPress={() => router.push({
        pathname: '/update',
        params: { id, title: title, content: content },
      })}
          className="bg-orange-600 py-3 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-semibold">Edit Task</Text>
        </TouchableOpacity>
      </View>

      <View className="px-6 pb-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-orange-600 py-3 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Details;

