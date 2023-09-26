"use client";

import { CldImage } from "next-cloudinary";

export function CloudinaryImages(props: any) {
  return <CldImage {...props} />;
}
