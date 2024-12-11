export const ProductCard = ({ productData }) => {
  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-lg">
      <img src={productData.img} alt="" className="w-[200px] h-[200px]" />
      <h1>{productData.name}</h1>
      <h1>{productData.price}</h1>
      <div className="w-full flex items-center justify-between border border-black p-1 rounded-xl">
        <button>-</button>
        <input
          type="text"
          className="w-[100px] bg-transparent text-center"
          value={0}
        />
        <button>+</button>
      </div>
    </div>
  );
};

export default function CategorySection({ data }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-medium text-2xl text-orange-800">{data.category}</h1>
      <p className="text-orange-800/80">{data.description}</p>
      <div className="flex gap-5 ">
        {data.products.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg w-max mx-auto">
        View All
      </button>
    </div>
  );
}
