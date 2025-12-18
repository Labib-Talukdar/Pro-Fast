
const ServiceCard = ({ service }) => {
  const { title, description, icon: Icon } = service;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 ">
      <div className="card-body items-center text-center hover:bg-amber-400">
        <div className="text-primary text-4xl mb-4">
          <Icon />
        </div>

        <h3 className="card-title text-lg font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
