let readLine = require('readline-sync');

console.log("========Menu=========");
console.log("1. Get post by userId and postId");
console.log("2. Get all posts by userId");
console.log("0. Exit the program");
console.log("=====================");
console.log("Please select the menu: ");

let options = Number(readLine.question("Select the option: "));
let user_id, post_id;
const GET_POST_URL = "https://jsonplaceholder.typicode.com/posts"

if (options === 1) {
    do {
        user_id = Number(readLine.question("Please input user ID: "));
        post_id = Number(readLine.question("Please input post id: "));
    } while (user_id === 0 || post_id === 0);
    //Allow user to input an userid and postId, print out that post content
    fetch(GET_POST_URL).then(getPost)
        .then(findPostByUserIdAndPostId)
        .then(displayPostByUseIdAndPostId);
}
else if (options === 2) {
    user_id = Number(readLine.question("Please input user ID: "));
    //Print all posts for that user
    fetch(GET_POST_URL).then(getPost)
        .then(findPostByUserId)
        .then(displayPostByUserId);
} else if (options === 0) {
    console.log("Exiting the program...");
    process.exit(0);
} else {
    console.log("Invalid option. Please try again.");
    process.exit(1);
}

function getPost(response) {
    return response.json();
}

function displayDetailPostByUseIdAndPostId(post) {
    console.log("=======Post details:==============");
    console.log(`User Id: ${post.userId} \nPost Id: ${post.id} \nTitle: ${post.title} \nBody: ${post.body}`);
    console.log("=======End of Post details========");
}

function findPostByUserIdAndPostId(posts) {
    let foundPost = posts.find(post => post.userId === user_id && post.id === post_id);
    return foundPost;
}

function displayPostByUseIdAndPostId(posts) {
    if (posts) {
        displayDetailPostByUseIdAndPostId(posts);
    }
    else {
        console.log(`No post found for User ID: ${user_id} and Post ID: ${post_id}`);
    }
}

function findPostByUserId(posts) {
    let foundPost = posts.filter(post => post.userId === user_id);
    return foundPost;
}

function displayPostByUserId(posts) {
    for (let post of posts) {
        console.log("=======Post details:==============");
        console.log(`User Id: ${post.userId} \nPost Id: ${post.id} \nTitle: ${post.title} \nBody: ${post.body}`);
        console.log("=======End of Post details========");
    }
}