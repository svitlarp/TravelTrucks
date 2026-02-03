// export default function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
// 	  <img src={props.image} alt="Tacos With Lime" width="340"/>
//       <p>Price: {props.price} credits</p>
//     </div>
//   );
// };

export default function Product({name, image, price="0.00"}) {
  return (
    <div>
      <h2>{name}</h2>
	  <img src={image} alt="Tacos With Lime" width="340"/>
      <p>Price: {price} credits</p>
      {/* {price > 40 && (<p>High price</p>)} */}
      {price > 40 
        ? <p>Price {price} is high</p>
        : <p>Price {price} is resonable</p>
      }
    </div>
  );
};