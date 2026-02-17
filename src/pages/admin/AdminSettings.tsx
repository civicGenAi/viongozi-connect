import { useState } from "react";
import { Settings, Globe, Mail, Bell, Shield, Palette, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminSettings = () => {
  const [tab, setTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: Globe },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "email", label: "Email", icon: Mail },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your platform configuration</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings tabs */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  tab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <t.icon size={16} /> {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Settings content */}
        <div className="flex-1 bg-card border border-border rounded-xl p-5 sm:p-6">
          {tab === "general" && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-1">Site Name</label>
                  <input defaultValue="Leaders Forum Tanzania" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Site Description</label>
                  <textarea rows={2} defaultValue="Tanzania's premier platform bridging leaders and entrepreneurs" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm resize-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">Contact Email</label>
                    <input defaultValue="info@leadersforum.tz" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Contact Phone</label>
                    <input defaultValue="+255 XXX XXX XXX" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Office Address</label>
                  <input defaultValue="Dar es Salaam, Tanzania" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">Facebook URL</label>
                    <input defaultValue="https://facebook.com/leadersforum" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Instagram URL</label>
                    <input defaultValue="https://instagram.com/leadersforum" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                  </div>
                </div>
              </div>
              <Button variant="accent" size="sm"><Save size={14} /> Save Changes</Button>
            </div>
          )}

          {tab === "notifications" && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg">Notification Settings</h3>
              <div className="space-y-4">
                {[
                  { label: "New registration alerts", desc: "Get notified when someone registers for an event" },
                  { label: "Payment confirmations", desc: "Receive alerts for successful payments" },
                  { label: "Contact form submissions", desc: "Get notified when someone submits the contact form" },
                  { label: "New subscriber alerts", desc: "Notification when someone subscribes to newsletter" },
                  { label: "Award nominations", desc: "Get notified for new award nominations" },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium">{n.label}</p>
                      <p className="text-xs text-muted-foreground">{n.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 bg-muted rounded-full peer peer-checked:bg-primary transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
                    </label>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="sm"><Save size={14} /> Save Changes</Button>
            </div>
          )}

          {tab === "email" && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg">Email Configuration</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-1">SMTP Host</label>
                  <input defaultValue="smtp.gmail.com" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">SMTP Port</label>
                    <input defaultValue="587" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Encryption</label>
                    <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm">
                      <option>TLS</option><option>SSL</option><option>None</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Sender Email</label>
                  <input defaultValue="noreply@leadersforum.tz" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Sender Name</label>
                  <input defaultValue="Leaders Forum Tanzania" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" />
                </div>
              </div>
              <Button variant="accent" size="sm"><Save size={14} /> Save Changes</Button>
            </div>
          )}

          {tab === "security" && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg">Security Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-1">Current Password</label>
                  <input type="password" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Enter current password" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">New Password</label>
                  <input type="password" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Enter new password" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Confirm New Password</label>
                  <input type="password" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm" placeholder="Confirm new password" />
                </div>
                <div className="flex items-center justify-between py-3 border-t border-border">
                  <div>
                    <p className="text-sm font-medium">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </div>
              <Button variant="accent" size="sm"><Save size={14} /> Update Password</Button>
            </div>
          )}

          {tab === "appearance" && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg">Appearance</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-1">Logo</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-muted-foreground text-xs">
                    <p>Drag & drop or click to upload logo</p>
                    <p className="text-[10px] mt-1">PNG, SVG (recommended 200×60px)</p>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Favicon</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-muted-foreground text-xs">
                    <p>Upload favicon (32×32px ICO/PNG)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">Primary Color</label>
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded-lg bg-primary border border-border" />
                      <input defaultValue="#2E86AB" className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-background text-sm font-mono" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Accent Color</label>
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded-lg bg-accent border border-border" />
                      <input defaultValue="#E8871E" className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-background text-sm font-mono" />
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="accent" size="sm"><Save size={14} /> Save Changes</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
