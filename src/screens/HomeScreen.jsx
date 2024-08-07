import {View} from 'react-native';
import React from 'react';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';
import Category from '../components/Category';
import Carousel from '../components/Carousel';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <SubHeader />
      <Category />
      {/* <Carousel /> */}
    </View>
  );
};

export default HomeScreen;
