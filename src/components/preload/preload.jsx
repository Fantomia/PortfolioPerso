import { useEffect } from "react";

const PreloadImage = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = `${import.meta.env.BASE_URL}assets/krunsplash.jpg`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null; // Ce composant ne rend rien, il ajoute juste la balise <link>
};

export default PreloadImage;