// src/data/AboutData.js

// PERBAIKAN: Persingkat slug menjadi nama dasarnya saja.
const testImageSlug = "about-section-image";

// Data untuk section "Students Success is Our Focus"
export const successFocusData = {
  title: "Students Success is Our Focus",
  description:
    "Committed to your success, our consulting firm delivers tailored strategies and expert guidance, ensuring business excellence through precise solutions and strategic expertise for sustainable growth.",
  buttonText: "Collaborate with Us",
  mainImage: {
    slug: testImageSlug,
    alt: "Students of Mathetes Christian School",
    caption: "Mathetes Christian School",
  },
  galleryImages: [
    { slug: testImageSlug, alt: "Gallery Image 1" },
    { slug: testImageSlug, alt: "Gallery Image 2" },
    { slug: testImageSlug, alt: "Gallery Image 3" },
    { slug: testImageSlug, alt: "Gallery Image 4" },
    { slug: testImageSlug, alt: "Gallery Image 5" },
  ],
};

// Data untuk section "Vision we have"
export const visionData = {
  title: "Vision we have",
  description:
    "Mathetes Christian School aims to build Spirit-led empowered disciples through whole-person education to impact the nations.",
  image: {
    slug: testImageSlug,
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
