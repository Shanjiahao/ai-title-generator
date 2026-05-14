const button = document.getElementById("generateBtn");

button.addEventListener("click", async () => {

  const topic = document.getElementById("topic").value;
  const result = document.getElementById("result");

  if (!topic) {
    alert("Please enter a topic");
    return;
  }

  result.innerHTML = "Generating...";

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

    console.log(data);

    const text = data?.choices?.[0]?.message?.content || "No result";

    result.innerHTML = text;

  } catch (error) {

    result.innerHTML = "Error generating titles.";
    console.error(error);

  }

});
