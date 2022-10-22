export interface QuizObject {
    category : string ,
    correctAnswer : string ,
    difficulty : string
    id : string
    incorrectAnswers : string[]
    question : stirng
    regions : []
    tags : string[]
    type : string
}

export interface userInfoQuiz {
    question : string ,
    userSelectedAnswer : string ,
    correctAnswer : string ,
    answers : string[]
}