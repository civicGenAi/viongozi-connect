import { useState } from "react";
import { Award, Plus, Edit, Trash2, Eye, X, Trophy, Star, Crown, Medal, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockCategories = [
  { id: 1, title: "Young Entrepreneur of the Year", icon: "Trophy", nominations: 24, status: "Open", deadline: "May 30, 2026" },
  { id: 2, title: "Excellence in Leadership", icon: "Star", nominations: 18, status: "Open", deadline: "May 30, 2026" },
  { id: 3, title: "Sector Champion Award", icon: "Crown", nominations: 31, status: "Open", deadline: "May 30, 2026" },
  { id: 4, title: "Social Impact Award", icon: "Medal", nominations: 15, status: "Open", deadline: "May 30, 2026" },
  { id: 5, title: "Innovation & Technology Award", icon: "Target", nominations: 22, status: "Closed", deadline: "Jan 15, 2026" },
  { id: 6, title: "Lifetime Achievement Award", icon: "Award", nominations: 8, status: "Open", deadline: "May 30, 2026" },
];

const mockNominations = [
  { id: 1, nominee: "Grace Mushi", category: "Young Entrepreneur of the Year", nominatedBy: "David R.", date: "Feb 14, 2026", status: "Under Review" },
  { id: 2, nominee: "James Shikuku", category: "Excellence in Leadership", nominatedBy: "Lucy L.", date: "Feb 12, 2026", status: "Shortlisted" },
  { id: 3, nominee: "Martha Kimaro", category: "Sector Champion Award", nominatedBy: "Peter M.", date: "Feb 10, 2026", status: "Under Review" },
  { id: 4, nominee: "Amina Hassan", category: "Social Impact Award", nominatedBy: "Sarah N.", date: "Feb 8, 2026", status: "Approved" },
  { id: 5, nominee: "John Makamba", category: "Innovation & Technology Award", nominatedBy: "Mike O.", date: "Feb 5, 2026", status: "Rejected" },
];

const AdminRewards = () => {
  const [tab, setTab] = useState<"categories" | "nominations">("categories");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold">Rewards & Awards</h1>
          <p className="text-sm text-muted-foreground">Manage award categories and nominations</p>
        </div>
        <Button variant="accent" size="sm" onClick={() => setShowForm(true)}><Plus size={16} /> Add Category</Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted rounded-lg p-1 w-fit">
        {(["categories", "nominations"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-md text-xs font-semibold capitalize transition-all ${
              tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
            }`}>{t}</button>
        ))}
      </div>

      {tab === "categories" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockCategories.map((cat) => (
            <div key={cat.id} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Award size={20} className="text-gold" />
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  cat.status === "Open" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                }`}>{cat.status}</span>
              </div>
              <h3 className="font-heading font-bold text-sm mb-1">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">Deadline: {cat.deadline}</p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">{cat.nominations} nominations</span>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7"><Edit size={14} /></Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 size={14} /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nominee</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden sm:table-cell">Nominated By</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden md:table-cell">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {mockNominations.map((n) => (
                  <tr key={n.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                    <td className="py-3 px-4 font-medium">{n.nominee}</td>
                    <td className="py-3 px-4 text-muted-foreground">{n.category}</td>
                    <td className="py-3 px-4 hidden sm:table-cell text-muted-foreground">{n.nominatedBy}</td>
                    <td className="py-3 px-4 hidden md:table-cell text-muted-foreground">{n.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        n.status === "Approved" ? "bg-green-100 text-green-700" :
                        n.status === "Shortlisted" ? "bg-blue-100 text-blue-700" :
                        n.status === "Rejected" ? "bg-red-100 text-red-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>{n.status}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7"><Eye size={14} /></Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7"><Edit size={14} /></Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add category form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-xl border border-border shadow-xl w-full max-w-md p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold">New Award Category</h3>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-muted rounded"><X size={18} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Category Title *</label>
                <input className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="e.g. Innovation Award" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Description</label>
                <textarea rows={3} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm resize-none" placeholder="Award description..." />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Nomination Deadline</label>
                <input type="date" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Status</label>
                <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
                  <option>Open</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button variant="accent" size="sm" className="flex-1" onClick={() => setShowForm(false)}>Create</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRewards;
