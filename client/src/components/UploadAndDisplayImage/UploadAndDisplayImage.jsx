import React, { useState } from "react";

export default function UploadAndDisplayImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <h1>Upload Your Profile Image!</h1>
      {selectedImage && (
        <div className="flex flex-col items-center">
          <img
            className="rounded"
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button
            className="rounded-full bg-emerald-600 m-4 p-5 hover:bg-emerald-700"
            onClick={() => setSelectedImage(null)}
          >
            Remove
          </button>
        </div>
      )}
      <br />
      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          const imageType = event.target.files[0].type;

          if (
            imageType === "image/png" ||
            imageType === "image/jpeg" ||
            imageType === "image/gif"
          ) {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }
        }}
      />
    </>
  );
}
