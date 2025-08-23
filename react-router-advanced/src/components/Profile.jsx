import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Profile Page</h2>
      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
