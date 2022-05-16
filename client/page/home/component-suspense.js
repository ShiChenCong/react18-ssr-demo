import React, { useEffect, useState } from 'react';

export default function Child() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const res = await new Promise((r) => {
        setTimeout(() => {
          r([1, 2, 3]);
        }, 4000);
      });

      setData(res);
    };
    fn();
  }, []);

  return (
    <>
      {data.map((i, key) => <i key={key}>{i}</i>)}
    </>
  );
}
