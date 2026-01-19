const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const form = document.getElementById("gif-form");
const searchInput = document.getElementById("search-input");
const display = document.getElementById("display-div");
const clearButton = document.getElementById("clear-gifs-btn");

// Submit form and fetch GIF
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const response = await axios.get(
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          api_key: giphyApiKey,
          q: query,
          limit: 1
        }
      }
    );

    const gifUrl =
      response.data.data[0].images.fixed_width.url;

    const img = document.createElement("img");
    img.src = gifUrl;

    display.appendChild(img);
    searchInput.value = "";
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
});

// Clear all GIFs
clearButton.addEventListener("click", function () {
  display.innerHTML = "... GIFs will appear here ...";
});
