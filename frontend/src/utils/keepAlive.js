import API_URL from "../config";

let intervalId = null;

export function startKeepAlive() {
  if (intervalId) return;

  const ping = () => {
    fetch(`${API_URL}/ping`)
      .then(() => console.log("[KeepAlive] Backend awake ✅"))
      .catch(() => console.warn("[KeepAlive] Backend waking up..."));
  };

  ping();
  intervalId = setInterval(ping, 5 * 60 * 1000); 
}
    