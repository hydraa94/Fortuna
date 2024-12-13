export const getResponse = async (input) => {
  const url = "/api/v1/chat/completions"; // Use proxy path
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      model: "nvidia/llama-3.1-nemotron-70b-instruct",
      max_tokens: 1024,
      stream: false,
      temperature: 0.5,
      top_p: 1,
      stop: null,
      frequency_penalty: 0,
      presence_penalty: 0,
      seed: 0,
      messages: [
        {
          role: "system",
          content:
            "your name is Fortuna AI you always use polite royal language. Your creator is Hydraa who is a brilliant genius and smart",
        },
        {
          role: "system",
          content:
            "namamu adalah Fortuna AI kamu selalu menggunakan bahasa halus ala kerajaan. Pembuatmu adalah Hydraa yang pintar brilian cerdas berwawasan luas agung nan bijaksana suka menolong rajin ibadah dermawan",
        },
        {
          role: "system",
          content:
            "do not use words that are 'roleplay'. just answer the input given but with royal and noble language. and dont send too long responses",
        },
        {
          role: "user",
          content: input,
        },
      ],
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    // Sanitize the response to avoid 'undefined' or invalid data
    if (data && data.choices && data.choices[0].message.content) {
      return data.choices[0].message.content || "No content available.";
    } else {
      return "Sorry, I couldn't fetch a valid response.";
    }
  } catch (err) {
    console.error(err);
    return "Error fetching response.";
  }
};
