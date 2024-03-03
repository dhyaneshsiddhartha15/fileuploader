 FileUploader

FileUploader is a Node.js application that allows users to upload files, including images and videos. It provides functionality for uploading files locally and to cloud storage (specifically, Cloudinary). Users receive email notifications upon successful file uploads.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FileUploader.git
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory
Add the following variables to your .env file:
makefile
Copy code
PORT=3000
DATABASE_URL=mongodb://localhost:27017/fileuploader
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_SERVICE=your_email_service
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
Start the server:

bash
Copy code
npm start
The server should now be running on http://localhost:3000

Usage
Local File Upload
To upload a file locally, send a POST request to /api/localFileUpload with a form-data payload containing a file field:

bash
Copy code
curl -X POST http://localhost:3000/api/localFileUpload -F file=@path/to/your/file
Image Upload
To upload an image, send a POST request to /api/imageUpload with a form-data payload containing name, tags, email, and an imageFile field:

bash
Copy code
curl -X POST http://localhost:3000/api/imageUpload -F name="Image Name" -F tags="tag1,tag2" -F email="user@example.com" -F imageFile=@path/to/your/image
Video Upload
To upload a video, send a POST request to /api/videoUpload with a form-data payload containing name, tags, email, and a videoFile field:

bash
Copy code
curl -X POST http://localhost:3000/api/videoUpload -F name="Video Name" -F tags="tag1,tag2" -F email="user@example.com" -F videoFile=@path/to/your/video
Image Size Reducer
To upload an image with reduced size, send a POST request to /api/imageSizeReducer with a form-data payload containing name, tags, email, and an imageFile field. The image will be resized to 30% of its original size:

bash
Copy code
curl -X POST http://localhost:3000/api/imageSizeReducer -F name="Image Name" -F tags="tag1,tag2" -F email="user@example.com" -F imageFile=@path/to/your/image
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
