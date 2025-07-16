class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404; // HTTP status code for Not Found
  }
}   

module.exports = CustomNotFoundError;