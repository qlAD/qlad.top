import { Rss, Github, Props, Telegram,  Steam,} from '@icons-pack/react-simple-icons'
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
    name: 'GitHub',
    link: 'https://github.com/qlAD',
    icon: Github,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=github&queryKey=spencerwooo',
    color: '#24292F',
  },
  {
    name: 'RSS',
    link: 'https://blog.qlad.top/',
    icon: Rss,
    apiUrl:
      'https://api.spencerwoo.com/substats/?source=feedly|inoreader&queryKey=https%3A%2F%2Fblog.spencerwoo.com%2Fposts%2Findex.xml',
    color: '#FFA500',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/qlAD_Meteor',
    icon: Telegram,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=telegram&queryKey=realSpencerWoo',
    color: '#2CA5E0',
  },
]
