class Post {
    
    constructor(userId, id, title, body) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    get userId() {
        return this._userId;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }
    
    get body() {
        return this._body;
    }

}

module.exports = Post;