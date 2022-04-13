const retrieveSales = require("../data/sample_data.json");

module.exports.getAllRetrieveSales = async (req, res) => {
  const StatusLables = [
    { key: 0, title: "In Stock" },
    { key: 1, title: "Out of Stock" },
    { key: 2, title: "Custom" },
    { key: 3, title: "On Hold" },
    { key: 4, title: "Superceded" },
    { key: 5, title: "Low Stoc" },
  ];

  // Transform data with Status title
  const data = retrieveSales.map((item) => {
    const itemLabel = StatusLables.find((s) => s.key === item.status);
    if (itemLabel) {
      item.status = itemLabel.title;
    }
    return item;
  });

  // Response data
  res.json({ data });
};
