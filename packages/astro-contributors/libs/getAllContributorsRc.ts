import fs from "node:fs";
import path from "node:path";

export interface RcContributor {
  login: string;
  name: string;
  avatar_url: string;
  profile: string;
  contributions: string[];
}

export interface AllContributorsRc {
  contributors: RcContributor[];
  [key: string]: any;
}

export function findAllContributorsRc(): AllContributorsRc | null {
  let currentDir = process.cwd();

  while (currentDir) {
    const filePath = path.join(currentDir, ".all-contributorsrc");

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(content) as unknown;
      if (
        typeof parsed === "object" &&
        parsed !== null &&
        Array.isArray((parsed as { contributors?: unknown }).contributors)
      ) {
        return parsed as AllContributorsRc;
      }
      return null;
    }

    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) break;
    currentDir = parentDir;
  }

  return null;
}

export function getAllContributorsFromRc(): RcContributor[] {
  const data = findAllContributorsRc();
  return Array.isArray(data?.contributors) ? data.contributors : [];
}
