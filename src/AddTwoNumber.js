class AddTwoNumbers {
    constructor() {
      // TODO document why this constructor is empty
    }
    async execute(httpRequest) {
        if (httpRequest) {
            let {firstNumber, secondNumber} = httpRequest;
            return {
                status: 200,
                message: `The first number is ${firstNumber} and second number is ${secondNumber}`,
                body: firstNumber+secondNumber
            }
        } else {
            return {
                status: 400,
                message: null,
                body: null
            }
        }
    }
}
module.exports = AddTwoNumbers;