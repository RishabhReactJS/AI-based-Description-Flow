export const getCreateWFPrompt = (actions, story) => `
Create a json file that represents a flow diagram of the following story, using the actions provided in the list:
${actions.map((action) => `${action}`)
.join(
  ","
)} }
Each step in the story should be represented as an object in the "Nodes" array, with the following graphql schema:

type Nodes {
   id: String,
    type: String,
    data: { label: String },
    position: { x: number, y: number },
}


Story is:
${story}

Please use only the actions provided in the list and ensure that the "datas' label" field in each object should be a action from the shared list, "id" is a unique number passed as string, position defines the blocks positioning where x can be consistent 0, y can start from 25 and incremented by 100 and "type" can be a type of node like input, output or can be empty.

With above data share data for connecting one node to another as array of object "Connecter".
type Connecter { id: String, source: String, target: String },
`;

export const summariesWFPrompt = (extractedJSON) => `Act as a process designer and technical writer. You need to understand the shared process json data and summaries the flow in 100 words. Don't include word like "shared process JSON data represents" instade start like "The flow represents"
    JSON: ${JSON.stringify(extractedJSON)}
`;