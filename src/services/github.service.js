// import axios from "axios";

// // ================== CONFIG ==================
// const USERNAME = "KushagraJain02";
// const BASE_URL = "https://api.github.com";

// const headers = {
//   "User-Agent": "Portfolio-App",
//   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // ⚡ Use your token here
// };

// // ================== GITHUB PROFILE ==================
// export const fetchGithub = async () => {
//   try {
//     const res = await axios.get(`${BASE_URL}/users/${USERNAME}`, { headers });
//     const data = res.data;

//     return {
//       platform: "GitHub",
//       handle: data.login,
//       name: data.name,
//       avatar: data.avatar_url,
//       profileUrl: data.html_url,
//       publicRepos: data.public_repos,
//       followers: data.followers,
//       following: data.following,
//       bio: data.bio,
//       createdAt: data.created_at,
//     };
//   } catch (error) {
//     console.error("GitHub profile fetch error:", error.message);
//     return { error: "Failed to fetch GitHub profile" };
//   }
// };

// // ================== GITHUB PROJECTS ==================
// export const fetchGitHubRepos = async () => {
//   try {
//     // Fetch all repos
//     const res = await axios.get(
//       `${BASE_URL}/users/${USERNAME}/repos?per_page=100&sort=updated`,
//       { headers }
//     );

//     // Exclude forks, empty repos, backend repos
//     const repos = res.data.filter(
//       (repo) =>
//         !repo.fork &&
//         repo.size > 0 &&
//         !isBackendRepoByName(repo.name)
//     );

//     const projects = [];

//     // Use for-loop to avoid Promise.all crash on single repo failure
//     for (const repo of repos) {
//       try {
//         // Fetch languages
//         const langRes = await axios.get(repo.languages_url, { headers });

//         // Fetch Live Demo from README if homepage doesn't exist
//         const liveFromReadme = repo.homepage
//           ? null
//           : await fetchLiveDemoFromReadme(USERNAME, repo.name);

//         projects.push({
//           slug: repo.name,
//           title: formatTitle(repo.name),
//           shortDesc: repo.description ?? "No description provided",
//           tech: Object.keys(langRes.data),
//           live: liveFromReadme || repo.homepage || null,
//           code: repo.html_url,
//           stars: repo.stargazers_count,
//           forks: repo.forks_count,
//           updatedAt: repo.updated_at,
//         });
//       } catch (repoError) {
//         console.warn(`Skipped repo: ${repo.name}`);
//       }
//     }

//     return { success: true, data: projects };
//   } catch (error) {
//     console.error("GitHub repos fetch error:", error.response?.status, error.message);
//     return { success: false, error: "Failed to fetch GitHub repositories" };
//   }
// };

// // ================== HELPERS ==================

// // Convert repo-name -> "Repo Name"
// const formatTitle = (name) =>
//   name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// // Extract Live Demo link from README
// const fetchLiveDemoFromReadme = async (owner, repo) => {
//   try {
//     const res = await axios.get(
//       `${BASE_URL}/repos/${owner}/${repo}/readme`,
//       { headers }
//     );

//     // Remove newlines from Base64 content
//     const content = res.data.content.replace(/\n/g, "");

//     // Decode Base64 (browser + Node)
//     const readme =
//       typeof atob === "function"
//         ? atob(content)
//         : Buffer.from(content, "base64").toString("utf-8");

//     // Regex: case-insensitive, handles spaces, colon/dash, markdown link
//     const regex =
//       /live\s*demo\s*[:\-]?\s*\[[^\]]*\]\s*\(\s*(https?:\/\/[^)\s]+)\s*\)/i;

//     const match = readme.match(regex);
//     return match ? match[1] : null;
//   } catch {
//     return null; // README may not exist
//   }
// };

// // Detect backend repos by name (e.g., doctorapp_backend)
// const isBackendRepoByName = (repoName) => {
//   const backendPatterns = [
//     /backend/i,
//     /_back/i,
//     /\bapi\b/i,
//     /server/i,
//   ];

//   return backendPatterns.some((p) => p.test(repoName));
// };
