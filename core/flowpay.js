// Fetch news from a crypto news API
async function fetchNews() {
  try {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch news:', error);
  }
}

// Render the news on the homepage
async function renderNews() {
  const newsContainer = document.getElementById('news-container');
  const newsData = await fetchNews();
  if (newsData) {
    newsData.forEach((newsItem) => {
      const newsHTML = `
        <div class="news-item">
          <h2>${newsItem.title}</h2>
          <p>${newsItem.body}</p>
          <a href="${newsItem.url}" target="_blank">Read more</a>
        </div>
      `;
      newsContainer.insertAdjacentHTML('beforeend', newsHTML);
    });
  }
}

// Call the render function when the page loads
document.addEventListener('DOMContentLoaded', renderNews);