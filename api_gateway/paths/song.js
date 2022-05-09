module.exports = function(worldsService) {
    let operations = {
      POST
    };
  
    function POST(req, res, next) {
        console.log(req.body)
        res.status(200).json({ message: "sve kul"});
    }

    POST.apiDoc = {
      operationId: 'postSong',
      consumes: ['application/json'],
      parameters: [
        {
          in: 'body',
          name: 'song',
          required: true,
          schema:{
            $ref: '#/definitions/Song'
          }
        }
      ],
      responses: {
        200: {
          description: 'A list of worlds that match the requested name.',
          schema: {
            type: 'string'
          }
        },
        default: {
          description: 'An error occurred',
          schema: {
            additionalProperties: true
          }
        }
      }
    };
  
    return operations;
}