
export const questions={
  "firstQuestion":{
    id: "1",
    title:"Do you know how much you spend on monthly basis?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["1a","2"]
  },
  "1a":  {
    id: "1a",
    title:"How much did you spend last month?",
    type: "number",
    options: [],
    nextQuestion: ["2"]
  },
  "2":{
    id: "2",
    title:"Do you know how much you roughly earn on monthly basis from all income sources?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["2a","3"]
  }
}
