import axios from "axios";
import * as cheerio from "cheerio";

/* ===================== CODEFORCES ===================== */
export const fetchCodeforces = async () => {
  try {
    const HANDLE = "Kushagra_Jain02";
    const URL = `https://codeforces.com/api/user.info?handles=${HANDLE}`;

    const res = await axios.get(URL);
    const data = res.data.result[0];

    return {
      platform: "Codeforces",
      handle: data.handle,
      rating: data.rating ?? 0,
      rank: data.rank ?? "unrated",
      maxRating: data.maxRating ?? 0,
      maxRank: data.maxRank ?? "",
    };
  } catch (error) {
    console.error("Codeforces fetch error:", error.message);
    return {
      platform: "Codeforces",
      error: "Failed to fetch Codeforces data",
    };
  }
};

/* ===================== CODECHEF ===================== */
export const fetchCodeChef = async () => {
  try {
    const USERNAME = "kushagrajain02";
    const URL = `https://www.codechef.com/users/${USERNAME}`;

    const { data: html } = await axios.get(URL, {
      headers: {
        // prevents CodeChef bot blocking
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    const $ = cheerio.load(html);

    // console.log(html.substring(0, 1000));
    // console.log(data);

    const rating = Number($(".rating-number").first().text()) || 0;
    const stars = $(".rating-star").first().text().trim();
    const maxRating = 1709;

    return {
      platform: "CodeChef",
      handle: USERNAME,
      rating,
      stars,
      maxRating,
    };
  } catch (error) {
    console.error("CodeChef fetch error:", error.message);
    return {
      platform: "CodeChef",
      error: "Failed to fetch CodeChef data",
    };
  }
};

export const fetchLeetCode = async (username) => {
  try {
    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
            reputation
          }
        }
        userContestRanking(username: $username) {
          rating
          globalRanking
          attendedContestsCount
        }
      }
    `;

    const res = await axios.post(
      "https://leetcode.com/graphql",
      {
        query,
        variables: { username },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const user = res.data.data.matchedUser;
    const contest = res.data.data.userContestRanking;

    const solved = user.submitStats.acSubmissionNum;

    return {
      platform: "LeetCode",
      handle: user.username,
      totalSolved: solved.find((d) => d.difficulty === "All")?.count || 0,
      easy: solved.find((d) => d.difficulty === "Easy")?.count || 0,
      medium: solved.find((d) => d.difficulty === "Medium")?.count || 0,
      hard: solved.find((d) => d.difficulty === "Hard")?.count || 0,
      rating: contest?.rating || null,
      globalRank: contest?.globalRanking || null,
      contests: contest?.attendedContestsCount || 0,
    };
  } catch (err) {
    console.error("LeetCode fetch failed:", err.message);
    return { platform: "LeetCode", error: "Failed to fetch data" };
  }
};

export const fetchCPStats = async () => {
  const [codeforces, codechef, leetcode] = await Promise.all([
    fetchCodeforces(),
    fetchCodeChef(),
    fetchLeetCode("kushagra_jain02"),
  ]);

  return {
    success: true,
    data: {
      codeforces,
      codechef,
      leetcode,
    },
    lastUpdated: new Date(),
  };
};


