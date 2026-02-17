import { useState } from "react";
import { Download, Plus, Edit, Trash2, FileText, BarChart3, Image, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockFiles = [
  { id: 1, title: "Leaders Forum 2026 Brochure", type: "PDF", pages: 6, size: "2.4 MB", downloads: 342, status: "Published", date: "Jan 15, 2026" },
  { id: 2, title: "2025 Impact Report", type: "PDF", pages: 24, size: "5.1 MB", downloads: 189, status: "Published", date: "Dec 20, 2025" },
  { id: 3, title: "Mentorship Program Guide", type: "PDF", pages: 12, size: "1.8 MB", downloads: 156, status: "Published", date: "Nov 10, 2025" },
  { id: 4, title: "Brand & Media Kit", type: "ZIP", pages: null, size: "15 MB", downloads: 78, status: "Published", date: "Oct 5, 2025" },
  { id: 5, title: "Award Nomination Guidelines", type: "PDF", pages: 8, size: "1.2 MB", downloads: 95, status: "Draft", date: "Feb 1, 2026" },
  { id: 6, title: "Sector Analysis Report 2025", type: "PDF", pages: 32, size: "7.3 MB", downloads: 234, status: "Published", date: "Sep 15, 2025" },
  { id: 7, title: "Partnership Prospectus", type: "PDF", pages: 10, size: "3.5 MB", downloads: 112, status: "Published", date: "Aug 1, 2025" },
  { id: 8, title: "Forum Agenda Template", type: "PDF", pages: 4, size: "0.8 MB", downloads: 67, status: "Draft", date: "Feb 10, 2026" },
];

const AdminDownloads = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold">Downloads</h1>
          <p className="text-sm text-muted-foreground">Manage downloadable materials and resources</p>
        </div>
        <Button variant="accent" size="sm" onClick={() => setShowForm(true)}><Plus size={16} /> Upload Material</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Total Files</p>
          <p className="text-xl font-heading font-black">{mockFiles.length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Total Downloads</p>
          <p className="text-xl font-heading font-black">{mockFiles.reduce((a, f) => a + f.downloads, 0).toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Published</p>
          <p className="text-xl font-heading font-black">{mockFiles.filter((f) => f.status === "Published").length}</p>
        </div>
      </div>

      {/* Files list */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">File</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden sm:table-cell">Type</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Size</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Downloads</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {mockFiles.map((f) => (
                <tr key={f.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{f.title}</p>
                        <p className="text-[10px] text-muted-foreground">{f.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 hidden sm:table-cell text-muted-foreground">
                    {f.type}{f.pages ? ` • ${f.pages} pages` : ""}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{f.size}</td>
                  <td className="py-3 px-4 font-medium">{f.downloads}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      f.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>{f.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7"><Edit size={14} /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 size={14} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-xl border border-border shadow-xl w-full max-w-md p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold">Upload Material</h3>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-muted rounded"><X size={18} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Title *</label>
                <input className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Document title" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Description</label>
                <textarea rows={2} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm resize-none" placeholder="Short description..." />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">File</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center text-muted-foreground text-xs">
                  <Upload size={24} className="mx-auto mb-2 opacity-40" />
                  <p>Drag & drop or click to upload</p>
                  <p className="text-[10px] mt-1">PDF, ZIP, DOC, XLSX (max 50 MB)</p>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Status</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button variant="accent" size="sm" className="flex-1" onClick={() => setShowForm(false)}>Upload</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDownloads;
