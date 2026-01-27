import { Photo } from './types';

// Updated Hero Portrait
export const PORTRAIT_IMG = "/assets/img/hero-portrait.png";

// New Glizzy Logo
export const GLIZZY_LOGO = "/assets/img/glizzy-logo.png";

// Binx Productions Logo
export const BINX_LOGO = "/assets/img/binx-logo.png";

export const GALLERY_PHOTOS: Photo[] = [
  {
    id: 1,
    src: "/assets/img/gallery-1.png",
    title: "The Formal Smile",
    rotation: "rotate-3"
  },
  {
    id: 2,
    src: "/assets/img/gallery-2.png",
    title: "Street Style // Neon",
    rotation: "-rotate-6",
    customClass: "md:mt-24"
  },
  {
    id: 3,
    src: "/assets/img/gallery-3.png",
    title: "Suit & Tie",
    rotation: "rotate-6"
  },
  {
    id: 4,
    src: "/assets/img/gallery-4.png",
    title: "Behind the Lens",
    rotation: "-rotate-2",
    customClass: "md:col-start-2"
  },
  {
    id: 5,
    src: "/assets/img/gallery-5.png",
    title: "Night Out",
    rotation: "rotate-2",
  }
];