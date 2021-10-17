import axios from "axios";
export const book = {
  state: {},
  actions: {
    async addBook({ commit }, book) {
      try {
        await axios.post("/api/book/add", {
          title: book.title,
          _id: book.id,
          imgPath: book.imgPath,
          user: book.user,
          addedToReadingList: book.addedToReadingList,
          isFinished: book.isFinished,
          author: book.author,
        });
      } catch (err) {
        console.log("error");
        commit("add_book_error", err);
      }
    },
    async getUserReadingList({ commit }, userId) {
      try {
        let userReadingList = await axios.post("/api/book/reading-list", {
          params: { userId },
        });

        return userReadingList;

        // console.log(req);
      } catch (err) {
        console.log("error");
        commit("get_readinglist_error", err);
      }
    },
  },
  mutations: {},
};
