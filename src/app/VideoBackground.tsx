'use client'

import React, { useEffect, useState } from 'react'

const VideoBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  
  return (
    <video autoPlay={true} muted={true} loop={true} controls={false} playsInline={true} preload="auto" className="absolute w-full h-full inset-0 object-cover border border-slate-900 grayscale opacity-100">
      <source src="/hello.mp4" type="video/mp4" />
    </video>
  )
}

export default VideoBackground