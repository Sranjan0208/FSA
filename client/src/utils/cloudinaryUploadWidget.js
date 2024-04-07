import { openUploadWidget } from "@cloudinary/react";

export const openUploadWidgetImage = async () => {
  try {
    const cloudinaryWidget = await openUploadWidget({
      cloudName: "deiyuhmow",
      uploadPreset: "ml_default",
    });
    return cloudinaryWidget;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
