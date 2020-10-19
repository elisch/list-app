import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import styles from './home.styles';

import Button from '../../components/button/button.component';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Home = (props) => {
  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Hej {props.currentUser.name}</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button type="round" />
    </View>
  );
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Home);
