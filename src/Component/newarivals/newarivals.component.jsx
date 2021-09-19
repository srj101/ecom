import React from "react";
import "./newArivals.css";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { Skeleton } from "antd";
import $ from "jquery";

const NEW_ARIVALS = gql`
  query {
    categories {
      catimage
      id
    }
  }
`;

const NewArivals = () => {
  const { loading, error, data } = useQuery(NEW_ARIVALS);

  if (error) {
    return error.message;
  }

  if (loading) {
    return (
      <div class="gallery">
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
        <div className="grid-item">
          <Skeleton active />
        </div>
      </div>
    );
  }

  return (
    // <div class="grid-arivals">
    //   {data.categories
    //     .map((images) => images.catimage)
    //     .map((image) => (
    //       <Link
    //         key={image}
    //         className="product-grid-home"
    //         to={`/category/${data.id}`}
    //       >
    //         <div className="background-image">
    //           <img src={image} alt={data.name} />
    //         </div>
    //       </Link>
    //     ))}
    // </div>

    <OwlCarousel className="owl-theme" loop margin={10} nav>
      <div class="item">
        <h4>1</h4>
      </div>
      <div class="item">
        <h4>2</h4>
      </div>
      <div class="item">
        <h4>3</h4>
      </div>
      <div class="item">
        <h4>4</h4>
      </div>
      <div class="item">
        <h4>5</h4>
      </div>
      <div class="item">
        <h4>6</h4>
      </div>
      <div class="item">
        <h4>7</h4>
      </div>
      <div class="item">
        <h4>8</h4>
      </div>
      <div class="item">
        <h4>9</h4>
      </div>
      <div class="item">
        <h4>10</h4>
      </div>
      <div class="item">
        <h4>11</h4>
      </div>
      <div class="item">
        <h4>12</h4>
      </div>
    </OwlCarousel>
  );
};

export default NewArivals;
