import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
}

function VideoTutorial({ href, ...props }: Props) {
  return (
    <div {...props}>
      <h2 className="text-2xl font-semibold mb-4 text-white">Video Tutorial</h2>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-blue-100 font-medium"
      >
        Watch on YouTube
      </a>
    </div>
  )
}

export default VideoTutorial;
