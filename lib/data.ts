export const data: {
  "Order ID": string;
  "Order date": string;
  "Order amount": string;
  "Transaction fees": string;
}[] = [];

for (let i = 0; i < 150; i++) {
  let randomOrderID = "#" + Math.floor(Math.random() * 1000000);
  let randomOrderDate = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  ).toLocaleDateString();
  let randomOrderAmount = "₹" + (Math.random() * 10000).toFixed(2);
  let randomTransactionFees = "₹" + (Math.random() * 100).toFixed(2);

  data.push({
    "Order ID": randomOrderID,
    "Order date": randomOrderDate,
    "Order amount": randomOrderAmount,
    "Transaction fees": randomTransactionFees,
  });
}
