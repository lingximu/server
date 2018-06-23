import {
    find,
    filter
} from 'lodash';

// example data
const authors = [{
        id: 1,
        firstName: 'Tom',
        lastName: 'Coleman'
    },
    {
        id: 2,
        firstName: 'Sashko',
        lastName: 'Stubailo'
    },
    {
        id: 3,
        firstName: 'Mikhail',
        lastName: 'Novikov'
    },
];

const posts = [{
        id: 1,
        authorId: 1,
        title: 'Introduction to GraphQL',
        votes: 2
    },
    {
        id: 2,
        authorId: 2,
        title: 'Welcome to Meteor',
        votes: 3
    },
    {
        id: 3,
        authorId: 2,
        title: 'Advanced GraphQL',
        votes: 1
    },
    {
        id: 4,
        authorId: 3,
        title: 'Launchpad is Cool',
        votes: 7
    },
];

const data_fruits = [{
        "id": 1,
        "name": '那么大西瓜',
        "price": 2.0,
        "image": 'http://img.lingximu.com/rn/a11.png',
        "count": 100,
        "category": "瓜果",
    },
    {
        "id": 2,
        "name": '营养木瓜',
        "price": 3.0,
        "image": 'http://img.lingximu.com/rn/a7.png',
        "count": 100,
        "category": "瓜果",
    },
    {
        "id": 3,
        "name": '美味哈密瓜',
        "price": 2.5,
        "image": 'http://img.lingximu.com/rn/a2.png',
        "count": 100,
        "category": "瓜果",
    },
    {
        "id": 4,
        "name": '大柚子',
        "price": 2.0,
        "image": 'http://img.lingximu.com/rn/a13.png',
        "count": 100,
        "category": "橘果",
    }, {
        "id": 5,
        "name": '小橘子',
        "price": 5.0,
        "image": 'http://img.lingximu.com/rn/a4.png',
        "count": 100,
        "category": "橘果",
    }, {
        "id": 6,
        "name": '酸溜溜柠檬',
        "price": 3.0,
        "image": 'http://img.lingximu.com/rn/a8.png',
        "count": 100,
        "category": "橘果",
    },
    {
        "id": 7,
        "name": '红苹果',
        "price": 5.0,
        "image": 'http://img.lingximu.com/rn/a9.png',
        "count": 100,
        "category": "仁果",
    }, {
        "id": 8,
        "name": '香蕉',
        "price": 5.0,
        "image": 'http://img.lingximu.com/rn/a12.png',
        "count": 100,
        "category": "仁果",
    }
]


const resolvers = {
    Query: {
        posts: () => posts,
        author: (_, {
            id
        }) => {
            return find(authors, {
                id
            })
        },
        fruits: () => {
            return data_fruits;
        },
        fruit: (_,{id})=>{
            return data_fruits.find(d=>d.id===id)
        }
    },

    Mutation: {
        upvotePost: (_, {
            postId
        }) => {
            const post = find(posts, {
                id: postId
            });
            if (!post) {
                throw new Error(`Couldn't find post with id ${postId}`);
            }
            post.votes += 1;
            return post;
        },
    },

    Author: {
        posts: author => {
            return filter(posts, {
                authorId: author.id
            })
        },
    },

    Post: {
        author: post => {
            return find(authors, {
                id: post.authorId
            })
        },
    },
};

export default resolvers;