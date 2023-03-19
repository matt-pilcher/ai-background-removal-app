## Live Demo

App deployed here:  [https://curious-hedgehog.netlify.app/](https://curious-hedgehog.netlify.app/)


## Introduction

It's common as a web developer to receive digital assets with solid color backgrounds. The background of an image asset often needs to be made transparent so that it doesn't clash with the existing design of a page. Normally you have to use a tool like Photoshop to manually remove the background.

This app will allow you to upload an image for the purpose of removing the background/making it transparent. 

I'm using a machine learning model through an API provided by Replicate that detects the background area of image. A good result isn't guaranteed. It seems to work best when there is a clear delineation between the background color and the main object. 

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
