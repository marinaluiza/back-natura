import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333, () => {
    console.log('server started on port 3333!');
});

app.get('/users/:username', (request, response) => {
    const { username } = request.params;
    
    axios.get(`https://api.github.com/users/${username}/repos`).then(result => {
        return response.json(result.data);
    }).catch(error => {
        console.error(error);
    });
    
});

app.put('/starred/:owner/:repo', (request, response) => {
    const { owner, repo } = request.params;
    const { auth } = request.body;
    
    axios.put(`https://api.github.com/user/starred/${owner}/${repo}`, {}, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `Basic ${auth}`
          }
    }).then(() => {
        return response.status(204).send()
    }).catch(error => {
        console.error(error);
    });
    
});


