import { useState } from "react";
import { CreditCard, Search, Download, Filter, ArrowUpRight, ArrowDownRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const payments = [
  { id: "PAY-001", name: "James Mwanga", email: "james@gmail.com", phone: "+255 712 345 678", event: "Leaders Forum 2026", package: "Elite", amount: "500,000", method: "M-Pesa", status: "Completed", date: "Feb 15, 2026" },
  { id: "PAY-002", name: "Grace Kimaro", email: "grace@yahoo.com", phone: "+255 765 432 100", event: "Leaders Forum 2026", package: "Professional", amount: "300,000", method: "Card", status: "Completed", date: "Feb 14, 2026" },
  { id: "PAY-003", name: "David Ramadhani", email: "david@outlook.com", phone: "+255 654 321 000", event: "Leaders Forum 2026", package: "Community", amount: "150,000", method: "Bank Transfer", status: "Pending", date: "Feb 14, 2026" },
  { id: "PAY-004", name: "Amina Hassan", email: "amina@gmail.com", phone: "+255 789 012 345", event: "Leaders Forum 2026", package: "Elite", amount: "500,000", method: "M-Pesa", status: "Completed", date: "Feb 13, 2026" },
  { id: "PAY-005", name: "Peter Mushi", email: "peter@gmail.com", phone: "+255 690 123 456", event: "Entrepreneurship Summit 2026", package: "Startup", amount: "200,000", method: "Card", status: "Failed", date: "Feb 12, 2026" },
  { id: "PAY-006", name: "Lucy Lyimo", email: "lucy@mail.com", phone: "+255 712 000 111", event: "Leaders Forum 2026", package: "Professional", amount: "300,000", method: "M-Pesa", status: "Completed", date: "Feb 11, 2026" },
  { id: "PAY-007", name: "John Makamba", email: "john@company.co.tz", phone: "+255 786 555 000", event: "Entrepreneurship Summit 2026", package: "Investor", amount: "350,000", method: "Bank Transfer", status: "Pending", date: "Feb 10, 2026" },
  { id: "PAY-008", name: "Martha Urio", email: "martha@gmail.com", phone: "+255 655 888 999", event: "Leaders Forum 2026", package: "Community", amount: "150,000", method: "M-Pesa", status: "Refunded", date: "Feb 8, 2026" },
];

const stats = [
  { label: "Total Collected", value: "TZS 45.2M", change: "+12.5%", up: true },
  { label: "Completed", value: "58", change: "+8", up: true },
  { label: "Pending", value: "12", change: "-3", up: false },
  { label: "Refunded", value: "3", change: "+1", up: false },
];

const AdminPayments = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedPayment, setSelectedPayment] = useState<typeof payments[0] | null>(null);

  const filtered = payments.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold">Payments</h1>
          <p className="text-sm text-muted-foreground">Track and manage all payment transactions</p>
        </div>
        <Button variant="outline" size="sm"><Download size={14} /> Export CSV</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4">
            <p className="text-[11px] text-muted-foreground mb-1">{s.label}</p>
            <p className="text-lg font-heading font-black">{s.value}</p>
            <span className={`text-[10px] font-semibold flex items-center gap-0.5 ${s.up ? "text-green-600" : "text-destructive"}`}>
              {s.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />} {s.change}
            </span>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 flex-1">
          <Search size={16} className="text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or ID..."
            className="bg-transparent text-sm outline-none w-full" />
        </div>
        <div className="flex items-center gap-2">
          {["All", "Completed", "Pending", "Failed", "Refunded"].map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                statusFilter === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>{s}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">ID</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden md:table-cell">Event</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Package</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden sm:table-cell">Method</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden md:table-cell">Date</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                  <td className="py-3 px-4 font-mono text-muted-foreground">{p.id}</td>
                  <td className="py-3 px-4">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-[10px] text-muted-foreground">{p.email}</p>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell text-muted-foreground">{p.event}</td>
                  <td className="py-3 px-4">{p.package}</td>
                  <td className="py-3 px-4 font-medium">TZS {p.amount}</td>
                  <td className="py-3 px-4 hidden sm:table-cell text-muted-foreground">{p.method}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      p.status === "Completed" ? "bg-green-100 text-green-700" :
                      p.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      p.status === "Failed" ? "bg-red-100 text-red-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>{p.status}</span>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell text-muted-foreground">{p.date}</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setSelectedPayment(p)}><Eye size={14} /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment detail modal */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-xl border border-border shadow-xl w-full max-w-md p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold">Payment Details</h3>
              <button onClick={() => setSelectedPayment(null)} className="p-1 hover:bg-muted rounded">✕</button>
            </div>
            <div className="space-y-3 text-sm">
              {Object.entries({
                "Transaction ID": selectedPayment.id,
                "Customer": selectedPayment.name,
                "Email": selectedPayment.email,
                "Phone": selectedPayment.phone,
                "Event": selectedPayment.event,
                "Package": selectedPayment.package,
                "Amount": `TZS ${selectedPayment.amount}`,
                "Method": selectedPayment.method,
                "Status": selectedPayment.status,
                "Date": selectedPayment.date,
              }).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1"><Download size={14} /> Receipt</Button>
              <Button variant="accent" size="sm" className="flex-1" onClick={() => setSelectedPayment(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPayments;
