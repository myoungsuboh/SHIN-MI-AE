// 비디오 파일을 직접 import 합니다.
import video_20251124 from '@/assets/lecture/videos/video1.mp4';
import image_20251124 from '@/assets/lecture/images/20251124.png';

import video_20251116 from '@/assets/lecture/videos/video2.mp4';
import image_20251116 from '@/assets/lecture/images/20251116.png';

export const lectureData = [
  {
    id: 1,
    title: '고음의 비밀을 알았어요',
    description: '고음의 비밀을 알았어요',
    thumbnail: image_20251124,
    embedUrl: video_20251124,
  },
  {
    id: 2,
    title: '공감발표회 리허설',
    description: '공감발표회 리허설',
    thumbnail: image_20251116,
    embedUrl: video_20251116,
  },
];