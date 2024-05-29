function getUser(userid, apikey) {
    fetch(`http://localhost:3000/api/users/${userid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            apikey: apikey
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 200) {
            console.log(data);
        } else {
            console.log(data.message);
        }
    })
}

module.exports = {
    getUser
};
