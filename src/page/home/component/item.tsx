import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {InfoMediaType} from '../../../service/song';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/';

const Item: FC<InfoMediaType> = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{uri: `${coverPrefix}${props.cover}`}}
        />
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.info}>{props.listArtist.join(', ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 64,
    height: 64,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  info: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Item;