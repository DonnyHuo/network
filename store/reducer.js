const initState = {
  address: "",
  userId: -1,
  inviteContract: "0x28aAec993079403D82d7Ec6A0d8b5bB16317E08b",
  poolManager: "0x6Ea249D3087F64472e689036648416c3FF685FBa",
  reModalOpen: false,
  supplyModel: false,
  withdrawModel: false,
  repayModel:false,
  borrowModel: false,
  snipingModel: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };

    case "CHANGE_USER":
      return {
        ...state,
        userId: action.payload,
      };
    case "CHANGE_REMODAL":
      return {
        ...state,
        reModalOpen: action.payload,
      };
    case "CHANGE_INVITE_CONTRACT":
      return {
        ...state,
        inviteContract: action.payload,
      };
    case "CHANGE_POOL_MANAGER":
      return {
        ...state,
        poolManager: action.payload,
      };
    case 'CHANGE_SUPPLY_MODEL':
      return{
      ...state,
      supplyModel: action.payload,
    }
    case 'CHANGE_WITHDRAW_MODEL':
      return{
      ...state,
      withdrawModel: action.payload,
    }
    case 'CHANGE_REPAY_MODEL':
      return{
      ...state,
      repayModel: action.payload,
    }
    case 'CHANGE_BORROW_MODEL':
      return{
      ...state,
      borrowModel: action.payload,
    }
    case 'CHANGE_SNIPING_MODEL':
      return{
      ...state,
      snipingModel: action.payload,
    }
    
    default:
      return state;
  }
};

export default reducer;
