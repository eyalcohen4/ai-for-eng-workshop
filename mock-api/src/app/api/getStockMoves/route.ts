import { NextResponse } from "next/server";

// Function to generate a random price change
const randomPriceChange = () => (Math.random() * 4 - 2).toFixed(2);
const randomPrice = () => Math.random() * 100 - 1;

// Sample stocks array
const stocks = [
  { symbol: "AAPL", change: randomPriceChange(), price: randomPrice() },
  { symbol: "GOOGL", change: randomPriceChange(), price: randomPrice() },
  { symbol: "MSFT", change: randomPriceChange(), price: randomPrice() },
  { symbol: "AMZN", change: randomPriceChange(), price: randomPrice() },
  { symbol: "TSLA", change: randomPriceChange(), price: randomPrice() },
  { symbol: "FB", change: randomPriceChange(), price: randomPrice() },
  { symbol: "NFLX", change: randomPriceChange(), price: randomPrice() },
  { symbol: "NVDA", change: randomPriceChange(), price: randomPrice() },
  { symbol: "BABA", change: randomPriceChange(), price: randomPrice() },
  { symbol: "JPM", change: randomPriceChange(), price: randomPrice() },
];

export const GET = () => {
  return NextResponse.json({
    stocks: stocks,
  });
};
