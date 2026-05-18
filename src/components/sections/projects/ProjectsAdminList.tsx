"use client";

import Image from "next/image";
import { colors } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { Pencil, Trash2, Plus } from "lucide-react";
import { ProjectFormData, ProjectTag } from "./ProjectsAdminForm";

const TAG_LABELS: Record<ProjectTag, { label: string; color: string }> = {
  new: { label: "Dự án mới", color: colors.secondary.DEFAULT },
  booking: { label: "Nhận booking", color: colors.primary.DEFAULT },
  selling: { label: "Đang mở bán", color: colors.tertiary.purple.DEFAULT },
};

interface Props {
  projects: ProjectFormData[];
  onEdit: (project: ProjectFormData) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

export function ProjectsAdminList({ projects, onEdit, onDelete, onAdd }: Props) {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2
            className="text-xl font-black"
            style={{ color: colors.primary.navy.DEFAULT }}
          >
            Danh sách dự án
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Tổng cộng {projects.length} dự án
          </p>
        </div>
        <Button variant="primary" size="sm" className="gap-2" onClick={onAdd}>
          <Plus size={16} /> Tạo dự án mới
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left font-semibold text-gray-600 px-5 py-3.5 w-16">
                  ID
                </th>
                <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                  Dự án
                </th>
                <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                  Trạng thái
                </th>
                <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                  Địa điểm
                </th>
                <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                  Chủ đầu tư
                </th>
                <th className="text-right font-semibold text-gray-600 px-5 py-3.5 w-28">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {projects.map((project) => {
                const tag = TAG_LABELS[project.tag];
                return (
                  <tr key={project.id} className="hover:bg-gray-50/40 transition-colors">
                    <td className="px-5 py-4 text-gray-500 font-mono">
                      #{project.id}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                              N/A
                            </div>
                          )}
                        </div>
                        <span className="font-semibold text-gray-900">
                          {project.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md text-white"
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-600 max-w-[200px] truncate">
                      {project.location}
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      {project.investor || "—"}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onEdit(project)}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          title="Chỉnh sửa"
                        >
                          <Pencil size={15} className="text-gray-500" />
                        </button>
                        <button
                          onClick={() => project.id && onDelete(project.id)}
                          className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                          title="Xoá"
                        >
                          <Trash2 size={15} className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {projects.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-gray-400"
                  >
                    Chưa có dự án nào. Hãy bấm "Tạo dự án mới" để thêm.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
