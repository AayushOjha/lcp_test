// pages/index.js
import React from 'react';
import { randomColor } from 'randomcolor';

function NoCache({ data }) {
  const _color = randomColor({
    luminosity: 'dark',
  });
  return (
    <div style={{ backgroundColor: _color }} className="boddy">
      <h1>Hello, It is NoCache header page!</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res: contextRes } = context;
  const time = new Date();
  const data = `This is server-rendered data generated at ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
  console.log('incoming request');
  return {
    props: {
      data,
    },
  };
}

export default NoCache;
