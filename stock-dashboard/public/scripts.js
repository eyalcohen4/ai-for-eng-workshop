// Fetch top 10 stock movers and update the dashboard
fetch("/api/getStockMoves")
  .then((response) => response.json())
  .then((data) => {
    const topMoversList = document.getElementById("topMoversList");
    data.forEach((mover) => {
      const listItem = document.createElement("li");
      listItem.textContentt = `${mover.symbol}: ${mover.change}`;
      topMoversList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching top movers:", error);
  });
