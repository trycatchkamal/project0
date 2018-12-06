
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
  },
  "2a":{
    id: "2a",
    title:"How much did you earn last month?",
    type: "number",
    options: [],
    nextQuestion: ["3"]
  },
  "3":{
    id: "3",
    title:"How long do you wish to sustain, in case you suffer a job loss?",
    type: "number",
    options: [],
    nextQuestion: ["4"]
  },
  "4":{
    id: "4",
    title:"Do you have <<emergency fund = monthly expense x (answer for 3)>> saved somewhere for immediate use?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["5","5"]
  },
  "5":{
    id: "5",
    title:"Do you have a life insurance for yourself?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["5a","6"]
  },
  "5a":{
    id: "5a",
    title:"What kind of life insurance?",
    type: "option",
    options: ["Term insurance","Whole life insurance/ULIP","Don't know"],
    nextQuestion: ["6","6","6"]
  },
  "6":{
    id: "6",
    title:"How many people are completely dependent on your income?",
    type: "number",
    options: [],
    nextQuestion: ["7"]
  },
  "7":{
    id: "7",
    title:"Do any of your dependents have life insurance that you pay from your income?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["8","8"]
  },
  "8":{
    id: "8",
    title:"Do you have a medical insurance for yourself?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["9","9"]
  },
  "9":{
    id: "9",
    title:"Do you have medical insurance for all your dependents?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["10","10"]
  },
  "10":{
    id: "10",
    title:"Do you have a debt repayment schedule?",
    type: "option",
    options: ["Yes","No","No Debts"],
    nextQuestion: ["11","11","11"]
  },
  "11":{
    id: "11",
    title:"Have you been able to invest money somewhere without conflicting your debt repayment schedule (if any)?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["11a","11aa"]
  },
  "11a":{
    id: "11a",
    title:"Do you connect all your investments with life goals?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["11aa","11aa"]
  },
  "11aa":{
    id: "11aa",
    title:"Do you have all your investment parked in a single asset (Shares, Mutual funds, Deposits, Gold, etc)?",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["11b","11b"]
  },
  "11b":{
    id: "11b",
    title:"Do you have any % of your investment in any (negatively correlated assets) of the following ? <Research and add list)",
    type: "option",
    options: ["Yes","No"],
    nextQuestion: ["end"]
  }
}
