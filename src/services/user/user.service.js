import Config from '../config';

export default {
    url: Config.api + '/user',
    index(v) {
        return v.$http.get(this.url);
    },
    store(v, params) {
        let formData = new FormData();
        formData.append('name', params.name);
        formData.append('email', params.email);
        formData.append('password', params.password);

        return v.$http.post(this.url, formData);
    },
    delete(v, id) {
        return v.$http.delete(this.url + '/' + id);
    },
    update(v, id, params) {
        let url = 'name=' + params.name + '&email=' + params.email + '&password=' + params.password;

        return v.$http.patch(this.url + '/' + id, url);
    }
}