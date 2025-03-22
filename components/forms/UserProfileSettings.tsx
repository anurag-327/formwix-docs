"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function ProfileSettingsForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "displayName",
      label: "Display Name",
      validation: {
        required: { value: true, message: "Display name is required" },
        minLength: {
          value: 3,
          message: "Display name must be at least 3 characters",
        },
      },
    },
    {
      type: "email",
      name: "email",
      label: "Email Address",
      validation: {
        required: { value: true, message: "Email is required" },
      },
    },
    {
      type: "text",
      name: "username",
      label: "Username",
      validation: {
        required: { value: true, message: "Username is required" },
        pattern: {
          value: /^[a-zA-Z0-9_-]{3,16}$/,
          message:
            "Username must be 3-16 characters and can only contain letters, numbers, underscores, and hyphens",
        },
      },
    },
    {
      type: "textarea",
      name: "bio",
      label: "Bio",
      placeholder: "Tell others about yourself",
      rows: 4,
      validation: {
        maxLength: {
          value: 200,
          message: "Bio must be at most 200 characters",
        },
      },
    },
    {
      type: "url",
      name: "website",
      label: "Website",
      placeholder: "https://",
    },
    {
      type: "url",
      name: "twitter",
      label: "Twitter/X Profile",
      placeholder: "https://twitter.com/username",
    },
    {
      type: "url",
      name: "linkedin",
      label: "LinkedIn Profile",
      placeholder: "https://linkedin.com/in/username",
    },
    {
      type: "select",
      name: "timezone",
      label: "Timezone",
      options: [
        { label: "Pacific Time (PT)", value: "America/Los_Angeles" },
        { label: "Mountain Time (MT)", value: "America/Denver" },
        { label: "Central Time (CT)", value: "America/Chicago" },
        { label: "Eastern Time (ET)", value: "America/New_York" },
        { label: "UTC", value: "UTC" },
        { label: "Central European Time (CET)", value: "Europe/Paris" },
        { label: "Greenwich Mean Time (GMT)", value: "Europe/London" },
      ],
      validation: {
        required: { value: true, message: "Please select a timezone" },
      },
    },
    {
      type: "select",
      name: "language",
      label: "Preferred Language",
      options: [
        { label: "English", value: "en" },
        { label: "Spanish", value: "es" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
        { label: "Japanese", value: "ja" },
        { label: "Chinese (Simplified)", value: "zh-CN" },
      ],
    },
    {
      type: "password",
      name: "currentPassword",
      label: "Current Password",
      placeholder: "Enter your current password",
    },
    {
      type: "password",
      name: "newPassword",
      label: "New Password",
      placeholder: "Enter your new password",
      validation: {
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
        containNumber: {
          value: true,
          message: "Password must contain at least one number",
        },
        containSpecialChar: {
          value: true,
          message: "Password must contain at least one special character",
        },
        containUpperCase: {
          value: true,
          message: "Password must contain at least one uppercase letter",
        },
      },
    },
    {
      type: "password",
      name: "confirmPassword",
      label: "Confirm New Password",
      placeholder: "Confirm your new password",
      validation: {
        matchField: {
          field: "newPassword",
          message: "Passwords do not match",
        },
      },
    },
    {
      type: "radio",
      name: "theme",
      label: "Interface Theme",
      options: [
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "System Default", value: "system" },
      ],
    },
    {
      type: "checkbox",
      name: "emailNotifications",
      label: "Email Notifications",
    },
    {
      type: "multiselect",
      name: "notificationPreferences",
      label: "Notification Preferences",
      options: [
        { label: "Direct messages", value: "direct-messages" },
        { label: "Comment replies", value: "comment-replies" },
        { label: "Mentions", value: "mentions" },
        { label: "Account updates", value: "account-updates" },
        { label: "New features", value: "new-features" },
      ],
    },
    {
      type: "checkbox",
      name: "twoFactorAuth",
      label: "Enable Two-Factor Authentication",
    },
    {
      type: "checkbox",
      name: "publicProfile",
      label: "Make my profile public",
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Profile settings data:", data);
      // Handle profile settings update here

      // Filter out empty password fields if user didn't intend to change password
      const updatedData = { ...data };
      if (!updatedData.currentPassword && !updatedData.newPassword) {
        delete updatedData.currentPassword;
        delete updatedData.newPassword;
        delete updatedData.confirmPassword;
      }
    },
    defaultValues: {
      displayName: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      bio: "",
      website: "",
      twitter: "",
      linkedin: "",
      timezone: "America/New_York",
      language: "en",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      theme: "system",
      emailNotifications: true,
      notificationPreferences: ["direct-messages", "mentions"],
      twoFactorAuth: false,
      publicProfile: true,
    },
    fields,
    submitText: "Save Changes",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Profile Settings</h2>
      <Formwix config={formConfig} />
    </div>
  );
}
