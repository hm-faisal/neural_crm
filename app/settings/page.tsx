"use client"
import { useState } from "react";
import { FiSettings, FiUsers, FiLock, FiBell, FiDatabase } from "react-icons/fi";

const settingsOptions = [
  { name: "General", id: "general" },
  { name: "Employees", id: "employees" },
  { name: "Security", id: "security" },
  { name: "Notifications", id: "notifications" },
  { name: "Backup", id: "backup" },
];

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="p-6   ">
      <h2 className="text-3xl font-semibold mb-6">Settings</h2>
      <div className="flex gap-4 mb-4">
        {settingsOptions.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              activeTab === option.id ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(option.id)}
          >
            {option.name}
          </button>
        ))}
      </div>

      {activeTab === "general" && <GeneralSettings />}
      {activeTab === "employees" && <EmployeeSettings />}
      {activeTab === "security" && <SecuritySettings />}
      {activeTab === "notifications" && <NotificationSettings />}
      {activeTab === "backup" && <BackupSettings />}
    </div>
  );
};

const GeneralSettings: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4">General Settings</h3>
    <label className="block mb-2">Company Name</label>
    <input className="w-full p-2 border rounded-md" type="text" placeholder="Enter company name" />
  </div>
);

const EmployeeSettings: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4">Employee Management</h3>
    <p>Manage employee roles, permissions, and more.</p>
  </div>
);

const SecuritySettings: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4">Security Settings</h3>
    <p>Enable 2FA, set password policies, and monitor access logs.</p>
  </div>
);

const NotificationSettings: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4">Notification Preferences</h3>
    <p>Customize email and system notifications.</p>
  </div>
);

const BackupSettings: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold mb-4">Backup & Data</h3>
    <p>Manage automated backups and data export settings.</p>
  </div>
);

export default SettingsPage;
