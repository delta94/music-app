import React, {FC, useContext, useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SongApi, {
  InfoMediaType,
  LyricSentenceType,
  LyricType,
  LyricWordType,
} from '../../service/song';
import {playlistContext} from '../../store/playlist';

const Lyric: FC = () => {
  const [lyric, setLyric] = useState<LyricType>();
  const playlistStore = useContext(playlistContext);

  useEffect(() => {
    const songId: InfoMediaType | undefined =
      playlistStore?.playlist[playlistStore?.selectedSong];

    if (songId) {
      (async () => {
        const data: LyricType = await SongApi.mGet.getLyric(songId.idMedia);
        setLyric(data);
      })();
    }
  }, []);

  const renderLyric = () => {
    return lyric?.listData.map((sen: LyricSentenceType) => {
      return (
        <Text key={sen.startTime} style={styles.tense}>
          {sen.listData.map((word: LyricWordType) => {
            return (
              <Text
                key={
                  word.startTime
                }>{`${word.data.toLocaleUpperCase()} `}</Text>
            );
          })}
        </Text>
      );
    });
  };

  return <ScrollView style={styles.container}>{renderLyric()}</ScrollView>;
};

export default Lyric;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tense: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 15,
    marginBottom: 10,
  },
});
