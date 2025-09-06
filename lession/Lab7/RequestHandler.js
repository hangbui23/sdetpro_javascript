const Post = require("./Post");

class RequestHandler {

    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async getTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
         let allPost = await this._getAllPosts(userId);
            let targetPost = allPost.find(post => post.userId === userId && post.id === postId);
            if (targetPost) {
                const { userId, id, title, body } = targetPost;
                targetPost = new Post(userId, id, title, body);
                return targetPost;
            }
            return null;            
    }

    async getAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        let posts = [];
        let allPost = await this._getAllPosts(userId);
        for (let post of allPost) {
            const { userId, id, title, body } = post;
            post = new Post(userId, id, title, body);
            posts.push(post);
            //posts.push(new Post(userId, id, title, body));
        }
        return posts;
    }

    async _getAllPosts(userId) {

        let response = await fetch(this._baseUrl + "/posts");
        let userResponse = await response.json();
        return userResponse.filter(post => post.userId === userId);
    }

}

module.exports = RequestHandler;