const RequestHandler = require("./RequestHandler");


lab7();

async function lab7(){
    // Given params
    const userId = 1;
    const postId = 11;
    const BASE_URL = 'https://jsonplaceholder.typicode.com';

    // Create RequestHandler object
    const requestHandler = new RequestHandler(BASE_URL);

    // const post = ...
    const post = await requestHandler.getTargetPost(userId, postId);
    console.log(post);
    
    // const allPost = ...
    // const allPost = await requestHandler.getAllPosts(userId);
    // console.log(allPost);
    
}