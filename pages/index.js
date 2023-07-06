// pages/index.js
import React from 'react';

function Home({ data }) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res: contextRes } = context;
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=300'
  );
  const time = new Date();
  const data = `This is server-rendered data generated at ${time.getHours()} : ${time.getMinutes()}`;
  console.log('incoming request');
  return {
    props: {
      data,
    },
  };
}

export default Home;
