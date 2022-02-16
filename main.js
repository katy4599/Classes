
import input from 'input'

class App {
    constructor(password) {
        this.password = password;
    }   

    async main() {
        let resp;

        while (resp != this.password) {
            resp = await input.text('What is the password?')
        } if (resp = 'this.password') {
            console.log('That is correct!')
        } else {

            console.log('Try again')
            }
    }
}

const app = new App('My Password');
app.main();
