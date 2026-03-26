"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-100 text-blue-200 bg-zinc-800 p-4 flex justify-evenly items-center z-100">
      <span>
        This site uses cookies and YouTube embeds which may collect data.
      </span>
      <button onClick={accept} style={styles.button}>
        Accept
      </button>
    </div>
  );
}

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "#111",
    color: "#fff",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  button: {
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
  },
};
