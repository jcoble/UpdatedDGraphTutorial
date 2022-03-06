module.exports = {
  client: {
    service: {
      name: "discuss-dev",
      url: "http://localhost:8080/graphql"
    },
    includes: [
      "src/**/operations.graphql",
      "deploy/**/operations.graphql",
      "deploy/**/*.auth.graphql"
    ],
    excludes: ["src/**/*.{ts}", "deploy/**/*.{ts}"]
  }
};
