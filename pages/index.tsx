import { Suspense } from 'react';
import Image from 'next/future/image';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Yusyaepul
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Back-end/ Front-end{' '}
                <span className="font-semibold">Developer</span> .
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Hi, Saya <span className="font-semibold">Yusyaepul</span>, Seorang Programmer dengan lebih dari 10 tahun
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
              pengalaman menggunakan PHP dan Javascript untuk mengembangkan, menguji dan mengamati aplikasi perusahaan.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
              Telah membuat dan mengembangkan beberapa aplikasi 
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
              untuk meningkatkan efisiensi dan data management perusahaan.
              </p>
               
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Yusyaepul"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Tech Stack
          </h3>
          <div className="flex gap-2 flex-col md:flex-row">
            <BlogPostCard
              title="HTML5, CSS, Bootstrap, JavaScript, React, JQuery"
              slug="style-guides-component-libraries-design-systems"
              gradient="from-[#D8B4FE] to-[#818CF8]"
              desc="Front End"
            />
            <BlogPostCard
              title="PHP, NodeJS, GoLang, Express, CodeIgniter, Laravel"
              slug="rust"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              desc="Back End"
            />
            <BlogPostCard
              title="Visual Studio Code, Git, Notion, Slack"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              desc="Tools"
            />
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Hard Skill
          </h3>
          <VideoCard
            index="01"
            href="/"
            length=""
            title="Full-Stack Developer"
          />
          <VideoCard
            index="02"
            href="/"
            length=""
            title="Back-end Developer"
          />
          <VideoCard
            index="03"
            href="/"
            length=""
            title="Front-end Developer"
          />
          <VideoCard
            index="04"
            href="/"
            length=""
            title="Data Engineer"
          />
          <VideoCard
            index="05"
            href="/"
            length=""
            title="Data Analyst"
          />
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}
