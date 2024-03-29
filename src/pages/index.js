import { useState } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Head from "next/head";
import UploadWrapper from "../../components/UploadWrapper";
import DownloadImage from "../../components/DownloadImage";
import Navigation from "../../components/global/Navigation";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//TODO: Need OR condition when deploying to prod
const uploader = Uploader({
  apiKey: "free"
});

export default function Home() {
  const [imageName, setImageName] = useState(null);
  const [initialImage, setOriginalImage] = useState(null);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [timeOfRequest, setTimeOfRequest] = useState(undefined);

  const handleSubmit = async (image) => {
    const start = Date.now();
    setTimeOfRequest(undefined);
    setLoading(true);

    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image }),
    });

    let result = await response.json();

    if (response.status !== 201) {
      setError(result.detail);
      setLoading(false);
      return;
    }

    setResult(result);

    while (result.status !== "succeeded" && result.status !== "failed") {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + result.id);
      result = await response.json();

      if (response.status !== 200) {
        setError(result.detail);
        setLoading(false);
        return;
      }

      setResult(result);
    }

    if (result.status === "failed") {
      setError(true);
    }

    if (result.status === "succeeded" || result.status === "failed") {
      setLoading(false);
    }

    const end = Date.now();
    setTimeOfRequest((end - start) / 1000);
  };

  let content = (
    <>
      <div className="flex-grow">
        <UploadWrapper
          uploadButtonElement={(btnText) => {
            return (
              <UploadButton
                uploader={uploader}
                onComplete={(file) => {
                  if (file.length !== 0) {
                    setImageName(file[0].originalFile.originalFileName);
                    setOriginalImage(
                      file[0].fileUrl.replace("raw", "thumbnail")
                    );
                    handleSubmit(file[0].fileUrl.replace("raw", "thumbnail"));
                  }
                }}
                options={{
                  styles: { colors: { primary: "#319795" } },
                  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
                }}
              >
                {({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="btnDefault"
                  >
                    {btnText ? btnText : "Upload"}
                  </button>
                )}
              </UploadButton>
            );
          }}
          initialImage={initialImage}
          modifiedImage={result?.output ? result.output : null}
        />
      </div>
    </>
  );

  if (error) {
    content = (
      // TODO: Add design for error screen
      <p>Error Screen</p>
    );
  }

  if (loading || (initialImage && result?.output)) {
    content = (
      <>
        <DownloadImage
          initialImage={initialImage}
          modifiedImage={result?.output}
          imageName={imageName}
          loading={loading}
          timeOfRequest={timeOfRequest}
          uploadButtonElement={() => {
            return (
              <UploadButton
                uploader={uploader}
                onComplete={(file) => {
                  if (file.length !== 0) {
                    setImageName(file[0].originalFile.originalFileName);
                    setOriginalImage(
                      file[0].fileUrl.replace("raw", "thumbnail")
                    );
                    handleSubmit(file[0].fileUrl.replace("raw", "thumbnail"));
                  }
                }}
                options={{
                  styles: { colors: { primary: "#319795" } },
                  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
                }}
              >
                {({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="pt-5 underline"
                  >
                    Try another image
                  </button>
                )}
              </UploadButton>
            );
          }}
        />
      </>
    );
  }


  return (
    <>
      <Head>
        <title>Background Image Remover</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen overflow-hidden">
        <Navigation />
        {content}
      </main>
    </>
  );
}