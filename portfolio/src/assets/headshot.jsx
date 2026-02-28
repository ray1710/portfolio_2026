import React from "react";
export default function headshot() {
  const profilePic = "/headshot.jpg";
  return (
    <section className="flex items-center gap-8 px-8 py-16">
      <img
        src={profilePic}
        alt="Your Name"
        className="w-48 h-48 rounded-full object-cover border-4 shrink-0"
      />
    </section>
  );
}
