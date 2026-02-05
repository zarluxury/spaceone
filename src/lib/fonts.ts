import localFont from "next/font/local";

export const gramatika = localFont({
  src: [
    {
      path: "../../public/font/GramatikaTrial-Light-BF65dea4c59cf23.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-gramatika",
  display: "swap",
});
