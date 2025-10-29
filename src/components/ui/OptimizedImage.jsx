import React from "react";

/**
 *
 * @param {object} props
 * @param {string} props.slug
 * @param {string} props.alt
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
const OptimizedImage = ({ slug, alt, className }) => {
  // path penyimpanan imgnya ya mas
  const imageBase = `/images/${slug}`;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${imageBase}-small.webp 480w, 
                 ${imageBase}-medium.webp 800w, 
                 ${imageBase}-large.webp 1200w`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <img
        src={`${imageBase}-medium.jpg`}
        srcSet={`${imageBase}-small.jpg 480w, 
                 ${imageBase}-medium.jpg 800w, 
                 ${imageBase}-large.jpg 1200w`}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
