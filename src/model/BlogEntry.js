class BlogEntry {
    constructor(title, content, author, date, tags) {
        this._title = title;
        this._content = content;
        this._author = author;
        this._date = date;
        this._tags = tags;
    }

    get title() {
        return this._title;
    }

    get content() {
        return this._content;
    }

    get author() {
        return this._author;
    }

    get date() {
        return this._date;
    }

    get tags() {
        return this._tags;
    }
}

export default BlogEntry;