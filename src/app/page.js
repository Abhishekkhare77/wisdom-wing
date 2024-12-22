"use client";
import { CopilotChat, CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useCopilotReadable } from "@copilotkit/react-core";
import { useState } from "react";
import { useCopilotAction } from "@copilotkit/react-core";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import "@copilotkit/react-textarea/styles.css";
import Quiz from "@/components/Quiz";

//lets say you learn a topic and you want to check your understanding of the topic with the help of a quiz

export default function Home() {
  const [text, setText] = useState("");

  useCopilotReadable({
    description: "This is a text area",
    value: text,
  });

  useCopilotAction({
    name: "Add text",
    description: "Add text to the text area",
    parameters: [
      {
        name: "text",
        description: "The text to add",
        type: "string",
        required: true,
      },
    ],
    handler: ({ text }) => {
      setText(text);
    },
  });

  return (
    <main className="max-w-7xl mx-auto">
      <CopilotPopup />
      <div className="flex items-center justify-center gap-3 ">
        <div className="flex flex-col h-full w-full">
          <CopilotTextarea
            className="custom-textarea-class border py-2 px-2 mb-3 rounded-md"
            value={text}
            onValueChange={(value) => setText(value)}
            placeholder="Write the topic you want to learn about."
            autosuggestionsConfig={{
              textareaPurpose: "Helps to give formal replay to any message .",
              chatApiConfigs: {
                suggestionsApiConfig: {
                  maxTokens: 20,
                  stop: [".", "?", "!"],
                },
              },
            }}
          />
          <div className="overflow-y-auto h-[calc(100vh-10rem)] w-full">
            <Quiz />
          </div>
        </div>
        <CopilotChat
          className="w-1/2 h-[calc(100vh-5rem)] border-2 rounded-md"
          labels={{
            title: "Your Assistant",
            initial:
              "Ask me specific part about the concepts to learn further about it to answer the quiz",
          }}
        />
      </div>
    </main>
  );
}
