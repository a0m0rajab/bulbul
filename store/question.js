export const state = () => ({
    questionNo: 0,
})

export const mutations = {
    nextQuestion(state,) {
        state.questionNo++;
    },
    reset(state,) {
        state.questionNo = 0;
    },
}