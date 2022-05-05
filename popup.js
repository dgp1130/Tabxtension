try {
  const tabs = await chrome.tabGroups.query({});
  console.log(tabs);
} catch (err) {
  console.error(err);
}
