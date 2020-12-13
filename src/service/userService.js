export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async user() {
        return await fetch(this.url)
            .then(value => value.json());
    }

    async userOne(id) {
        return await fetch(this.url + '/' + id)
            .then(value => value.json());
    }

}