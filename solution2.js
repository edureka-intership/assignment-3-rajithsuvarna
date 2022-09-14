orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

const a = Object.values(orderData);
var total = 0;
for (var i = 0; i < a.length; i++) {
  total = total + a[i];
}
console.log(total);

const proportions = Object.keys(orderData);
console.log(proportions.length);

const response = proportions.map((item, index) => {
  return {
    id: index + 1,
    order: item,
    "order percentage": ((orderData[item] / total) * 100).toFixed(2),
    restaurant: "Punjabi Tadka",
  };
});
console.log(response);
