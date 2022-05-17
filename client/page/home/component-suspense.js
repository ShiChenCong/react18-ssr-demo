import React from 'react';
import { useData } from '../../context';

export default function Comments() {
  console.log('进入Comment组件');
  const comments = useData();
  return (
    <>
      {comments.map((comment, i) => (
        <p className="comment" key={i}>
          {comment}
        </p>
      ))}
    </>
  );
}
