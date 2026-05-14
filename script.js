const button = document.getElementById("generateBtn");

button.addEventListener("click", async () => {

  const topic = document.getElementById("topic").value;
  const result = document.getElementById("result");
  const status = document.getElementById("status");

  if (!topic) {
    alert("Please enter a topic");
    return;
  }

  result.innerHTML = "";
  status.innerHTML = "Generating viral titles...";

  try {

    const response = await fetch("https://ai-title-api.a1289458763.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topic: topic
      })
    });

    const data = await response.json();

    const text = data?.choices?.[0]?.message?.content || "";

    // 👉 把 AI 输出拆成数组
    const titles = text
      .split("\n")
      .map(t => t.replace(/^\d+[\.\-)\s]*/, "").trim())
      .filter(Boolean);

    status.innerHTML = "";

    result.innerHTML = titles.map(title => `
      <div class="card">
        <div class="title">${title}</div>
        <button class="copy" onclick="copyText('${title.replace(/'/g, "\\'")}')">Copy</button>
      </div>
    `).join("");

  } catch (error) {
    console.error(error);
    status.innerHTML = "Error generating titles.";
  }

});

function copyText(text) {
  navigator.clipboard.writeText(text);
}
</script><script>
const button = document.getElementById("generateBtn");

button.addEventListener("click", async () => {

  const topic = document.getElementById("topic").value;
  const result = document.getElementById("result");
  const status = document.getElementById("status");

  if (!topic) {
    alert("Please enter a topic");
    return;
  }

  result.innerHTML = "";
  status.innerHTML = "Generating viral titles...";

  try {

    const response = await fetch("https://ai-title-api.a1289458763.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topic: topic
      })
    });

    const data = await response.json();

    const text = data?.choices?.[0]?.message?.content || "";

    // 👉 把 AI 输出拆成数组
    const titles = text
      .split("\n")
      .map(t => t.replace(/^\d+[\.\-)\s]*/, "").trim())
      .filter(Boolean);

    status.innerHTML = "";

    result.innerHTML = titles.map(title => `
      <div class="card">
        <div class="title">${title}</div>
        <button class="copy" onclick="copyText('${title.replace(/'/g, "\\'")}')">Copy</button>
      </div>
    `).join("");

  } catch (error) {
    console.error(error);
    status.innerHTML = "Error generating titles.";
  }

});

function copyText(text) {
  navigator.clipboard.writeText(text);
}
