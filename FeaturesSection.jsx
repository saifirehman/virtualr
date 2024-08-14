import { features } from "../constants/";

const FeaturesSection = () => {
  console.log(features); // For debugging purposes to check data import

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 flex justify-center items-center space-x-2">
          <span>Easily Build</span>
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex items-center space-x-4"
          >
            <div className="text-4xl text-orange-500">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-800">
                {feature.text}
              </h3>
              <p className="text-neutral-600 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
