import type { Metadata } from "next";
import { Suspense } from "react";
import Uploader from "./uploader";

export const metadata: Metadata = {
  title: "Send job photos · Sunshine Demolition",
  robots: { index: false, follow: false },
};

export default function PhotosPage() {
  return (
    <Suspense>
      <Uploader />
    </Suspense>
  );
}
