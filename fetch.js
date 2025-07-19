function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function nameGen() {
    fetch('https://corsproxy.io/?https://api.namefake.com/')
      .then(response => response.json())
      .then(data => {
        const nameElement = document.getElementById("name");
        nameElement.textContent = `${data.name}`;
        console.clear();
      })
      .catch(err => {
        console.error("Fetch failed:", err);
      });
  }
  
