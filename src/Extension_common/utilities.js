export const constructWindowsFeed = ({ tabs, activeTabId, activeWindowId }) => {
  const allOpenFeedKeys = ["Current Window", "Others"];
  let allOpenFeed = { ["Current Window"]: [], Others: [] };

  tabs.forEach((tab) => {
    if (tab.windowId === activeWindowId) {
      if (tab.id === activeTabId) {
        allOpenFeed["Current Window"].unshift(tab);
      } else {
        allOpenFeed["Current Window"].push(tab);
      }
      return;
    }

    allOpenFeed["Others"].push(tab);
  });

  return {
    allOpenFeed,
    allOpenFeedKeys,
  };
};

export const getRootDomain = (url) => {
  let hostname;
  try {
    hostname = new URL(url).hostname;
  } catch (e) {
    hostname = "";
  }
  const hostnameParts = hostname.split(".");
  return hostnameParts.slice(-(hostnameParts.length === 4 ? 3 : 2)).join(".");
};
