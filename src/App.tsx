import React from 'react'

import {
  AcademicCapIcon,
  PencilIcon,
  PaperClipIcon,
  CodeIcon,
  CubeTransparentIcon,
  ServerIcon,
  ClockIcon,
  MailIcon,
  PuzzleIcon,
  ChartBarIcon,
  BeakerIcon,
  LibraryIcon,
  CurrencyYenIcon,
  CubeIcon,
} from '@heroicons/react/outline'
import {
  Alibabacloud,
  C,
  Cloudflare,
  R,
  Cplusplus,
  Github,
  Go,
  Googlescholar,
  Java,
  Javascript,
  Jetbrains,
  Neovim,
  Nextdotjs,
  Python,
  Pytorch,
  ReactJs,
  Sinaweibo,
  Tailwindcss,
  Telegram,
  Twitter,
  Typescript,
  Vim,
  Vercel,
  Visualstudiocode,
  Vuedotjs,
} from '@icons-pack/react-simple-icons'
import toast, { Toaster } from 'react-hot-toast'
import { useClipboard } from 'use-clipboard-copy'

import { socials } from './config/socials'
import { projects } from './config/projects'

import CardBtnLink from './components/CardBtnLink'
import CardBtnCustom from './components/CardBtnCustom'
import CardBtnIcons from './components/CardBtnIcons'
import SocialIcons from './components/SocialIcons'
import SocialCard from './components/SocialCard'
import ProjectCard from './components/ProjectCard'

import avatar from './assets/avatar.png'
import wave from './assets/wave.png'
import paimon from './assets/genshin-impact.svg'

const socialCards = socials.map(s => (
  <SocialCard key={s.name} name={s.name} link={s.link} icon={s.icon} apiUrl={s.apiUrl} color={s.color} />
))

const projectCards = projects.map(p => (
  <ProjectCard key={p.name} name={p.name} link={p.link} slug={p.slug} bimg={p.bimg} />
))

const App = () => {
  const currentYear: number = new Date().getFullYear()
  const clipboard = useClipboard()

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 pb-6 max-w-4xl bg-base-300 rounded">
        <div className="mt-12 md:mt-24 p-6 bg-neutral shadow-md rounded transform -translate-y-6">
          <Toaster />

          <div className="flex flex-col space-y-4 md:flex-row md:space-x-8">
            <img
              className="w-24 h-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2"
              src={avatar}
              alt="avatar"
            />

            <div>
              <div className="flex items-center">
                <div className="text-2xl md:text-3xl text-neutral-content">Welcome to My Site !</div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl md:text-3xl text-neutral-content">I'm qlAD.</div>
                <img className="w-8 h-8 ml-2 wave" src={wave} alt="wave" />
              </div>
              <div className="flex flex-wrap mt-8 gap-2 overflow-hidden">
                <CardBtnCustom
                  icon={AcademicCapIcon}
                  desc={'edu.study'}
                  content={
                    <div
                      className="btn btn-sm btn-secondary"
                      onClick={() => {
                        clipboard.copy('南郑县大河坎中学')
                        toast.success('已复制学校名称到剪切板')
                      }}>
                      <div className="tooltip  flex items-center" data-tip="我们学校好像没有官网 😑">
                        <span>南郑县大河坎中学.高中</span>
                      </div>
                    </div>
                  }
                />

                <CardBtnLink
                  desc={'edu.member'}
                  link={'https://tuna.moe/'}
                  content={'清华大学TUNA协会'}
                  ping={true}
                  pingColor={"bg-red-300"}
                  icon={AcademicCapIcon}
                />

                <CardBtnLink
                  desc={'edu.dream'}
                  link={'https://www.bupt.edu.cn/'}
                  content={'北京邮电大学'}
                  ping={true}
                  pingColor={"bg-purple-400"}
                  icon={AcademicCapIcon}
                />
              </div>

              <hr className="border-dashed mt-4" />
              <div className="flex flex-wrap mt-4 gap-2">
                <CardBtnLink
                  desc={'publish[0]'}
                  link={'https://blog.qlad.top'}
                  content={'blog.qlad.top'}
                  ping={true}
                  pingColor={'bg-green-300'}
                  icon={PaperClipIcon}
                />

                <CardBtnLink
                  desc={'publish[1]'}
                  link={'https://storage.qlad.top'}
                  content={'storage.qlad.top'}
                  ping={true}
                  pingColor={'bg-blue-400'}
                  icon={PaperClipIcon}
                />

                <CardBtnCustom
                  desc={'timezone'}
                  icon={ClockIcon}
                  content={<div className="btn btn-sm btn-outline btn-accent">China (GMT+8)</div>}
                />
                <CardBtnCustom
                  desc={'genshin.impact'}
                  icon={PuzzleIcon}
                  content={
                    <div
                      className="btn btn-sm btn-outline btn-accent"
                      onClick={() => {
                        clipboard.copy('168305666')
                        toast.success('已复制 UID 到剪切板')
                      }}
                    >
                      <div className="tooltip tooltip-bottom flex items-center" data-tip="原来你也玩原神 🍬">
                        {/* <img src={paimon} alt="paimon" className="w-5 h-5 mr-1" /> */}
                        <span>UID: 168305666</span>
                      </div>
                    </div>
                  }
                />

                <CardBtnIcons
                  desc={'use.lang'}
                  descIcon={CodeIcon}
                  icons={[C, Cplusplus, Python, Javascript, Typescript]}
                />
                <CardBtnIcons
                  desc={'use.framework'}
                  descIcon={CubeTransparentIcon}
                  icons={[Pytorch, ReactJs, Nextdotjs, Vuedotjs, Tailwindcss]}
                />
                <CardBtnIcons
                  desc={'use.service'}
                  descIcon={ServerIcon}
                  icons={[Visualstudiocode, Vim, Vercel, Cloudflare]}
                />
              </div>

              <hr className="border-dashed mt-4" />

              <div className="flex flex-wrap mt-4 gap-2">
                <SocialIcons link={'https://github.com/qlAD'} icon={Github} />
                <SocialIcons link={'https://t.me/qlAD_Meteor'} icon={Telegram} />
                <a className="btn btn-sm btn-outline border-white text-white" href="mailto:qlad_adgk@163.com">
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <BeakerIcon className="w-6 h-6" />
            <span className="text-xl ml-2 font-bold">Projects</span>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">{projectCards}</div>

          <div className="flex items-center">
            <CubeIcon className="w-6 h-6" />
            <span className="text-xl ml-2 font-bold">Environment</span>
          </div>
          <div className="p-2 rounded shadow bg-base-100 transition transform hover:shadow-md hover:-translate-y-1">
            <div className="text-sm">
              <span className="font-bold">配置</span>：Arch Linux + Bspwm + Virt Manager + Neovim
            </div>
            <div className="text-sm">
            <span className="font-bold">学习</span>：就读于<span className="font-bold"> 南郑县大河坎中学 </span>
            </div>
            <div className="text-sm">
            <span className="font-bold">成就</span>：2019 年加入<span className="font-bold"> 清华大学TUNA开源协会</span>
            </div>
          </div>

          <div className="flex items-center">
            <CurrencyYenIcon className="w-6 h-6" />
            <span className="text-xl ml-2 font-bold">Sponsor</span>
          </div>
          <div>
            <a className="sponsor p-1 bg-base-100 transition transform hover:shadow-md hover:-translate-y-1" href="https://s2.loli.net/2022/04/30/vd7hgLDkpW9j5JU.jpg">
              <img src="https://s2.loli.net/2022/04/30/vd7hgLDkpW9j5JU.jpg" />
            </a>
            <a className="sponsor p-1 bg-base-100 transition transform hover:shadow-md hover:-translate-y-1" href='https://s2.loli.net/2022/04/30/5lQja3Ecm1dAHpw.png'>
              <img src="https://s2.loli.net/2022/04/30/5lQja3Ecm1dAHpw.png" />
            </a>
            <a className="sponsor p-1 bg-base-100 transition transform hover:shadow-md hover:-translate-y-1" href='https://s2.loli.net/2022/04/30/smGDZFdBR1KJAOH.png'>
              <img src="https://s2.loli.net/2022/04/30/smGDZFdBR1KJAOH.png" />
            </a>
          </div>

          <div className="flex items-center">
            <ChartBarIcon className="w-6 h-6" />
            <span className="text-xl ml-2 font-bold">Stats</span>
          </div>
          <div className="flex flex-wrap gap-1">{socialCards}</div>

        </div>
      </div>

      <footer className="w-full text-center my-8">
        <div>
          由{' '}
          <a className="link" href="https://reactjs.org/">
            React
          </a>
          ,{' '}
          <a className="link" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          ,{' '}
          <a className="link" href="https://vitejs.dev/">
            Vite
          </a>{' '}
          和{' '}
          <a className="link" href="https://www.typescriptlang.org/">
            TypeScript
          </a> 强力驱动
        </div>
        <div>qlAD 乔从 2019-{currentYear} 陪伴你</div>
      </footer>
    </div>
  )
}

export default App
