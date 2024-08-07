// import {View, Text, Dimensions, StyleSheet} from 'react-native';
// import React from 'react';
// import Carousel from 'react-native-snap-carousel';
// import {CarouselData} from '../data/CarouselData';

// const sliderwidth = Dimensions.get('screen').width;
// const CarouselSlider = () => {
//   const carouselRef = useRef();

//   const renderItem = ({item, index}) => {
//     return (
//       <View style={styles.slide}>
//         <Image source={item.Image} style={styles.imgStyle} />
//       </View>
//     );
//   };

//   return (
//     <View>
//       <CarouselSlider
//         ref={carouselRef}
//         data={CarouselData}
//         renderItem={renderItem}
//         sliderwidth={sliderwidth}
//         itemWidth={500}
//       />

//       <Pagination dotsLength> </Pagination>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   slide: {},
//   title: {},
// });

// export default Carousel;
