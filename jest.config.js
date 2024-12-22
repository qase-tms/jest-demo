module.exports = {
  reporters: [
    "default",
    [
      "jest-qase-reporter",
      {
        /*
        // You can define the reporter options here, or in a separate `qase.config.json` file.
        mode: 'testops',
        debug: false,
        testops: {
          api: {
            token: 'api_key',
          },
          project: 'project_code',
          uploadAttachments: true,
          run: {
          //  id: 1,
            title: "Your test run title",
            description: "Automated Test run by Jest",
            complete: true,
          },
          environment: 'prod',
        },
      */
      },
    ],
  ],
};
