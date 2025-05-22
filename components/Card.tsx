import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { deleteTask } from '~/src/services/deleteTask';

type Props = {
  id: string;
  name: string;
  content?: string;
};

const Card = ({ id, name, content }: Props) => {
  const router = useRouter();

  const handleDetail = () => {
    router.push({ pathname: '/details', params: { id, title: name, content } });
  };

  const handleDelete = async () => {
    await deleteTask(id);
  };

  return (
    <TouchableOpacity
      className="mx-4 mt-4 gap-4 rounded-lg bg-orange-500 p-4"
      onPress={handleDetail}>
      <View className="flex-row items-center gap-4">
        <MaterialCommunityIcons name="rectangle-outline" size={24} color="yellow" />
        <Text className="flex-1 text-2xl font-bold text-white">{name}</Text>
        <TouchableOpacity
          onPress={(e) => {
            handleDelete();
          }}>
          <MaterialCommunityIcons name="delete-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
