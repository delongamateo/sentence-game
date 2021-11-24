import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface question {
    id: number, 
    question: string, 
    answer: string, 
    valid: boolean
}

export interface sentenceState {
    questions: question[];
    sentence: string;
    step: number;
  }

const initialState: sentenceState = {
  questions: [
    {
      id: 1,
      question: "Who?",
      answer: "",
      valid: false,
    },
    {
      id: 2,
      question: "What?",
      answer: "",
      valid: false,
    },
    {
      id: 3,
      question: "Where?",
      answer: "",
      valid: false,
    },
    {
      id: 4,
      question: "When?",
      answer: "",
      valid: false,
    },
  ],
  sentence: "",
  step: 0,
};

export const sentenceSlice = createSlice({
  name: "sentence",
  initialState,
  reducers: {
    saveWord: (state, action: PayloadAction<string>) => {
      state.questions[state.step].answer = action.payload;
      state.sentence = "";
      if (state.questions[state.step].answer.trim().length > 0) {
        state.questions[state.step].valid = true;
      } else if (state.questions[state.step].answer.trim().length === 0) {
        state.questions[state.step].valid = false;
      }
    },
    changeStep: (state, action: PayloadAction<string>) => {
      if (action.payload === "next" && state.step < 3) {
        state.step++;
      } else if (action.payload === "back" && state.step > 0) {
        state.step--;
      }
    },
    makeSentence: (state) => {
      if (state.questions.some((question) => question.valid === false)) {
        state.sentence = "Please answer all questions!";
      } else {
        state.sentence = state.questions.map(question => question.answer).toString().replace(/,/g, " ")
      }
    },
  },
});

export const { makeSentence, changeStep, saveWord } = sentenceSlice.actions;

export default sentenceSlice.reducer;
