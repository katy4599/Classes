
import input from 'input'

class App {
    constructor(password) {
        this.password = password;
    }   

    async main() {
        const resp = await input.text('What is the password?')
        
        if (resp == 'My Password') {

            console.log('That is correct!')
        } else {

            console.log('Try again')
        }
    }
}

const app = new App('My Password');
app.main();
