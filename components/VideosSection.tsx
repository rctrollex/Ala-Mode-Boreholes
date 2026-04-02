'use client';
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaPlay, FaTimes } from "react-icons/fa";

interface Video {
  id: number;
  category: string;
  title: string;
  videoUrl: string;
  duration: string;
}

export default function FeaturedVideoProjects() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  // Data array - Thumbnails removed. Ensure your videoUrls are valid .mp4 links.
  const videos: Video[] = [
    {
      id: 1,
      category: "RESIDENTIAL",
      title: "Home Installation",
      videoUrl: "/vid_1.mp4",
      duration: "02:45"
    },
    {
      id: 2,
      category: "COMMUNITY",
      title: "Home Installation",
      videoUrl: "/vid_2.mp4",
      duration: "04:12"
    },
    {
      id: 3,
      category: "RESIDENTIAL",
      title: "Home Borehole Installation",
      videoUrl: "/vid_3.mp4",
      duration: "03:30"
    },
    // {
    //   id: 4,
    //   category: "MAINTENANCE",
    //   title: "Pump System Upgrade",
    //   videoUrl: "/vid__4.mp4",
    //   duration: "01:55"
    // },
    {
      id: 5,
      category: "TESTING",
      title: "Water Quality Assessment",
      videoUrl: "/vid_5.mp4",
      duration: "05:10"
    },
    {
      id: 6,
      category: "SERVICE",
      title: "Solar Pump, Tank, and Installation Service",
      videoUrl: "/vid_6.mp4",
      duration: "02:20"
    },
    {
      id: 7,
      category: "HIGHLIGHTS",
      title: "Borehole Drilling in Action",
      videoUrl: "/vid_7.mp4",
      duration: "06:15"
    },
    {
      id: 8,
      category: "COMMUNITY",
      title: "Rural Village Solar Borehole Installation",
      videoUrl: "/vid_8.mp4",
      duration: "04:50"
    },
    {
      id: 9,
      category: "RESIDENTIAL",
      title: "Rural Village Home Installation",
      videoUrl: "/vid__9.mp4",
      duration: "04:50"
    },
  ];

  // Prevent background scrolling when the video modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeVideo]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="w-full py-20 bg-[#F2EDE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#005A5A] mb-4">
            Project Video Gallery
          </h2>
          <p className="text-[#4a5f5f] max-w-2xl mx-auto text-base md:text-lg">
            Watch our teams in action. Explore a selection of our completed borehole installations and water system solutions.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {videos.slice(0, visibleCount).map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-black"
            >
              {/* Background Video (Acts as thumbnail) */}
              {/* #t=0.1 forces the browser to load the first frame of the video */}
              <video
                src={`${video.videoUrl}#t=0.1`}
                preload="metadata"
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-50 pointer-events-none"
              />

              {/* Deep teal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f2f]/95 via-[#003f3f]/30 to-transparent pointer-events-none" />

              {/* Play Button Overlay (Centered) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-16 h-16 bg-[#CFA45A]/90 backdrop-blur-sm text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(207,164,90,0.4)] group-hover:scale-110 group-hover:bg-[#CFA45A] transition-all duration-300">
                  <FaPlay className="ml-1 text-xl" />
                </div>
              </div>

              {/* Duration Tag */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2 py-1 rounded z-10">
                {video.duration}
              </div>

              {/* Content / Info */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white pointer-events-none z-10">
                <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold uppercase tracking-wider bg-[#CFA45A] text-black rounded shadow">
                  {video.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold leading-tight tracking-wide drop-shadow-md">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < videos.length && (
          <div className="text-center">
            <button 
              onClick={handleViewMore}
              className="inline-flex items-center px-8 py-3 bg-[#005A5A] text-white font-semibold rounded-xl hover:bg-[#004747] transition-colors duration-300 shadow-lg"
            >
              Load More Videos <FaArrowRight className="ml-2" />
            </button>
          </div>
        )}
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
          
          {/* Close Background Click */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setActiveVideo(null)} 
          />

          {/* Close Button */}
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 z-[60] text-white/70 hover:text-white hover:scale-110 transition-all bg-black/50 p-3 rounded-full"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Active Video Container */}
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] z-[60] animate-in fade-in zoom-in duration-300">
            <video 
              src={activeVideo.videoUrl} 
              controls 
              autoPlay 
              className="w-full h-auto max-h-[85vh] aspect-video object-contain outline-none"
              controlsList="nodownload"
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Modal Info Bar underneath video */}
            <div className="absolute bottom-16 sm:bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none hidden sm:block">
              <span className="text-[#CFA45A] text-sm font-bold tracking-wider uppercase mb-1 block">
                {activeVideo.category}
              </span>
              <h2 className="text-white text-xl font-semibold">
                {activeVideo.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}