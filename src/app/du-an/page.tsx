import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Dự án Bất động sản - ERA Vietnam",
  description:
    "Khám phá rổ hàng 150+ dự án BĐS đa dạng phân khúc từ các CĐT uy tín. Danh mục Tâm điểm giao dịch và Đầu tư tối ưu được xác thực bởi chuyên gia ERA Vietnam.",
  keywords: [
    "dự án bất động sản",
    "căn hộ ERA",
    "nhà phố",
    "biệt thự",
    "đất nền",
    "ERA Vietnam",
  ],
  openGraph: {
    title: "Dự án Bất động sản - ERA Vietnam",
    description:
      "Khám phá rổ hàng 150+ dự án BĐS đa dạng phân khúc từ các CĐT uy tín. Danh mục Tâm điểm giao dịch và Đầu tư tối ưu được xác thực bởi chuyên gia ERA Vietnam.",
    type: "website",
    images: [
      {
        url: "/project/project_hero_banner.webp",
        alt: "ERA Vietnam",
      },
    ],
  },
};

export default function DuAnPage() {
  return <ProjectsPage />;
}
