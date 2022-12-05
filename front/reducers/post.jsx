//게시물
export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "이규화",
      },
      content: "test1",
      Images: [
        {
          src: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDhfMTY2/MDAxNTg2MzI4MjMxMDU1.H7MqVj5K4vIoTrpk3zQ4zGKqFrg56RJyoVKHl0WeN2Ag.W3q_Cj7snD_j1MyIGmirukBFTzy3jGWrBZYHFxAVvOsg.GIF.superstarmark/%EC%82%AC%EC%A7%84%ED%8E%B8%EC%A7%91.gif?type=w2",
        },
        {
          src: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDhfMTY2/MDAxNTg2MzI4MjMxMDU1.H7MqVj5K4vIoTrpk3zQ4zGKqFrg56RJyoVKHl0WeN2Ag.W3q_Cj7snD_j1MyIGmirukBFTzy3jGWrBZYHFxAVvOsg.GIF.superstarmark/%EC%82%AC%EC%A7%84%ED%8E%B8%EC%A7%91.gif?type=w2",
        },
        {
          src: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDhfMTY2/MDAxNTg2MzI4MjMxMDU1.H7MqVj5K4vIoTrpk3zQ4zGKqFrg56RJyoVKHl0WeN2Ag.W3q_Cj7snD_j1MyIGmirukBFTzy3jGWrBZYHFxAVvOsg.GIF.superstarmark/%EC%82%AC%EC%A7%84%ED%8E%B8%EC%A7%91.gif?type=w2",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "babo",
          },
          content: "testcontent1",
        },
        {
          User: {
            nickname: "bab",
          },
          content: "testcontent2",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 1,
  content: "dummy",
  User: {
    id: 1,
    nickname: "lgh",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
