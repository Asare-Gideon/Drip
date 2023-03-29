import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../app/reduxHooks/hooks";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import {
  addToCart,
  decrementQuantityAndDelete,
} from "../features/cartSlice/cartSlice";

interface itemProp {
  image: ImageSourcePropType;
  id: string;
  text: string;
  title: string;
  price: string;
  navigation: any;
  ceilingPrice: number;
  totalItem: number;
  itemLeft: number;
  discount: number;
  sellingPrice: number;
}

const Items = ({
  image,
  text,
  title,
  price,
  navigation,
  id,
  ceilingPrice,
  totalItem,
  itemLeft,
  discount,
  sellingPrice,
}: itemProp) => {
  const cartData = useAppSelector((state) => state.cartList.cart);
  const item = cartData.find((item) => item.id === id);
  const [textUpdate, setTextUpdate] = useState<string>("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const dispatch = useAppDispatch();

  const payload = {
    id,
    image,
    title,
    price,
    ceilingPrice,
    totalItem,
    itemLeft,
    discount,
    sellingPrice,
  };

  useEffect(() => {
    if (title.length > 23) {
      const newTitle = title.substr(0, 23).concat("...");
      setTitleUpdate(newTitle);
    } else {
      setTitleUpdate(title);
    }
    if (text.length > 35) {
      const newText = text.substr(0, 35).concat("...");
      setTextUpdate(newText);
    } else {
      setTextUpdate(text);
    }
  }, [title, text]);

  const handleNav = () => {
    navigation.navigate("ItemDetail", { id: id });
  };

  const handleItemIncrement = () => {
    dispatch(addToCart(payload));
  };
  const handleItemDecrement = () => {
    dispatch(decrementQuantityAndDelete(payload.id));
  };

  return (
    <TouchableOpacity
      onPress={handleNav}
      style={{
        backgroundColor: Colors.white,
        marginTop: 7,
        width: Sizes.width * 0.89,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 7,
        height: 125,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        padding: 8,
      }}
    >
      <View
        style={{
          width: 110,
          height: "100%",
          backgroundColor: Colors.lightGray2,
          borderRadius: 8,
        }}
      >
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 5,
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 8,
          width: "50%",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            ...Fonts.body3,
            fontSize: 15,
            fontWeight: "700",
            color: Colors.darkgray,
          }}
        >
          {titleUpdate}
        </Text>
        <Text
          style={{
            ...Fonts.body4,
            color: Colors.deepDarkGray,
            fontSize: 14,
          }}
        >
          Remaining items
        </Text>
        <Text
          style={{
            color: Colors.secondary,
            ...Fonts.body4,
            fontWeight: "700",
          }}
        >
          {itemLeft} out of {totalItem}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...Fonts.body3,
              fontSize: 16,
              fontWeight: "700",
              color: Colors.darkgray,
            }}
          >
            GH¢
          </Text>
          <Text
            style={{
              ...Fonts.body3,
              fontSize: 16,
              fontWeight: "800",
              color: Colors.primary,
              marginLeft: 8,
            }}
          >
            {price}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleItemIncrement}
        style={{
          backgroundColor: Colors.primary,
          padding: 3,
          height: 35,
          width: 35,
          justifyContent: "center",
          alignItems: "center",
          elevation: 3,
          position: "absolute",
          right: 0,
          bottom: 0,
          borderBottomRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Entypo name="plus" size={20} color={Colors.white} />
      </TouchableOpacity>
      {item != undefined && (
        <Animatable.View
          style={{
            position: "absolute",
            right: 0,
            top: 0,
          }}
        >
          <TouchableOpacity
            onPress={handleItemDecrement}
            style={{
              backgroundColor: Colors.deepDarkGray,
              padding: 3,
              height: 35,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
              elevation: 3,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Entypo name="minus" size={20} color={Colors.white} />
          </TouchableOpacity>
        </Animatable.View>
      )}
      {item != undefined ? (
        <Animatable.Text
          ref={(el) => {
            if (el) {
              (el as any).bounceIn(400);
            }
          }}
          style={{
            position: "absolute",
            backgroundColor: Colors.secondary,
            color: Colors.white,
            ...Fonts.body4,
            fontWeight: "700",
            height: 30,
            width: 30,
            textAlign: "center",
            fontSize: 15,
            paddingTop: 3,
            borderRadius: 5,
          }}
        >
          {item.quantity}
        </Animatable.Text>
      ) : null}
    </TouchableOpacity>
  );
};

// const firstItem = () => (
// <TouchableOpacity
//     style={{
//       backgroundColor: Colors.white,
//       width: 170,
//       marginTop: 15,
//       borderRadius: 10,
//       elevation: 4,
//       marginBottom: 15,
//       paddingTop: 8,
//       height: 210,
//       marginLeft: 10,
//       marginRight: 10,
//     }}
//   >
//     <View
//       style={{
//         width: 110,
//         height: 100,
//         alignSelf: "center",
//       }}
//     >
//       <Image
//         source={image}
//         style={{
//           width: "100%",
//           height: "100%",
//           borderRadius: 5,
//           resizeMode: "contain",
//         }}
//       />
//     </View>
//     <View
//       style={{
//         marginTop: 5,
//       }}
//     >
//       <View>
//         <Text
//           style={{
//             ...Fonts.h3,
//             paddingLeft: 5,
//             paddingTop: 2,
//             color: Colors.darkgray,
//             fontSize: 17,
//           }}
//         >
//           {titleUpdate}
//         </Text>
//         <Text
//           style={{
//             ...Fonts.body4,
//             paddingLeft: 5,
//             color: Colors.deepDarkGray,
//             lineHeight: 16,
//             paddingTop: 5,
//             fontSize: 14,
//           }}
//         >
//           {textUpdate}
//         </Text>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           padding: 2,
//           paddingLeft: 5,
//           paddingRight: 5,
//           paddingTop: 2,
//           alignItems: "center",
//           paddingBottom: 10,
//         }}
//       >
//         <Text
//           style={{
//             ...Fonts.h3,
//             fontSize: 16,
//             color: Colors.deepDarkGray,
//           }}
//         >
//           GH₵ {price}
//         </Text>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           {like && (
//             <View>
//               {loved ? (
//                 <TouchableOpacity
//                   onPress={handleLike}
//                   style={{
//                     paddingTop: 4,
//                     paddingRight: 6,
//                   }}
//                 >
//                   <AntDesign name="heart" color="red" size={17} />
//                 </TouchableOpacity>
//               ) : (
//                 <TouchableOpacity
//                   onPress={handleLike}
//                   style={{
//                     paddingTop: 4,
//                     paddingRight: 6,
//                   }}
//                 >
//                   <AntDesign name="hearto" color={Colors.primary} size={17} />
//                 </TouchableOpacity>
//               )}
//             </View>
//           )}
//         </View>
//       </View>
//     </View>
//     <View
//       style={{
//         position: "absolute",
//         backgroundColor: Colors.deepDarkGray,
//         padding: 3,
//         justifyContent: "center",
//         alignItems: "center",
//         width: 75,
//         borderBottomRightRadius: 30,
//         borderTopLeftRadius: 30,
//         top: -17,
//         elevation: 4,
//       }}
//     >
//       <Text
//         style={{
//           ...Fonts.body4,
//           color: Colors.white,
//           fontWeight: "700",
//           lineHeight: 15,
//           fontSize: 12,
//         }}
//       >
//         40 out
//       </Text>
//       <Text
//         style={{
//           ...Fonts.body4,
//           color: Colors.white,
//           fontWeight: "700",
//           lineHeight: 15,
//           fontSize: 12,
//         }}
//       >
//         of 40
//       </Text>
//     </View>
//     <TouchableOpacity
//       style={{
//         backgroundColor: Colors.primary,
//         padding: 3,
//         height: 40,
//         width: 40,
//         justifyContent: "center",
//         alignItems: "center",
//         elevation: 3,
//         position: "absolute",
//         right: 0,
//         bottom: 0,
//         borderBottomRightRadius: 10,
//         borderTopLeftRadius: 10,
//       }}
//     >
//       <Entypo name="plus" size={20} color={Colors.white} />
//     </TouchableOpacity>
//   </TouchableOpacity>
// )

export default Items;
