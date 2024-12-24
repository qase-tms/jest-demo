module.exports = {
  reporters: [
    "default",
    [
      "jest-qase-reporter",
      {

        // You can define the reporter options here, or in a separate `qase.config.json` file.
        mode: 'testops',
        debug: false,
        testops: {
          api: {
            token: '',
          },
          project: '',
          uploadAttachments: true,
          run: {
          //  id: 1,
            title: "Test Test run from Jest ",
            description: "Automated Test run by Jest",
            complete: true,
          },
          environment: 'prod',
        },

      },
    ],
  ],
};
