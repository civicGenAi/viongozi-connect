import { useState } from "react";
import { Globe, Plus, Edit, Trash2, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockSectors = [
  { id: 1, name: "Beauty & Cosmetics", description: "Tanzania's beauty and cosmetics sector including skincare, haircare, and personal grooming.", status: "Active", businesses: 45 },
  { id: 2, name: "Manufacturing", description: "Industrial manufacturing including textiles, food processing, and light manufacturing.", status: "Active", businesses: 32 },
  { id: 3, name: "Mining", description: "Mining and mineral extraction including gold, tanzanite, and gemstones.", status: "Active", businesses: 28 },
  { id: 4, name: "Agriculture", description: "Agricultural sector including farming, agribusiness, and food production.", status: "Active", businesses: 56 },
  { id: 5, name: "Transport & Logistics", description: "Transportation and logistics including freight, public transit, and delivery services.", status: "Active", businesses: 38 },
  { id: 6, name: "Influencers", description: "Digital influencers, content creators, and social media marketing.", status: "Active", businesses: 67 },
  { id: 7, name: "Music Industry", description: "Music production, distribution, performance, and entertainment.", status: "Active", businesses: 41 },
];

const AdminSectors = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold">Sectors</h1>
          <p className="text-sm text-muted-foreground">Manage industry sectors and categories</p>
        </div>
        <Button variant="accent" size="sm" onClick={() => setShowForm(true)}><Plus size={16} /> Add Sector</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSectors.map((s) => (
          <div key={s.id} className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe size={20} className="text-primary" />
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-100 text-green-700">{s.status}</span>
            </div>
            <h3 className="font-heading font-bold text-sm mb-1">{s.name}</h3>
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{s.description}</p>
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">{s.businesses} businesses</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7"><Edit size={14} /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 size={14} /></Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-xl border border-border shadow-xl w-full max-w-md p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold">Add Sector</h3>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-muted rounded"><X size={18} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1">Sector Name *</label>
                <input className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="e.g. Technology" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Description</label>
                <textarea rows={3} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm resize-none" placeholder="Sector description..." />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Sector Image</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-muted-foreground text-xs">
                  <Upload size={20} className="mx-auto mb-2 opacity-40" />
                  <p>Upload image (800×600 recommended)</p>
                </div>
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

export default AdminSectors;
