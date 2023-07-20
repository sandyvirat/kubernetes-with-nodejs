class GetInformation {
    constructor() {
        // hs to be decided
    }
    async execute(httpRequest) {
        if (httpRequest) {
            let {category, title} = httpRequest;
            return {
                status: 200,
                message: `The title of the request is ${title} and category is ${category}`,
                body: category+title
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
module.exports = GetInformation;