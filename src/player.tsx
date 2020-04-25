import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import AlbumArt from './album-art';
import Header from './header';
// import TrackDetails from './TrackDetails';
// import SeekBar from './SeekBar';
// import Controls from './Controls';

const Player: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header message="Album nhạc buồn thất tình" />
      <AlbumArt url="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/b/0/1/c/b01cef9849731963d490c938fe4bbf7f.jpg" />
      {/* <TrackDetails title={'Ký ức ngủ quên'} artist={'BÍCH PHƯƠNG'} />
                <SeekBar />
                <Controls
                    repeatOn
                    shuffleOn
                    forwardDisabled
                    paused /> */}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#550000',
  },
  audioElement: {
    height: 0,
    width: 0,
  },
};

export default Player;
