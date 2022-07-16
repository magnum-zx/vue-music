/* eslint-disable no-unused-vars */
// import router from '../router';
// import state from '../store/state';
import {
  recommendPlaylist,
  // dailyRecommendPlaylist,
  // getPlaylistDetail,
} from '@/api/playlist';

export async function getRecommendPlayList(limit, removePrivateRecommand) {
  // if (isAccountLoggedIn()) {
  //   const playlists = await Promise.all([
  //     dailyRecommendPlaylist(),
  //     recommendPlaylist({ limit }),
  //   ]);
  //   let recommend = playlists[0].recommend ?? [];
  //   if (recommend.length) {
  //     if (removePrivateRecommand) recommend = recommend.slice(1);
  //     await replaceRecommendResult(recommend);
  //   }
  //   return recommend.concat(playlists[1].result).slice(0, limit);
  // } else {
  const response = await recommendPlaylist({ limit });
  return response.result;
  // }
}
