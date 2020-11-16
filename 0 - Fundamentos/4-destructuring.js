const person = {
    first: 'José',
    last: 'Campos',
    country: 'Chile',
    links: {
        social: {
            twitter: 'https://twitter.com',
            facebook: 'https://facebook.com',
        },
        web: {
            blog: 'https://google.com'
        }
    }
};

// const first = person.first;
// const last = person.last;

const { first, last } = person;

console.log(first);
console.log(last);

// const twitter = person.links.social.twitter;
// const facebook = person.links.social.facebook;

const { twitter, facebook } = person.links.social;
console.log(twitter, facebook);