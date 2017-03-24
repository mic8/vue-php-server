import Config from '../config';

export default {
    url: Config.api + '/user',
    fetch(v) {
        return v.$http.get(this.url);
    }
}