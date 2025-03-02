import {Text, View} from 'react-native';
import styles from '../utils/Styles';

const EmptyList = ({message}) => {
  return (
    <View style={styles.emptyListView}>
      <Text style={styles.noDataText}>
        {message ? message : 'Data not available.'}
      </Text>
    </View>
  );
};

export default EmptyList;
