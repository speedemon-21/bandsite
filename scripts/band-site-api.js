
class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.showsApiUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=<${this.apiKey}> `; 
    this.commentsApiUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=<${this.apiKey}> `; 
  }

  async postComment(comment) {
    try {
        if (!comment.name || !comment.comment) {
            throw new Error("Name and comment are required.");
          }
      const response = await axios.post(this.commentsApiUrl, comment);
      return response.data;
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error;
    }
  }

  async getComments() {
    try {
      const response = await axios.get(this.commentsApiUrl);
      let comments = response.data;
      // Sort comments from newest to oldest based on timestamp
      comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      return comments;
    } catch (error) {
      console.error('Error getting comments:', error);
      throw error;
    }
  }

  async getShows() {
    try {
      const response = await axios.get(this.showsApiUrl);
      const showsData = response.data;
      return showsData;
    } catch (error) {
      console.error('Error getting shows:', error);
      throw error;
    }
  }
}



    export default BandSiteApi;
      