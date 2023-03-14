import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { saveAs } from "file-saver";

const regex = /^(.+)(\.(png|jpg|jpeg))$/;

function DownloadImage({
  initialImage,
  modifiedImage,
  imageName,
  loading,
  timeOfRequest,
  uploadButtonElement,
}) {
  const modifiedImageFileName = imageName.replace(regex, "$1-removebg$2");
  const downloadImage = () => {
    saveAs(modifiedImage, modifiedImageFileName);
  };

  // Temporary screen after image upload to display progress
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow">
          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-28 pb-12 md:pt-28 md:pb-20">
                <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
                  <h4 className="text-xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-4">
                    Background removal in progress
                  </h4>
                  {/* TODO: Add animated loading icon for better ux */}
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Screen for viewing and downloading the transformed image
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-28 pb-12 md:pt-28 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
                {timeOfRequest ? (
                  <h4 className="text-xl md:text-2xl font-extrabold leading-tighter tracking-tighter">
                    Background removed in{" "}
                    <span className="bg-clip-text text-transparent">
                      {Math.round(timeOfRequest * 10) / 10}
                    </span>{" "}
                    seconds
                  </h4>
                ) : (
                  <h4 className="text-xl md:text-2xl font-extrabold leading-tighter tracking-tighter">
                    🎉 Background removed
                  </h4>
                )}
              </div>

              <div className="max-w-lg mx-auto mb-5 border-solid border-2 border-gray-300 rounded-xl">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={initialImage}
                      srcSet={initialImage}
                      style={{ borderRadius: "0.5rem" }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={modifiedImage}
                      srcSet={modifiedImage}
                      style={{ borderRadius: "0.5rem" }}
                    />
                  }
                />
              </div>

              <div className="max-w-sm mx-auto">
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button
                      onClick={downloadImage}
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                    >
                      Download
                    </button>
                  </div>
                </div>
                <div className="text-sm text-gray-500 text-center mt-3">
                  {uploadButtonElement()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DownloadImage;
