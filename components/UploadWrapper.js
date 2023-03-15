import React from "react";
import Image from "next/image";

function UploadWrapper({ uploadButtonElement }) {
  return (
    <section className="flex mx-auto flex-col md:flex-row justify-between max-w-7xl p-6">
      <div className="justify-center flex flex-col md:w-1/2">
        <h1 className="font-bold leading-tight text-gray-900 lg:text-6xl md:text-5xl text-3xl mb-5">AI-Powered Background Image Removal</h1>
        <p className="font-medium mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div className="my-4">
          {uploadButtonElement("Upload Image")}
        </div>
      </div>
      <div className="flex md:w-1/3">
        <Image width={400} height={600} src='/bg-step1.jpeg' alt="bottle of water" />
      </div>
    </section>
  );
}

export default UploadWrapper;
