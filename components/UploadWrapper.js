import React from "react";
import Image from "next/image";

function UploadWrapper({ uploadButtonElement }) {
  return (
    <section className="flex mx-auto justify-between max-w-7xl py-6">
      <div className="justify-center flex flex-col gap-5">
        <h1>AI-Powered Background Image Removal</h1>
        <p>Remove the background from an uploaded image asset</p>
        {uploadButtonElement("Upload")}
      </div>
      <div>
        <Image width={400} height={600} src='/bg-step1.jpeg' alt="bottle of water" />
      </div>
    </section>
  );
}

export default UploadWrapper;
