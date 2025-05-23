"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

export default function DisableDraftMode() {
  const environment = useDraftModeEnvironment();
  const router = useRouter();

  //   Only show the disable draft mode button when outside of presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  const handleClick = async () => {
    await fetch("/draft-mode/disable");
    router.refresh();
  };
  return (
    <button
      onClick={handleClick}
      className="fixed button-4 right-4 bg-gray-50 px-4 py-2 z-50"
    >
      Disable Draft Mode
    </button>
  );
}
