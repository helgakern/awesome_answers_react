const BASE_URL = `http://localhost:3000/api/v1`
export const Question = {
    index() {
        return fetch(`${BASE_URL}/questions`, {
            credentials: 'include'
        }).then(res => {
            console.log(res);
            return res.json();
        })
    },
    create(params) {
        return fetch(`${BASE_URL}/questions`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    get(id) {
        return fetch(`${BASE_URL}/questions/${id}`, {
            credentials: 'include'
        }).then(res => res.json());
    }
}

export const Session = {
    create(params) {
        // params should be an object with { email: 'some@gmail.com', password: 'supersecret' }
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((res) => {
            return res.json();
        })
    }
    // to use create
    // Session.create({email: '', password: ''}).then(data => { console.log(data)})
}

// shorthand for doing: { Question: Question, Session: Session }
// this works because there are variables called Question & Session
export default {
  Question,
  Session
}