// src/data/AboutData.js

// PERBAIKAN: Persingkat slug menjadi nama dasarnya saja.
const testImageSlug = "about-section-image";
const SchoolImageSlug = "Staf-all";
const VisionImageSlug = "Mathetes-student";
const GalleryImageSlug = "Graduation";
const GalleryImageSlug2 = "Mathetes-student";
const GalleryImageSlug3 = "Graduation-all";
const GalleryImageSlug4 = "Teacher";
const SchoolImageSlug5 = "About-us-hero";

// Data untuk section "Students Success is Our Focus"
export const successFocusData = {
  title: "Building Spirit-Led Disciples for Global Impact",
  description:
    "Welcome to Mathetes Christian School. We are more than an academic institution; we are a community committed to whole-person education. We integrate Biblical truth with academic excellence to nurture Spirit-led, empowered leaders ready to impact the nations with wisdom, character, and hope.",
  buttonText: "Join Us",
  href: "/contact",
  mainImage: {
    slug: SchoolImageSlug5,
    alt: "Students of Mathetes Christian School",
    caption: "Mathetes Christian School",
  },
  galleryImages: [
    { slug: GalleryImageSlug4, alt: "Gallery Image 1" },
    { slug: GalleryImageSlug, alt: "Gallery Image 2" },
    { slug: GalleryImageSlug2, alt: "Gallery Image 3" },
    { slug: GalleryImageSlug3, alt: "Gallery Image 4" },
    { slug: SchoolImageSlug, alt: "Gallery Image 5" },
  ],
};

export const visionData = {
  title: "Vision we have",
  description:
    "Mathetes Christian School aims to build Spirit-led empowered disciples through whole-person education to impact the nations.",
  image: {
    slug: VisionImageSlug,
    alt: "Classroom activity at Mathetes Christian School",
  },
};

export const missionData = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Work to push creativity, driving continual improvement and growth.",
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "Work to push creativity, driving continual improvement and growth.",
  },
  {
    id: 3,
    title: "Innovation",
    description:
      "Work to push creativity, driving continual improvement and growth.",
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "Work to push creativity, driving continual improvement and growth.",
  },
];
