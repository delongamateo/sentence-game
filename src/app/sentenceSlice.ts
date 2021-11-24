import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState = {
    questions: [
        {
            id: 1,
            question: "Who?",
            answer: "",
            valid: false
        },
        {
            id: 2,
            question: "What?",
            answer: "",
            valid: false
        },
        {
            id: 3,
            question: "Where?",
            answer: "",
            valid: false
        },
        {
            id: 4,
            question: "When?",
            answer: "",
            valid: false
        }
    ],
    sentence: ""
}

export const sentenceSlice = createSlice({
    name: "sentence",
    initialState,
    reducers: {
        who: (state, action: PayloadAction<string>) => {
            state.questions[0].answer = action.payload
            state.sentence = ""
            if(state.questions[0].answer !== "") {
                state.questions[0].valid = true
            } else if (state.questions[0].answer === "") {
                state.questions[0].valid = false
            }
        },
        what: (state, action: PayloadAction<string>) => {
            state.questions[1].answer = action.payload
            state.sentence = ""
            if(state.questions[1].answer !== "") {
                state.questions[1].valid = true
            } else if (state.questions[1].answer === "") {
                state.questions[1].valid = false
            }
        },
        where: (state, action: PayloadAction<string>) => {
            state.questions[2].answer = action.payload
            state.sentence = ""
            if(state.questions[2].answer !== "") {
                state.questions[2].valid = true
            } else if (state.questions[2].answer === "") {
                state.questions[2].valid = false
            }
        },
        when: (state, action: PayloadAction<string>) => {
            state.questions[3].answer = action.payload
            state.sentence = ""
            if(state.questions[3].answer !== "") {
                state.questions[3].valid = true
            } else if (state.questions[3].answer === "") {
                state.questions[3].valid = false
            }
        },
        makeSentence: (state) => {
            if(state.questions.some(question => question.valid === false)) {
                state.sentence = "Please answer all questions!"
            } else {
                state.sentence = `${state.questions[0].answer}  ${state.questions[1].answer}  ${state.questions[2].answer}  ${state.questions[3].answer}`
            }
            
        },
        
    }

})

export const { who, what, where, when, makeSentence } = sentenceSlice.actions;

export default sentenceSlice.reducer;
