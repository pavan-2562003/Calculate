const fs = require('fs');

// Load cost data
const costData = JSON.parse(fs.readFileSync('cost.json'));

// Load channel cost data
const channelData = JSON.parse(fs.readFileSync('channel-cost.json'));

// Calculate total cost per channel per day
const result = {};
for (const obj of channelData) {
  const date = obj.date.slice(0, 10);
  const channel = Object.keys(obj).find(key => key !== 'date');
  const channelCount = obj[channel] || 0;
  const costPerUnit = costData[channel];
  const totalCost = parseFloat((costPerUnit * channelCount).toFixed(2));
  if (!result[date]) {
    result[date] = { ...costData, total: 0 };
  }
  result[date][channel] += channelCount;
  result[date].total += totalCost;
}

// Convert the result object to an array
const resultArray = Object.entries(result).map(([date, value]) => ({
  ...value,
  date
}));

// Sort by date
resultArray.sort((a, b) => a.date.localeCompare(b.date));

// Format the date field as YYYY-MM-DD
for (const obj of resultArray) {
  obj.date = new Date(obj.date).toISOString().slice(0, 10);
}

// Write output to file
fs.writeFileSync('result.json', JSON.stringify(resultArray));
