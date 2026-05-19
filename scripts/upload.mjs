import { DefaultArtifactClient } from "@actions/artifact";

const artifact = new DefaultArtifactClient();

(async () => {
  const { id, size } = await artifact.uploadArtifact(
    // name of the artifact
    process.env["ARTIFACT_NAME"],
    // files to include (supports absolute and relative paths)
    [process.env["ARTIFACT_PATH"]],
    {
      compressionLevel: 1,
    },
  );

  console.log(`Created artifact with id: ${id} (bytes: ${size}`);
})();
