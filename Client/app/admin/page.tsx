"use client";

import { useState } from "react";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    componentName: "",
    inspiredName: "",
    inspiredLink: "",
    code: "",
    mediaLink: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "http://localhost:1000/admin/add-component",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Component added successfully!" });
        setFormData({
          componentName: "",
          inspiredName: "",
          inspiredLink: "",
          code: "",
          mediaLink: "",
        });
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to add component",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Network error. Make sure the server is running.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add Component</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Component Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Component Name
            </label>
            <input
              type="text"
              name="componentName"
              value={formData.componentName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-600 transition-colors"
              placeholder="e.g., Animated Button"
            />
          </div>

          {/* Inspired Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Inspired By
            </label>
            <input
              type="text"
              name="inspiredName"
              value={formData.inspiredName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-600 transition-colors"
              placeholder="e.g., Stripe, Linear, Vercel"
            />
          </div>

          {/* Inspired Link */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Inspiration Link
            </label>
            <input
              type="url"
              name="inspiredLink"
              value={formData.inspiredLink}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-600 transition-colors"
              placeholder="https://example.com"
            />
          </div>

          {/* Code */}
          <div>
            <label className="block text-sm font-medium mb-2">Code</label>
            <textarea
              name="code"
              value={formData.code}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-600 transition-colors font-mono text-sm"
              placeholder="Paste your component code here..."
            />
          </div>

          {/* Image / Video Link */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Image / Video Link
            </label>
            <input
              type="url"
              name="mediaLink"
              value={formData.mediaLink}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-600 transition-colors"
              placeholder="https://example.com/image.png"
            />
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-900/50 text-green-300 border border-green-800"
                  : "bg-red-900/50 text-red-300 border border-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Adding..." : "Add Component"}
          </button>
        </form>
      </div>
    </div>
  );
}
