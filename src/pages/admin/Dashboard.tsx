import { BarChart3, Users, CreditCard, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight, Eye } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const stats = [
  { label: "Total Revenue", value: "TZS 45.2M", change: "+12.5%", up: true, icon: CreditCard, color: "bg-primary/10 text-primary" },
  { label: "Total Subscribers", value: "1,284", change: "+8.3%", up: true, icon: Users, color: "bg-accent/10 text-accent" },
  { label: "Upcoming Events", value: "2", change: "0", up: true, icon: Calendar, color: "bg-gold/10 text-gold" },
  { label: "Page Views", value: "24.5K", change: "+22%", up: true, icon: Eye, color: "bg-primary/10 text-primary" },
];

const revenueData = [
  { month: "Sep", amount: 2800000 }, { month: "Oct", amount: 3200000 }, { month: "Nov", amount: 4100000 },
  { month: "Dec", amount: 5500000 }, { month: "Jan", amount: 6200000 }, { month: "Feb", amount: 7800000 },
];

const packageData = [
  { name: "Community", value: 45, color: "hsl(200,72%,44%)" },
  { name: "Professional", value: 35, color: "hsl(33,93%,54%)" },
  { name: "Elite", value: 20, color: "hsl(38,90%,55%)" },
];

const recentPayments = [
  { name: "James Mwanga", email: "james@gmail.com", package: "Elite", amount: "500,000", status: "Completed", date: "Feb 15" },
  { name: "Grace Kimaro", email: "grace@yahoo.com", package: "Professional", amount: "300,000", status: "Completed", date: "Feb 14" },
  { name: "David Ramadhani", email: "david@outlook.com", package: "Community", amount: "150,000", status: "Pending", date: "Feb 14" },
  { name: "Amina Hassan", email: "amina@gmail.com", package: "Elite", amount: "500,000", status: "Completed", date: "Feb 13" },
  { name: "Peter Mushi", email: "peter@gmail.com", package: "Professional", amount: "300,000", status: "Failed", date: "Feb 12" },
];

const recentContacts = [
  { name: "Sarah Njau", subject: "Sponsorship Inquiry", date: "2h ago", read: false },
  { name: "Mike Oloo", subject: "Bulk registration discount", date: "5h ago", read: false },
  { name: "Lucy Mbeki", subject: "Speaker submission", date: "1d ago", read: true },
  { name: "John Makamba", subject: "Invoice request", date: "2d ago", read: true },
];

const Dashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-xl sm:text-2xl font-heading font-bold">Dashboard</h1>
      <p className="text-sm text-muted-foreground">Welcome back, Admin. Here's your overview.</p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.color}`}>
              <s.icon size={18} />
            </div>
            <span className={`text-xs font-semibold flex items-center gap-0.5 ${s.up ? "text-green-600" : "text-destructive"}`}>
              {s.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {s.change}
            </span>
          </div>
          <p className="text-lg sm:text-xl font-heading font-black">{s.value}</p>
          <p className="text-[11px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Charts row */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Revenue Trend (6 Months)</h3>
        <div className="h-52 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(v: number) => [`TZS ${v.toLocaleString()}`, "Revenue"]} />
              <Bar dataKey="amount" fill="hsl(200,72%,44%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Package Distribution</h3>
        <div className="h-48 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={packageData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {packageData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    {/* Tables row */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Recent Payments</h3>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="text-left py-2 px-3 font-medium">Name</th>
                <th className="text-left py-2 px-3 font-medium hidden sm:table-cell">Package</th>
                <th className="text-left py-2 px-3 font-medium">Amount</th>
                <th className="text-left py-2 px-3 font-medium">Status</th>
                <th className="text-left py-2 px-3 font-medium hidden sm:table-cell">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((p, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="py-2.5 px-3">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-muted-foreground text-[10px]">{p.email}</p>
                  </td>
                  <td className="py-2.5 px-3 hidden sm:table-cell">{p.package}</td>
                  <td className="py-2.5 px-3 font-medium">TZS {p.amount}</td>
                  <td className="py-2.5 px-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      p.status === "Completed" ? "bg-green-100 text-green-700" :
                      p.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>{p.status}</span>
                  </td>
                  <td className="py-2.5 px-3 text-muted-foreground hidden sm:table-cell">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Recent Messages</h3>
        <div className="space-y-3">
          {recentContacts.map((c, i) => (
            <div key={i} className={`flex items-start gap-3 p-2.5 rounded-lg ${!c.read ? "bg-primary/5" : ""}`}>
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${!c.read ? "bg-primary" : "bg-transparent"}`} />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{c.name}</p>
                <p className="text-xs text-muted-foreground truncate">{c.subject}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{c.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
