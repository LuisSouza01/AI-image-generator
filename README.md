<p align="center">
  <img src="https://user-images.githubusercontent.com/68693408/216701675-ea05ff07-2c89-4a9b-b296-182012d70db8.svg" width="260" />
</p>

<h1 align="center">AI Image Generator</h1>

This project is an AI-powered image generator that creates unique and diverse images based on textual descriptions. Inspired by Dall-E, our project aims to bring the power of AI-generated images to a wider audience.

Generates high-quality images based on textual descriptions
Easy-to-use web interface for submitting descriptions and viewing generated images
Fast and reliable image generation process
Supports a wide range of image styles and themes

## 🚀 Technologies
The project is built using the MERN (MongoDB, Express.js, React, and Node.js) stack.

- MongoDB
- Node.js
- Express.js
- React
- react-router-dom
- Tailwind
- Vite
- Typescript
- Cloudinary
- OpenAI

## 📦 Installation
#### Clone the repository: 
```
git clone https://github.com/LuisSouza01/AI-image-generator.git
```
#### Navigate to the client folder and install dependencies:
```
cd client && yarn
```
#### Navigate to the server folder and install dependencies:
```
cd ../server && yarn
```

#### Edit the .env file in the server folder and add the following environment variables:

```
OPENAI_API_KEY=<your-openai-api-key>
MONGODB_URL=<your-mongodb-url>

CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
```


#### OpenAI API
OpenAI is a cutting-edge artificial intelligence research lab. The OpenAI API allows us to use its state-of-the-art AI models to generate images. To use the OpenAI API, you will need to sign up for an API key.

#### Cloudinary API
Cloudinary is a cloud-based platform for managing and delivering images. The Cloudinary API is used to store and serve the generated images. To use the Cloudinary API, you will need to sign up for an account and create an API key.

## ⚡ Quick start

#### Starting the Development Server
Project AI Image Generator consists of two separate parts: the frontend client and the backend server. To start the development server, you need to start both the client and server.

#### Frontend (Client)
The frontend client is built with React and is located in the client folder. To start the frontend client, navigate to the client folder and run the following command:

```
yarn dev
```

#### Backend (Server)
The backend server is built with Node.js and Express.js and is located in the server folder. To start the backend server, navigate to the server folder and run the following command:

```
yarn start
```

Once both the client and server are running, you can use the AI Image Generator web interface to generate images based on textual descriptions.

## 📝 Usage
Visit http://127.0.0.1:5173/ in your browser. <br/>
Submit a textual description and view the generated image.
