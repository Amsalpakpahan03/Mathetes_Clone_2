import React from "react";

/**
 *
 * @param {object} props - Properti komponen.
 * @param {string} props.slug - Nama dasar file gambar (tanpa ekstensi). Contoh: "hero-background-1".
 * @param {string} props.alt - Teks alternatif untuk gambar (penting untuk SEO & aksesibilitas).
 * @param {string} [props.className] - Class CSS tambahan dari Tailwind atau CSS biasa.
 * @returns {JSX.Element} Elemen gambar yang dioptimalkan.
 */
const OptimizedImage = ({ slug, alt, className }) => {
  // path penyimpanan imgnya ya mas
  const imageBase = `/images/${slug}`;

  return (
    <picture>
      {/* BROWSER MODERN:  memuat format WebP terlebih dahulu.
       */}
      <source
        type="image/webp"
        srcSet={`${imageBase}-small.webp 480w, 
                 ${imageBase}-medium.webp 800w, 
                 ${imageBase}-large.webp 1200w`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* BROWSER LAMA (FALLBACK): Jika <picture> atau WebP tidak didukung.
       */}
      <img
        // fallback  untuk browser yang sangat tua yang gak mendukung `srcset`.
        src={`${imageBase}-medium.jpg`}
        srcSet={`${imageBase}-small.jpg 480w, 
                 ${imageBase}-medium.jpg 800w, 
                 ${imageBase}-large.jpg 1200w`}
        alt={alt}
        className={className}
        loading="lazy" //  Mencegah gambar di luar layar dimuat hingga pengguna scroll ke sana.
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
