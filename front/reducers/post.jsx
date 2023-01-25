import shortId from "shortid";

//게시물
export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "이규화",
      },
      content: "test1 #이규화 #hashtag",
      Images: [
        {
          id: shortId.generate(),
          src: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDhfMTY2/MDAxNTg2MzI4MjMxMDU1.H7MqVj5K4vIoTrpk3zQ4zGKqFrg56RJyoVKHl0WeN2Ag.W3q_Cj7snD_j1MyIGmirukBFTzy3jGWrBZYHFxAVvOsg.GIF.superstarmark/%EC%82%AC%EC%A7%84%ED%8E%B8%EC%A7%91.gif?type=w2",
        },
        {
          id: shortId.generate(),
          src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbevEvg%2FbtqZZyXD4yE%2FVDFadQymoi4ad1fB23DWWk%2Fimg.png",
        },
        {
          id: shortId.generate(),
          src: "data:image/png;base64,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",
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          User: {
            nickname: "babo",
          },
          content: "testcontent1",
        },
        {
          id: shortId.generate(),
          User: {
            nickname: "bab",
          },
          content: "testcontent2",
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommnetLoading: false,
  addCommnetDone: false,
  addCommnetError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILED";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILED = "REMOVE_POST_FAILED";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILED = "ADD_COMMENT_FAILED";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "lgh",
  },
  Images: [],
  Comments: [],
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});
const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "lgh",
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostDone: true,
        addPostLoading: false,
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        mainPosts: state.mainPosts.filter((v) => v.id === action.data),
        removePostDone: true,
        removePostLoading: false,
      };
    case REMOVE_POST_FAILED:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex(
        (v) => v.id === action.data.postId
      );
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILED:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
