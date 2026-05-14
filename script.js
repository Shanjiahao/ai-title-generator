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

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer ",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "inclusionai/ring-2.6-1t:free",
        messages: [
          {
            role: "user",
            content: `Generate 10 viral blog or social media titles about: ${topic}`
          }
        ]
      })
    });

    const data = await response.json();

    console.log(data);
      
    result.innerHTML = data.choices[0].message.content;

  } catch (error) {

    result.innerHTML = "Error generating titles.";

    console.error(error);
  }

});