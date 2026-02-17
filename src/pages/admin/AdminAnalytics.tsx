import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";
import { TrendingUp, Users, Eye, Globe, ArrowUpRight } from "lucide-react";

const pageViews = [
  { date: "Feb 1", views: 820 }, { date: "Feb 3", views: 1100 }, { date: "Feb 5", views: 950 },
  { date: "Feb 7", views: 1400 }, { date: "Feb 9", views: 1250 }, { date: "Feb 11", views: 1800 },
  { date: "Feb 13", views: 2100 }, { date: "Feb 15", views: 1950 },
];

const topPages = [
  { page: "/", views: 8420, label: "Homepage" },
  { page: "/forums", views: 4230, label: "Forums" },
  { page: "/sectors", views: 2890, label: "Sectors" },
  { page: "/rewards", views: 1560, label: "Rewards" },
  { page: "/contact", views: 1120, label: "Contact" },
  { page: "/about", views: 980, label: "About" },
];

const registrations = [
  { month: "Oct", count: 45 }, { month: "Nov", count: 62 }, { month: "Dec", count: 78 },
  { month: "Jan", count: 95 }, { month: "Feb", count: 112 },
];

const trafficSources = [
  { source: "Direct", visits: 4500 }, { source: "Social Media", visits: 3200 },
  { source: "Search", visits: 2800 }, { source: "Referral", visits: 1500 }, { source: "Email", visits: 900 },
];

const AdminAnalytics = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-xl sm:text-2xl font-heading font-bold">Analytics</h1>
      <p className="text-sm text-muted-foreground">Website performance and visitor insights</p>
    </div>

    {/* Overview stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {[
        { label: "Page Views", value: "24.5K", change: "+22%", icon: Eye },
        { label: "Unique Visitors", value: "8,920", change: "+15%", icon: Users },
        { label: "Registrations", value: "392", change: "+18%", icon: TrendingUp },
        { label: "Bounce Rate", value: "34%", change: "-5%", icon: Globe },
      ].map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <s.icon size={18} className="text-muted-foreground" />
            <span className="text-[10px] text-green-600 font-semibold flex items-center gap-0.5">
              <ArrowUpRight size={10} /> {s.change}
            </span>
          </div>
          <p className="text-xl font-heading font-black">{s.value}</p>
          <p className="text-[11px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Page Views (Feb 2026)</h3>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={pageViews}>
              <XAxis dataKey="date" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Area type="monotone" dataKey="views" fill="hsl(200,72%,44%)" fillOpacity={0.15} stroke="hsl(200,72%,44%)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Registrations Over Time</h3>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={registrations}>
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(33,93%,54%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    {/* Tables */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Top Pages</h3>
        <div className="space-y-3">
          {topPages.map((p, i) => (
            <div key={p.page} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-5">{i + 1}.</span>
                <div>
                  <p className="text-sm font-medium">{p.label}</p>
                  <p className="text-[10px] text-muted-foreground font-mono">{p.page}</p>
                </div>
              </div>
              <span className="text-sm font-heading font-bold">{p.views.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-heading font-bold mb-4">Traffic Sources</h3>
        <div className="space-y-3">
          {trafficSources.map((t) => {
            const max = Math.max(...trafficSources.map((s) => s.visits));
            return (
              <div key={t.source}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{t.source}</span>
                  <span className="text-xs text-muted-foreground">{t.visits.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${(t.visits / max) * 100}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default AdminAnalytics;
