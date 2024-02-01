export default function extractActions(json) {
    const result = {
      name: json.name,
      actions: []
    };
  
    if (json.actions) {
      json.actions.forEach(action => {
        const extractedAction = {
          name: action.name,
          title: action.title,
        //   type: action.type,
        };
  
        if (action.blocks) {
          extractedAction.blocks = []
          action.blocks.forEach(block => {
            const extractedBlock = {
              name: block.name,
              title: block.title,
            //   type: block.type
            };
  
            if (block.actions) {
              const extractedActions = extractActions({ actions: block.actions });
              extractedBlock.actions = extractedActions.actions
              extractedBlock.here = true
            }
            
             extractedAction.blocks.push(extractedBlock);
            
          });
        }
  
        if (action.actions) {
          extractedAction.actions = extractActions(action);
        }
  
        result.actions.push(extractedAction);
      });
    }
    return result;
  }
  
