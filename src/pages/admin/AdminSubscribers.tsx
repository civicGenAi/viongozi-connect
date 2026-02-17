import { useState } from "react";
import { Users, Search, Download, Mail, Trash2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockSubscribers = [
  { id: 1, email: "james.mwanga@gmail.com", name: "James Mwanga", date: "Feb 15, 2026", source: "Homepage", status: "Active" },
  { id: 2, email: "grace.kimaro@yahoo.com", name: "Grace Kimaro", date: "Feb 14, 2026", source: "Footer", status: "Active" },
  { id: 3, email: "david.r@outlook.com", name: "David Ramadhani", date: "Feb 13, 2026", source: "Events Page", status: "Active" },
  { id: 4, email: "amina.hassan@gmail.com", name: "Amina Hassan", date: "Feb 12, 2026", source: "Homepage", status: "Unsubscribed" },
  { id: 5, email: "peter.mushi@gmail.com", name: "Peter Mushi", date: "Feb 10, 2026", source: "Footer", status: "Active" },
  { id: 6, email: "lucy.lyimo@mail.com", name: "Lucy Lyimo", date: "Feb 8, 2026", source: "Register Page", status: "Active" },
  { id: 7, email: "john.makamba@company.co.tz", name: "John Makamba", date: "Feb 5, 2026", source: "Homepage", status: "Active" },
  { id: 8, email: "martha.urio@gmail.com", name: "Martha Urio", date: "Feb 3, 2026", source: "Footer", status: "Active" },
  { id: 9, email: "sarah.njau@gmail.com", name: "Sarah Njau", date: "Jan 28, 2026", source: "Events Page", status: "Active" },
  { id: 10, email: "mike.oloo@gmail.com", name: "Mike Oloo", date: "Jan 25, 2026", source: "Homepage", status: "Bounced" },
];

const AdminSubscribers = () => {
  const [search, setSearch] = useState("");
  const filtered = mockSubscribers.filter((s) =>
    s.email.toLowerCase().includes(search.toLowerCase()) || s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold">Subscribers</h1>
          <p className="text-sm text-muted-foreground">Manage newsletter subscribers</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Download size={14} /> Export</Button>
          <Button variant="accent" size="sm"><Mail size={14} /> Send Newsletter</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Total Subscribers</p>
          <p className="text-xl font-heading font-black">1,284</p>
          <span className="text-[10px] text-green-600 font-semibold flex items-center gap-0.5"><ArrowUpRight size={10} /> +42 this month</span>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Active</p>
          <p className="text-xl font-heading font-black">1,198</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Unsubscribed</p>
          <p className="text-xl font-heading font-black">86</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
        <Search size={16} className="text-muted-foreground" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subscribers..."
          className="bg-transparent text-sm outline-none w-full" />
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Subscriber</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden sm:table-cell">Source</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden md:table-cell">Date</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                  <td className="py-3 px-4">
                    <p className="font-medium">{s.name}</p>
                    <p className="text-[10px] text-muted-foreground">{s.email}</p>
                  </td>
                  <td className="py-3 px-4 hidden sm:table-cell text-muted-foreground">{s.source}</td>
                  <td className="py-3 px-4 hidden md:table-cell text-muted-foreground">{s.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      s.status === "Active" ? "bg-green-100 text-green-700" :
                      s.status === "Unsubscribed" ? "bg-muted text-muted-foreground" :
                      "bg-red-100 text-red-700"
                    }`}>{s.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 size={14} /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSubscribers;
