// app/api/chatApi.js

export async function sendMessageToAPI(message) {
  try {
    const response = await fetch("https://tsa-nie-next.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data.reply; // whatever your backend returns
  } catch (error) {
    return "Network error!";
  }
}
