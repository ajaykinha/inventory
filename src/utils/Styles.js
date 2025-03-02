import { StyleSheet } from "react-native";
import { color, fontSize, matrix } from "./Constant";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.smokeWhite,
  },



  //Popup
  popupContainer: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: color.primary,
    width: matrix.screenWidth,
    borderTopLeftRadius: matrix.responseWidth(5),
    borderTopRightRadius: matrix.responseWidth(5),
  },



  inputView: {
    flexDirection: 'row',
    marginHorizontal: matrix.responseWidth(3),
    paddingHorizontal: matrix.responseWidth(1),
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: matrix.responseHeight(2),
    borderColor: color.primary,
  },
  input: {
    height: matrix.responseWidth(12),
    paddingHorizontal: '2%',
    color: color.primary,
    fontSize: fontSize.font18,
    flex: 1,
  },
  mainBtn: {
    flexDirection: "row",
    backgroundColor: color.primary,
    marginHorizontal: "3%",
    marginVertical: matrix.responseWidth(6),
    alignItems: "center",
    justifyContent: "center",
    height: matrix.responseWidth(12),
    borderRadius: 6,
  },
  btnText: {
    fontSize: fontSize.font16,
    marginHorizontal: '5%',
    color: color.white,
    fontWeight: '500',
  },

  //Loader
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: matrix.responseWidth,
  },



  //Empty List
  emptyListView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: matrix.responseWidth(35),
  },
  noDataText: {
    color: color.primary,
    fontSize: fontSize.font18,
    textAlign: 'center',
    fontWeight: '600',
  },

  //Header
  header: {
    flexDirection: 'row',
    height: matrix.responseWidth(14),
    backgroundColor: color.primary,
  },
  leftHeader: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  centerHeader: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  rightHeader: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: fontSize.font20,
    fontWeight: "700",
    color: color.white,
  },
  leftIcon: {
    height: matrix.responseWidth(8),
    width: matrix.responseWidth(8),
    alignSelf: "flex-start",
    marginLeft: matrix.responseWidth(2),
  },
  rightIcon: {
    height: matrix.responseWidth(8),
    width: matrix.responseWidth(8),
    alignSelf: "flex-end",
    marginRight: matrix.responseWidth(2),
  },



  //Product List
  productListCard: {
    flexDirection: 'row',
    marginHorizontal: matrix.responseWidth(2),
    paddingVertical: matrix.responseWidth(3),
    borderBottomWidth: 0.8,
    borderColor: color.grayColor,
    alignItems: "center",
  },
  subCard: {
    flex: 1,
  },
  username: {
    fontSize: fontSize.font16,
    fontWeight: "700",
    color: color.lightBlack,
  },
  price: {
    fontSize: fontSize.font14,
    color: color.grayColor,
  },
  closeIcon: {
    height: matrix.responseWidth(8),
    width: matrix.responseWidth(8),
    marginRight: matrix.responseWidth(2),
    alignSelf: "flex-end"
  },

});

export default styles;
