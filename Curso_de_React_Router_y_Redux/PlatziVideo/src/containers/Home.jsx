/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              {myList.map((item) => (
                <CarouselItem key={item.id} {...item} isList />
              ))}
            </Carousel>
          </Categories>
        )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
// Sólo tengo que traer los elementos que voy a utilizar, no necesito traerlos todos.
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
//export default connect(props, actions)(Home);
// Como no tenemos una acción a ejecutar, podemos mandar null
