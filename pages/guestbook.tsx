import { useState, useEffect, useRef } from 'react';
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";
import axios from 'axios';
import { Form, FormState } from 'lib/types';

import Container from 'components/Container';

export default function GuestBook({ fallbackData }) {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const apiEndPoint = 'https://guestbook-yus-default-rtdb.asia-southeast1.firebasedatabase.app/guestbook.json';

  const current = new Date();
  const tanggal = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

  const inputVal = useRef(null);

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const addPost = async () => {
    const post = { nama: session.user?.name, pesan: inputVal.current.value, date: tanggal };
    await axios.post(apiEndPoint, post);
    setPosts([post]);
  }

  return (
    <Container title="Buku Tamu – Yusyaepul">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Buku Tamu
        </h1>
        <button className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28" onClick={addPost}>Coba</button>
        <p>
          Silakan tinggalkan pesan anda di bawah. Itu bisa berbentuk apa saja, apresiasi, informasi, ataupun sebuah candaan.
        </p>
        <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Masuk untuk Isi Buku Tamu
        </h5>
        <SessionProvider session={session}>
        {!session ? (
          <>
            <p>Belum masuk? Silakan masuk untuk mengisi <b>Buku Tamu</b></p>
            <button className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28" onClick={() => signIn()}>Masuk</button>
          </>
        ) : (
          <div>
            <p>Anda masuk sebagai <b>{ session.user.name }</b>, <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => signOut()}><i>Keluar</i></span></p>
            <form className="relative my-4">
              <input
                ref={inputVal}
                aria-label="Pesan anda"
                placeholder="Pesan anda..."
                required
                className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <button
                className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
                onClick={addPost}
              >
                Tulis
              </button>
            </form>
          </div>
        )}
        </SessionProvider>
        </div>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <div className="flex space-x-8">
            <table className='table'>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Pesan</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(posts)
              ? posts.map(sign => (
                <tr key={sign.id}>
                  <td>{sign.nama}</td>
                  <td>{sign.pesan}</td>
                  <td>{sign.date}</td>
                </tr>  
                ))
              : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}
