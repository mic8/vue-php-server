export default {
    map(model, data) {
        let responses = [];

        for(let i = 0; i < data.length; i++) {
            let raw = data[i];
            let response = {};

            for(let key in model) {
                response[key] = raw[key];
            }

            responses.push(response);
        }

        return responses;
    }
}