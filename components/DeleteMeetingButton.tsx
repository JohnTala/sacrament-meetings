"use client";

interface DeleteMeetingButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function DeleteMeetingButton({
  children,
  className = "",
}: DeleteMeetingButtonProps) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!window.confirm("Delete this meeting?")) {
          e.preventDefault();
        }
      }}
      aria-label="Delete meeting"
      className={className}
    >
      {children}
    </button>
  );
}