var ghpages = require('gh-pages');

ghpages.publish(
    'public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/kiranojhanp/svelte-crud.git',
        user: {
            name: 'Kiran Ojha',
            email: 'kiranojha1226@gmail.com' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)