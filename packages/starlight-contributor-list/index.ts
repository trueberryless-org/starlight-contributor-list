import type { StarlightPlugin } from "@astrojs/starlight/types";
import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

export default function starlightContributorList(): StarlightPlugin {
  return {
    name: "starlight-contributor-list",
    hooks: {
      "config:setup"({ logger }) {
        try {
          // Use process.cwd() to get the project root
          const projectRoot = process.cwd();
          const rcPath = join(projectRoot, ".all-contributorsrc");

          if (!existsSync(rcPath)) {
            logger.warn("No .all-contributorsrc file found in project root.");
            return;
          }

          // Read the .all-contributorsrc file
          const rcContent = readFileSync(rcPath, "utf-8");
          const contributorsConfig = JSON.parse(rcContent);

          // Back up the original config
          const originalConfig = JSON.parse(JSON.stringify(contributorsConfig));

          // Get the path to the component in the package
          const packagePath = dirname(fileURLToPath(import.meta.url));
          const componentAbsolutePath = join(
            packagePath,
            "components",
            "AllContributorsRC.astro"
          );

          // Modify the config for our needs
          const componentRelativePath = relative(
            projectRoot,
            componentAbsolutePath
          );
          contributorsConfig.files = [componentRelativePath];
          logger.info(
            `Using ${componentRelativePath} as the component for all-contributors`
          );

          // Ensure contributorsPerLine is maximum 3
          if (
            !contributorsConfig.contributorsPerLine ||
            contributorsConfig.contributorsPerLine > 3
          ) {
            contributorsConfig.contributorsPerLine = 3;
          }

          // Write the modified config back to the file
          writeFileSync(rcPath, JSON.stringify(contributorsConfig, null, 2));

          // Run the all-contributors generate CLI command using the one from our package
          try {
            // Get the path to the all-contributors-cli in our package
            const allContributorsPath = join(
              packagePath,
              "node_modules",
              ".bin",
              "all-contributors"
            );

            // If the local path doesn't exist, fall back to npx
            const cliCommand = existsSync(allContributorsPath)
              ? allContributorsPath
              : "npx all-contributors";

            execSync(`${cliCommand} generate`, {
              cwd: projectRoot,
              stdio: "pipe",
            });

            logger.info("All-contributors table generated successfully.");
          } catch (error) {
            logger.error("Failed to generate all-contributors table.");
            logger.error(error);
          }

          // Restore the original config
          writeFileSync(rcPath, JSON.stringify(originalConfig, null, 2));
        } catch (error) {
          logger.error("Error processing all-contributors setup:");
          logger.error(error);
        }
      },
    },
  };
}
