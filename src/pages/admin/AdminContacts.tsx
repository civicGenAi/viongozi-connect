import { useState } from "react";
import { Mail, Search, Trash2, Eye, Star, Reply, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockMessages = [
  { id: 1, name: "Sarah Njau", email: "sarah@gmail.com", subject: "Sponsorship Inquiry", message: "Hello, I represent XYZ Corp and we're interested in sponsoring the Leaders Forum 2026. Could you share the sponsorship packages and benefits?", date: "Feb 15, 2026", read: false, starred: false },
  { id: 2, name: "Mike Oloo", email: "mike@company.co.tz", subject: "Bulk registration discount", message: "We want to register 15 team members for the forum. Do you offer group discounts? Looking for Elite or Professional packages.", date: "Feb 14, 2026", read: false, starred: true },
  { id: 3, name: "Lucy Mbeki", email: "lucy@university.ac.tz", subject: "Speaker submission", message: "I'm a professor at UDSM and would like to submit a proposal to speak at the Entrepreneurship Summit 2026 on the topic of fintech innovation in East Africa.", date: "Feb 13, 2026", read: true, starred: false },
  { id: 4, name: "John Makamba", email: "john@startup.tz", subject: "Invoice request", message: "Hi team, I completed my registration and payment yesterday (PAY-004). Could you send me a tax invoice for our company records? Company: Makamba Ventures Ltd.", date: "Feb 12, 2026", read: true, starred: false },
  { id: 5, name: "Grace Mushi", email: "grace@techhub.tz", subject: "Partnership proposal", message: "TechHub Tanzania would like to explore a partnership for the Leaders Forum. We can provide venue support, tech infrastructure, and media coverage.", date: "Feb 10, 2026", read: true, starred: true },
  { id: 6, name: "David Ramadhani", email: "david@bank.co.tz", subject: "VIP arrangements", message: "I've registered for the Elite package. I'd like to confirm the VIP parking arrangements and whether there's a private lounge area.", date: "Feb 8, 2026", read: true, starred: false },
];

const AdminContacts = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof mockMessages[0] | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "starred">("all");

  const filtered = mockMessages.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.subject.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || (filter === "unread" && !m.read) || (filter === "starred" && m.starred);
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold">Contact Messages</h1>
        <p className="text-sm text-muted-foreground">Manage inquiries from the contact form</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Total Messages</p>
          <p className="text-xl font-heading font-black">{mockMessages.length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Unread</p>
          <p className="text-xl font-heading font-black text-primary">{mockMessages.filter((m) => !m.read).length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-[11px] text-muted-foreground">Starred</p>
          <p className="text-xl font-heading font-black text-gold">{mockMessages.filter((m) => m.starred).length}</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 flex-1">
          <Search size={16} className="text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search messages..."
            className="bg-transparent text-sm outline-none w-full" />
        </div>
        <div className="flex gap-1">
          {(["all", "unread", "starred"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>{f}</button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-2">
        {filtered.map((m) => (
          <div
            key={m.id}
            onClick={() => setSelected(m)}
            className={`bg-card border border-border rounded-xl p-4 cursor-pointer hover:shadow-sm transition-all ${
              !m.read ? "border-l-4 border-l-primary" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className={`text-sm truncate ${!m.read ? "font-bold" : "font-medium"}`}>{m.name}</p>
                  {m.starred && <Star size={12} className="text-gold fill-gold flex-shrink-0" />}
                </div>
                <p className={`text-xs truncate ${!m.read ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{m.subject}</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{m.message}</p>
              </div>
              <span className="text-[10px] text-muted-foreground flex-shrink-0">{m.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-xl border border-border shadow-xl w-full max-w-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-lg">{selected.subject}</h3>
              <button onClick={() => setSelected(null)} className="p-1 hover:bg-muted rounded"><X size={18} /></button>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                {selected.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-medium">{selected.name}</p>
                <p className="text-xs text-muted-foreground">{selected.email} · {selected.date}</p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-sm leading-relaxed">{selected.message}</div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1"><Reply size={14} /> Reply</Button>
              <Button variant="ghost" size="sm"><Star size={14} /> Star</Button>
              <Button variant="ghost" size="sm" className="text-destructive"><Trash2 size={14} /></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
