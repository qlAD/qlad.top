import { Rss, Props, E, Android} from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export interface SocialProps {
  name: string
  link: string
  icon: FC<Props> | null
  apiUrl: string
  color: string
}

export const socials: SocialProps[] = [
  {
    name: 'RSS',
    link: 'https://blog.qlad.top/',
    icon: Rss,
    apiUrl:
      'https://api.spencerwoo.com/substats/?source=feedly|inoreader&queryKey=https%3A%2F%2Fblog.spencerwoo.com%2Fposts%2Findex.xml',
    color: '#FFA500',
  },
  {
    name: 'NeteaseMusic',
    link: 'https://music.163.com/#/user/home?id=1933047728',
    icon: E,
    apiUrl: 'https://api.swo.moe/stats/neteasemusic/1933047728',
    color: '#2CA5E0',
  },
  {
    name: 'CoolApk',
    link: 'https://blog.qlad.top/',
    icon: Android,
    apiUrl:
      'https://api.spencerwoo.com/substats/?source=feedly|inoreader&queryKey=https%3A%2F%2Fblog.spencerwoo.com%2Fposts%2Findex.xml',
    color: '#FFA500',
  }
]
