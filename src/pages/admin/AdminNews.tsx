import { useState } from "react";
import { FileText, Plus, Edit, Trash2, Eye, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockArticles = [
  { id: 1, title: "Leaders Forum 2026 Date Announced", category: "Announcement", status: "Published", date: "Feb 10, 2026", views: 1240 },
  { id: 2, title: "Registration Now Open for All Packages", category: "Update", status: "Published", date: "Feb 5, 2026", views: 890 },
  { id: 3, title: "2025 Impact Report: Key Highlights", category: "Report", status: "Published", date: "Jan 20, 2026", views: 456 },
  { id: 4, title: "New Mentorship Program Launch", category: "Program", status: "Draft", date: "Feb 12, 2026", views: 0 },
  { id: 5, title: "Partnership with CRDB Bank", category: "Partnership", status: "Published", date: "Jan 15, 2026", views: 678 },
  { id: 6, title: "Sector Focus: Mining Industry Trends 2026", category: "Insight", status: "Draft", date: "Feb 14, 2026", views: 0 },
];

const AdminNews = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold">News & Updates</h1>
          <p className="text-sm text-muted-foreground">Manage news articles and announcements</p>
        </div>
        <Button variant="accent" size="sm" onClick={() => setShowForm(true)}><Plus size={16} /> New Article</Button>
      </div>

      {/* Articles list */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Article</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden sm:table-cell">Category</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden md:table-cell">Views</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {mockArticles.map((a) => (
                <tr key={a.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                  <td className="py-3 px-4">
                    <p className="font-medium">{a.title}</p>
                    <p className="text-[10px] text-muted-foreground">{a.date}</p>
                  </td>
                  <td className="py-3 px-4 hidden sm:table-cell">
                    <span className="bg-muted px-2 py-0.5 rounded text-[10px]">{a.category}</span>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell text-muted-foreground">{a.views.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      a.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>{a.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7"><Eye size={14} /></Button>
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

      {/* Create form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-y-auto p-4 pt-10">
          <div className="bg-card rounded-xl border border-border shadow-xl w-full max-w-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold">New Article</h3>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-muted rounded"><X size={18} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Title *</label>
                <input className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Article title" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Category</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
                  <option>Announcement</option><option>Update</option><option>Report</option>
                  <option>Program</option><option>Partnership</option><option>Insight</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Featured Image</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-muted-foreground text-xs">
                  <Upload size={20} className="mx-auto mb-2 opacity-40" />
                  <p>Upload image</p>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Content *</label>
                <textarea rows={6} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm resize-none" placeholder="Article content..." />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Status</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
                  <option>Draft</option><option>Published</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button variant="accent" size="sm" className="flex-1" onClick={() => setShowForm(false)}>Publish</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNews;
