import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard, Calendar, CreditCard, Award, Download, Users, Mail,
  Settings, Menu, X, ChevronDown, LogOut, Bell, Search, BarChart3,
  FileText, Globe,
} from "lucide-react";
import logo from "@/assets/logo.png";

const navSections = [
  {
    label: "Main",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
      { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    ],
  },
  {
    label: "Content",
    items: [
      { icon: Calendar, label: "Forums & Events", href: "/admin/events" },
      { icon: FileText, label: "News & Updates", href: "/admin/news" },
      { icon: Download, label: "Downloads", href: "/admin/downloads" },
      { icon: Globe, label: "Sectors", href: "/admin/sectors" },
    ],
  },
  {
    label: "Business",
    items: [
      { icon: CreditCard, label: "Payments", href: "/admin/payments" },
      { icon: Award, label: "Rewards & Awards", href: "/admin/rewards" },
    ],
  },
  {
    label: "People",
    items: [
      { icon: Users, label: "Subscribers", href: "/admin/subscribers" },
      { icon: Mail, label: "Contacts", href: "/admin/contacts" },
    ],
  },
  {
    label: "System",
    items: [
      { icon: Settings, label: "Settings", href: "/admin/settings" },
    ],
  },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(href);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-sidebar-border flex items-center gap-3">
        <img src={logo} alt="Leaders Forum" className="h-8 w-auto" />
        <div>
          <p className="text-sm font-heading font-bold text-sidebar-foreground">Leaders Forum</p>
          <p className="text-[10px] text-muted-foreground">Admin Panel</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-2">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-sidebar-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent transition-colors"
        >
          <Globe size={18} />
          View Website
        </Link>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors w-full">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-secondary overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 flex-shrink-0 bg-sidebar border-r border-sidebar-border flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-sidebar shadow-xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 w-64">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell size={20} className="text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-border">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                AD
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium leading-none">Admin</p>
                <p className="text-[10px] text-muted-foreground">admin@leadersforum.tz</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
