import type { Metadata } from "next";
import { NewsPage } from "@/components/sections/news";

export const metadata: Metadata = {
  title: "Tin tức ERA Vietnam - Cập nhật thị trường BĐS và hoạt động nội bộ",
  description:
    "Cập nhật tin tức thị trường, thông tin dự án BĐS mới nhất và các hoạt động nội bộ từ ERA Vietnam. Tải miễn phí tài liệu E-book và báo cáo chuyên sâu.",
  openGraph: {
    title: "Tin tức ERA Vietnam - Cập nhật thị trường BĐS và hoạt động nội bộ",
    description:
      "Cập nhật tin tức thị trường, thông tin dự án BĐS mới nhất và các hoạt động nội bộ từ ERA Vietnam. Tải miễn phí tài liệu E-book và báo cáo chuyên sâu.",
    type: "website",
    images: [
      {
        url: "/news/news_banner.webp",
        alt: "ERA Vietnam",
      },
    ],
  },
};

export default function News() {
  return <NewsPage />;
}
