import React from 'react';

const Hashtag = ({ tag, color }) => {
    const hashtagStyle = {
        backgroundColor: color,
    }
  return (
    <span className="hashtag" style={hashtagStyle}>
      ●{tag}
    </span>
  );
};

export default Hashtag;
