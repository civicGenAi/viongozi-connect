import { useState } from "react";
import { Calendar, Plus, Edit, Trash2, Eye, MapPin, Clock, Users, Search, ChevronDown, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockEvents = [
  {
    id: 1, title: "Leaders Forum 2026", theme: "Rise, Lead, Transform", type: "upcoming",
    date: "June 15, 2026", time: "8:00 AM – 8:00 PM", venue: "Julius Nyerere Convention Centre, Dar es Salaam",
    seats: 500, seatsLeft: 127, status: "Published",
    description: "Tanzania's largest gathering of leaders, entrepreneurs, and changemakers.",
    agenda: [
      { time: "8:00 AM", title: "Registration & Breakfast Networking" },
      { time: "9:00 AM", title: "Opening Ceremony & Keynote Address" },
      { time: "10:30 AM", title: "Panel: Scaling Businesses in East Africa" },
      { time: "12:00 PM", title: "Networking Lunch & Exhibition" },
      { time: "1:30 PM", title: "Panel: Youth Leadership & Innovation" },
      { time: "3:00 PM", title: "Sector Breakout Sessions (7 tracks)" },
      { time: "4:30 PM", title: "Tanzania Business Achievement Awards" },
      { time: "6:30 PM", title: "Closing Gala & Entertainment" },
    ],
    speakers: [
      { name: "Dr. Amara Kigeli", role: "CEO, East Africa Business Council" },
      { name: "Hon. James Mwangi", role: "Minister of Trade & Industry" },
      { name: "Grace Mushi", role: "Founder, TechHub Tanzania" },
      { name: "David Ramadhani", role: "MD, CRDB Bank" },
    ],
    packages: [
      { name: "Community", price: "150,000", features: ["General seating", "Main forum access", "Networking lunch", "Digital materials"] },
      { name: "Professional", price: "300,000", features: ["Priority seating", "Group mentorship", "Networking events", "Award ceremony", "Digital materials"] },
      { name: "Elite", price: "500,000", popular: true, features: ["VIP seating", "1-on-1 mentorship", "All networking events", "Award ceremony", "Post-forum consultations", "Media exposure"] },
    ],
  },
  {
    id: 2, title: "Entrepreneurship Summit 2026", theme: "Innovation & Impact", type: "upcoming",
    date: "September 20, 2026", time: "9:00 AM – 5:00 PM", venue: "AICC, Arusha",
    seats: 300, seatsLeft: 215, status: "Draft",
    description: "A high-energy summit for young entrepreneurs.",
    agenda: [
      { time: "9:00 AM", title: "Opening & Keynote" },
      { time: "10:00 AM", title: "Workshop: Business Model Canvas" },
      { time: "11:30 AM", title: "Pitch Competition — Round 1" },
      { time: "1:00 PM", title: "Lunch & Investor Speed Dating" },
    ],
    speakers: [
      { name: "Martha Kimaro", role: "CEO, Vodacom Tanzania" },
      { name: "James Shikuku", role: "Partner, Savannah Fund" },
    ],
    packages: [
      { name: "Standard", price: "100,000", features: ["General seating", "All sessions", "Lunch"] },
      { name: "Startup", price: "200,000", popular: true, features: ["Priority seating", "Pitch competition entry", "Investor speed dating"] },
    ],
  },
  {
    id: 3, title: "Leaders Forum 2025", theme: "Connect, Inspire, Grow", type: "past",
    date: "June 2025", time: "Full day", venue: "JNICC, Dar es Salaam",
    seats: 450, seatsLeft: 0, status: "Completed",
    description: "Our flagship 2025 event.",
    agenda: [], speakers: [], packages: [],
  },
  {
    id: 4, title: "Business Awards Gala 2024", theme: "Celebrating Excellence", type: "past",
    date: "Dec 2024", time: "6:00 PM – 11:00 PM", venue: "Serena Hotel, Dar es Salaam",
    seats: 300, seatsLeft: 0, status: "Completed",
    description: "Annual awards gala.",
    agenda: [], speakers: [], packages: [],
  },
];

const AdminEvents = () => {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [editEvent, setEditEvent] = useState<typeof mockEvents[0] | null>(null);

  const filtered = mockEvents.filter((e) => filter === "all" || e.type === filter);

  // Form state
  const [formData, setFormData] = useState({
    title: "", theme: "", date: "", time: "", venue: "", seats: "",
    description: "", type: "upcoming" as string, status: "Draft",
    agendaItems: [{ time: "", title: "" }],
    speakers: [{ name: "", role: "" }],
    packages: [{ name: "", price: "", features: "", popular: false }],
  });

  const openCreate = () => {
    setEditEvent(null);
    setFormData({
      title: "", theme: "", date: "", time: "", venue: "", seats: "",
      description: "", type: "upcoming", status: "Draft",
      agendaItems: [{ time: "", title: "" }],
      speakers: [{ name: "", role: "" }],
      packages: [{ name: "", price: "", features: "", popular: false }],
    });
    setShowForm(true);
  };

  const openEdit = (event: typeof mockEvents[0]) => {
    setEditEvent(event);
    setFormData({
      title: event.title, theme: event.theme, date: event.date, time: event.time,
      venue: event.venue, seats: String(event.seats), description: event.description,
      type: event.type, status: event.status,
      agendaItems: event.agenda.length > 0 ? event.agenda : [{ time: "", title: "" }],
      speakers: event.speakers.length > 0 ? event.speakers : [{ name: "", role: "" }],
      packages: event.packages.length > 0
        ? event.packages.map((p) => ({ name: p.name, price: p.price, features: p.features.join(", "), popular: p.popular || false }))
        : [{ name: "", price: "", features: "", popular: false }],
    });
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold">Forums & Events</h1>
          <p className="text-sm text-muted-foreground">Manage all forum events, agendas, and packages</p>
        </div>
        <Button variant="accent" size="sm" onClick={openCreate}><Plus size={16} /> Create Event</Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {(["all", "upcoming", "past"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
              filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f} ({mockEvents.filter((e) => f === "all" || e.type === f).length})
          </button>
        ))}
      </div>

      {/* Events list */}
      <div className="space-y-3">
        {filtered.map((event) => (
          <div key={event.id} className="bg-card border border-border rounded-xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading font-bold text-sm sm:text-base truncate">{event.title}</h3>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    event.status === "Published" ? "bg-green-100 text-green-700" :
                    event.status === "Draft" ? "bg-yellow-100 text-yellow-700" :
                    "bg-muted text-muted-foreground"
                  }`}>{event.status}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">"{event.theme}"</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {event.venue}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {event.seatsLeft}/{event.seats}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8"><Eye size={14} /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(event)}><Edit size={14} /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 size={14} /></Button>
              </div>
            </div>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
              <span className="text-[10px] bg-muted px-2 py-1 rounded">{event.agenda.length} agenda items</span>
              <span className="text-[10px] bg-muted px-2 py-1 rounded">{event.speakers.length} speakers</span>
              <span className="text-[10px] bg-muted px-2 py-1 rounded">{event.packages.length} packages</span>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-y-auto p-4 pt-10">
          <div className="bg-card rounded-2xl border border-border shadow-xl w-full max-w-3xl">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="font-heading font-bold text-lg">{editEvent ? "Edit Event" : "Create New Event"}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 hover:bg-muted rounded-lg"><X size={20} /></button>
            </div>
            <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto">
              {/* Basic info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">Event Title *</label>
                  <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Leaders Forum 2026" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Theme *</label>
                  <input value={formData.theme} onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Rise, Lead, Transform" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Date *</label>
                  <input type="text" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="June 15, 2026" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Time *</label>
                  <input value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="8:00 AM – 8:00 PM" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium mb-1">Venue *</label>
                  <input value={formData.venue} onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Julius Nyerere Convention Centre" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Total Seats</label>
                  <input type="number" value={formData.seats} onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="500" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Status</label>
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
                    <option>Draft</option>
                    <option>Published</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium mb-1">Description</label>
                  <textarea rows={3} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm resize-none" placeholder="Event description..." />
                </div>
              </div>

              {/* Agenda */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium font-heading">Agenda Items</label>
                  <button
                    onClick={() => setFormData({ ...formData, agendaItems: [...formData.agendaItems, { time: "", title: "" }] })}
                    className="text-xs text-primary font-semibold"
                  >+ Add Item</button>
                </div>
                <div className="space-y-2">
                  {formData.agendaItems.map((item, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <input value={item.time} onChange={(e) => {
                        const items = [...formData.agendaItems];
                        items[i] = { ...items[i], time: e.target.value };
                        setFormData({ ...formData, agendaItems: items });
                      }} className="w-28 px-3 py-2 rounded-lg border border-border bg-background text-xs" placeholder="9:00 AM" />
                      <input value={item.title} onChange={(e) => {
                        const items = [...formData.agendaItems];
                        items[i] = { ...items[i], title: e.target.value };
                        setFormData({ ...formData, agendaItems: items });
                      }} className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-xs" placeholder="Session title" />
                      {formData.agendaItems.length > 1 && (
                        <button onClick={() => setFormData({ ...formData, agendaItems: formData.agendaItems.filter((_, j) => j !== i) })}
                          className="p-1 text-destructive"><X size={14} /></button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium font-heading">Speakers</label>
                  <button
                    onClick={() => setFormData({ ...formData, speakers: [...formData.speakers, { name: "", role: "" }] })}
                    className="text-xs text-primary font-semibold"
                  >+ Add Speaker</button>
                </div>
                <div className="space-y-2">
                  {formData.speakers.map((s, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <input value={s.name} onChange={(e) => {
                        const speakers = [...formData.speakers];
                        speakers[i] = { ...speakers[i], name: e.target.value };
                        setFormData({ ...formData, speakers });
                      }} className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-xs" placeholder="Speaker name" />
                      <input value={s.role} onChange={(e) => {
                        const speakers = [...formData.speakers];
                        speakers[i] = { ...speakers[i], role: e.target.value };
                        setFormData({ ...formData, speakers });
                      }} className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-xs" placeholder="Role / Title" />
                      {formData.speakers.length > 1 && (
                        <button onClick={() => setFormData({ ...formData, speakers: formData.speakers.filter((_, j) => j !== i) })}
                          className="p-1 text-destructive"><X size={14} /></button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Packages */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium font-heading">Packages</label>
                  <button
                    onClick={() => setFormData({ ...formData, packages: [...formData.packages, { name: "", price: "", features: "", popular: false }] })}
                    className="text-xs text-primary font-semibold"
                  >+ Add Package</button>
                </div>
                <div className="space-y-3">
                  {formData.packages.map((pkg, i) => (
                    <div key={i} className="bg-muted/50 rounded-lg p-3 space-y-2">
                      <div className="flex gap-2 items-center">
                        <input value={pkg.name} onChange={(e) => {
                          const packages = [...formData.packages];
                          packages[i] = { ...packages[i], name: e.target.value };
                          setFormData({ ...formData, packages });
                        }} className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-xs" placeholder="Package name" />
                        <input value={pkg.price} onChange={(e) => {
                          const packages = [...formData.packages];
                          packages[i] = { ...packages[i], price: e.target.value };
                          setFormData({ ...formData, packages });
                        }} className="w-32 px-3 py-2 rounded-lg border border-border bg-background text-xs" placeholder="Price (TZS)" />
                        <label className="flex items-center gap-1 text-[10px]">
                          <input type="checkbox" checked={pkg.popular} onChange={(e) => {
                            const packages = [...formData.packages];
                            packages[i] = { ...packages[i], popular: e.target.checked };
                            setFormData({ ...formData, packages });
                          }} />
                          Popular
                        </label>
                        {formData.packages.length > 1 && (
                          <button onClick={() => setFormData({ ...formData, packages: formData.packages.filter((_, j) => j !== i) })}
                            className="p-1 text-destructive"><X size={14} /></button>
                        )}
                      </div>
                      <input value={pkg.features} onChange={(e) => {
                        const packages = [...formData.packages];
                        packages[i] = { ...packages[i], features: e.target.value };
                        setFormData({ ...formData, packages });
                      }} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs"
                        placeholder="Features (comma-separated): VIP seating, Mentorship, ..." />
                    </div>
                  ))}
                </div>
              </div>

              {/* Image upload placeholder */}
              <div>
                <label className="block text-xs font-medium mb-1">Event Image</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-muted-foreground text-xs">
                  <p>Drag & drop or click to upload</p>
                  <p className="text-[10px] mt-1">Recommended: 1200 × 600px (JPG, PNG)</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-5 border-t border-border">
              <Button variant="outline" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button variant="accent" size="sm" onClick={() => setShowForm(false)}>
                {editEvent ? "Update Event" : "Create Event"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
