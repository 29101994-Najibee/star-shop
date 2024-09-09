import { IProduct } from "../../types/server"

type ProductItemProps = IProduct

function ProductItem({ title, price, description, image }: ProductItemProps) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-50 object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-xl font-bold text-green-600">{price} ¢</span>
        </div>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>
      <div className="bg-gray-100 p-2 text-center">
        <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-4">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem

