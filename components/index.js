import dynamic from "next/dynamic";

export { default as Layout } from "./Layout";
export { default as NavBar } from "./NavBar";
export { default as ButtonLink } from "./ButtonLink";
export { default as Form } from "./Form";
export { default as ClientReview } from "./ClientReview";
export { default as CarPost } from "./CarPost";
export { default as ChipList } from "./ChipList";

export const Carousel = dynamic(
  () => {
    return import("./Carousel");
  },
  { ssr: false }
);
