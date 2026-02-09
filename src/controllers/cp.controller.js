import {
  fetchCPStats,
  fetchCodeforces,
  fetchCodeChef,
  fetchLeetCode,
} from "../services/cp.service.js";

export const getCPStats = async (req, res) => {
  try {
    const stats = await fetchCPStats();

    res.status(200).json(stats);
  } catch (error) {
    console.error("CP Controller Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch CP stats",
    });
  }
};

export const getCPByPlatform = async (req, res) => {
  const { platform } = req.params;

  try {
    let data;

    switch (platform.toLowerCase()) {
      case "codeforces":
        data = await fetchCodeforces();
        break;

      case "codechef":
        data = await fetchCodeChef();
        break;

      case "leetcode":
        data = await fetchLeetCode("kushagra_jain02");
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Invalid CP platform",
        });
    }

    res.status(200).json({
      success: true,
      platform,
      data,
      lastUpdated: new Date(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch CP stats",
    });
  }
};
