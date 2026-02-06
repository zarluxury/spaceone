import localFont from "next/font/local";

export const gramatika = localFont({
  src: [
    {
      path: "../../public/font/GramatikaTrial-ExtraLight-BF65dea4c5b0dc5.otf",
      weight: "10",
      style: "normal",
    },
  ],
  variable: "--font-gramatika",
  display: "swap",
});
