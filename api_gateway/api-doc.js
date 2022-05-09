const apiDoc = {
  swagger: '2.0',
  info: {
    title: 'API Gateway',
    version: '1.0.0'
  },
  definitions: {
    Song: {
      type: 'object',
      required: ["id", "name", "album", "artists", "release_date"],
      properties: {
          id: {
            type: "string"
          },
          name: {
            type: "string"
          },
          album: {
            type: "string"
          },
          artists: {
            type: "array",
            items: {
                type: "string"
            }
          },
          release_date: {
            type: "string"
          }
        }
    },
    World: {
      type: 'object',
      properties: {
        name: {
          description: 'The name of this world.',
          type: 'string'
        }
      },
      required: ['name']
    }
  },
  paths: {}
};

module.exports = apiDoc;