import React from "react";

export default function Headshot() {
  const profilePic = "/headshot.jpg";

  // 🔌 Replace these with your API data later
  const currentTrack = {
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
  };

  return (
    <section className="flex flex-col items-center gap-4 px-8 py-16">
      <div className="relative group" style={{ width: 320, height: 320 }}>
        {/* Photo */}
        <img
          src={profilePic}
          alt="Rayyan Sait"
          className="absolute rounded-full object-cover border-4 border-white shrink-0"
          style={{
            width: 256,
            height: 256,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Headphones SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 11 42 A 32 32 0 0 1 89 42"
            fill="none"
            stroke="#cccccc"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <line
            x1="11"
            y1="42"
            x2="8"
            y2="40"
            stroke="#cccccc"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="89"
            y1="42"
            x2="92"
            y2="40"
            stroke="#cccccc"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="0" y="38" width="16" height="24" rx="6" fill="#e0e0e0" />
          <rect
            x="2"
            y="40"
            width="12"
            height="20"
            rx="5"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="50" r="3" fill="#bbbbbb" />
          <circle cx="8" cy="50" r="1.5" fill="#999999" />
          <rect x="84" y="38" width="16" height="24" rx="6" fill="#e0e0e0" />
          <rect
            x="86"
            y="40"
            width="12"
            height="20"
            rx="5"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="1.2"
          />
          <circle cx="92" cy="50" r="3" fill="#bbbbbb" />
          <circle cx="92" cy="50" r="1.5" fill="#999999" />
        </svg>

        {/* Thought bubble — appears top-right on hover */}
        <div
          className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          style={{ top: -10, right: -10, transform: "translate(60%, -60%)" }}
        >
          {/* Main bubble */}
          <div
            className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-xl"
            style={{ minWidth: 160, maxWidth: 200 }}
          >
            {/* Pulsing music note + label */}
            <p className="text-xs font-semibold text-green-500 uppercase tracking-widest mb-1 flex items-center gap-1">
              <span
                style={{
                  display: "inline-block",
                  animation: "pulse 1.2s ease-in-out infinite",
                }}
              >
                ♪
              </span>
              Now Playing
            </p>
            <p className="text-sm font-bold leading-tight">
              {currentTrack.title}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {currentTrack.artist}
            </p>
            <p className="text-xs text-gray-400">{currentTrack.album}</p>
          </div>

          {/* Thought bubble tail — three shrinking circles */}
          <div
            className="absolute"
            style={{
              bottom: -10,
              left: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            />
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.12)",
              }}
            />
            <div
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="text-center text-white" style={{ marginTop: 16 }}>
        <h1 className="text-3xl font-bold">Rayyan Sait</h1>
        <p className="text-gray-400 mt-1">Software Developer</p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
