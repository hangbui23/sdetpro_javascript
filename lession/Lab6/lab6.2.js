let readLine = require('readline-sync');

const GET_POST_URL = "https://jsonplaceholder.typicode.com/posts"

async function Program(){
console.log("========Menu=========");
console.log("1. Get post by userId and postId");
console.log("2. Get all posts by userId");
console.log("0. Exit the program");
console.log("=====================");
console.log("Please select the menu: ");

let options = Number(readLine.question("Select the option: "));
let user_id, post_id;
if (options === 1) {
    do {
        user_id = Number(readLine.question("Please input user ID: "));
        post_id = Number(readLine.question("Please input post id: "));
    } while (user_id === 0 || post_id === 0);
    //Allow user to input an userid and postId, print out that post content
    let posts = await getPost();
    let foundPost = findPostByUserIdAndPostId(posts,user_id, post_id)
    displayPostByUseIdAndPostId(foundPost, user_id, post_id);
}
else if (options === 2) {
    user_id = Number(readLine.question("Please input user ID: "));
    //Print all posts for that user
    let posts = await getPost();
    let foundPost = findPostByUserId(posts, user_id);
    displayPostByUserId(foundPost);
} else if (options === 0) {
    console.log("Exiting the program...");
    process.exit(0);
} else {
    console.log("Invalid option. Please try again.");
    process.exit(1);
}
}

async function getPost() {
    let response = await fetch(GET_POST_URL);
    return await response.json();
}

function displayDetailPostByUseIdAndPostId(post) {
    console.log("=======Post details:==============");
    console.log(`User Id: ${post.userId} \nPost Id: ${post.id} \nTitle: ${post.title} \nBody: ${post.body}`);
    console.log("=======End of Post details========");
}

function findPostByUserIdAndPostId(posts,user_id, post_id) {
    let foundPost = posts.find(post => post.userId === user_id && post.id === post_id);
    return foundPost;
}

function displayPostByUseIdAndPostId(posts, user_id, post_id) {
    if (posts) {
        displayDetailPostByUseIdAndPostId(posts);
    }
    else {
        console.log(`No post found for User ID: ${user_id} and Post ID: ${post_id}`);
    }
}

function findPostByUserId(posts,user_id) {
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

Program();