
var questions=[
  {
    id: "1",
    title:"Do you know how much you spend on monthly basis?",
    type: "option",
    options: [{key:"Yes"},
    {key:"No"}],
    nextQuestion: ["1a","2"]
  },
  {
    id: "1a",
    title:"How much did you spend last month?",
    type: "number",
    options: null,
    nextQuestion: ["2"]
  },
  {
    id: "2",
    title:"Do you know how much you roughly earn on monthly basis from all income sources?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["2a","3"]
  }
]
