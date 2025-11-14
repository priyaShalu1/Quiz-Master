// This module ensures Chart.js is properly exported
if (typeof window !== "undefined" && window.Chart) {
  module.exports = { Chart: window.Chart }
} else {
  // Fallback for CommonJS environments
  const Chart = require("chart.js/auto")
  module.exports = { Chart }
}
