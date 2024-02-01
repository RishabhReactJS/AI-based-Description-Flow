import "./Story.css";
import { getWFFromText, getWFSummary } from "../../Utils/GPT";
import { useRef, useState } from "react";
import Flow from "../Flow/Flow";

let actions = [
  "slice",
  "find string",
  "sleep",
  "Send Email",
  "Connect AWS server",
  "HTTP Request",
];

function Story({ summaries }) {
  const story = useRef();
  const [workflowJSON, setWorkflowJSON] = useState({});
  const [flowSummary, setFlowSummary] = useState();

  const generateSummary = async () => {
    const summary = await getWFSummary(story.current.value);
    setFlowSummary(summary);
  };

  const generateWorkflow = async () => {
    const workflowJSON = await getWFFromText(actions, story.current.value);
    setWorkflowJSON(workflowJSON);
  };

  return (
    <div className="Story-container">
      <textarea
        placeholder={
          summaries ? "Your JSON will come here" : "Your story will come here"
        }
        ref={story}
        className="textarea_container story_box"
      />
      <button
        className="summarie_btn"
        onClick={summaries ? generateSummary : generateWorkflow}
      >
        {summaries ? "Summaries" : "Generate Workflow"}
      </button>
      {summaries ? (
        <textarea
          className="textarea_container summary_box"
          readOnly={true}
          value={flowSummary}
        />
      ) : (
        <div className="textarea_container">
          <Flow nodes={workflowJSON} />
        </div>
      )}
    </div>
  );
}

export default Story;
