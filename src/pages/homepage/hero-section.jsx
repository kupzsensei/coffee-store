export default function HeroSection() {
  return (
    <section className="flex justify-center w-full bg-orange-900">
      <div className="flex flex-col gap-3 w-full max-w-[1280px]">
        <div className="flex">
          <h1 className="text-white font-medium text-2xl text-left">
            Shop for
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-3 text-white font-medium">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/CoffeeSearchImage.jpg?v=1574271653"
              alt="img"
              className="w-[250px] h-[250px] rounded-t-lg rounded-t-lg"
            />
            <span className="flex gap-5 justify-center">
              <h1>Unroasted Coffee</h1>
              {"->"}
            </span>
          </div>
          <div className="flex flex-col gap-3 text-white font-medium">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/tea.jpg?v=1678917646&width=535"
              alt="img"
              className="w-[250px] h-[250px] rounded-t-lg"
            />
            <span className="flex gap-5 justify-center">
              <h1>Tea</h1>
              {"->"}
            </span>
          </div>
          <div className="flex flex-col gap-3 text-white font-medium">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/GiftCard23.jpg?v=1700810577&width=535"
              alt="img"
              className="w-[250px] h-[250px] rounded-t-lg"
            />
            <span className="flex gap-5 justify-center">
              <h1>Gift Card</h1>
              {"->"}
            </span>
          </div>
          <div className="flex flex-col gap-3 text-white font-medium">
            <img
              src="https://coffeeproject.com/cdn/shop/collections/Roasters.webp?v=1713995140&width=535"
              alt="img"
              className="w-[250px] h-[250px] rounded-t-lg"
            />
            <span className="flex gap-5 justify-center">
              <h1>Roasters & Parts</h1>
              {"->"}
            </span>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </section>
  );
}
