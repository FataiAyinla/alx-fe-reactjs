export default function UserProfile() {
  return (
    <div className="max-w-xs md:max-w-sm mx-auto bg-gray-100 my-20 rounded-lg shadow-lg sm:p-4 md:p-8 transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="flex flex-col items-center">
        <img
          src="/path/to/profile.jpg"
          alt="User profile"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h2 className="mt-4 my-4 text-lg sm:text-lg md:text-xl font-semibold text-blue-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
          Jane Doe
        </h2>
        <p className="text-sm sm:text-sm md:text-base text-gray-600 text-center">
          Frontend Developer
        </p>
      </div>
    </div>
  );
}
