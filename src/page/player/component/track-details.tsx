import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TrackDetailsProps {
  title: string;
  artist: string;
}

const TrackDetails: FC<TrackDetailsProps> = (props: TrackDetailsProps) => (
  <View style={styles.container}>
    {/* <TouchableOpacity>
      <Image
        style={styles.button}
        source={require('../../../../img/ic_add_circle_outline_white.png')}
      />
    </TouchableOpacity> */}
    <View style={styles.detailsWrapper}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.artist}>{props.artist}</Text>
    </View>
    {/* <TouchableOpacity>
      <View style={styles.moreButton}>
        <Image
          style={styles.moreButtonIcon}
          source={require('../../../../img/ic_more_horiz_white.png')}
        />
      </View>
    </TouchableOpacity> */}
  </View>
);

export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    opacity: 0.72,
  },
  moreButton: {
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: 17,
    width: 17,
  },
});
