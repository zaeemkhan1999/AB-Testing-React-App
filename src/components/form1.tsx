export default function Form1() {
    return (
    <form className="w-full rounded-none md:rounded-2xl md:p-8 shadow-input bg-white">
          <h2 className="text-2xl text-gray-900 font-bold mb-6 text-center">
            Registration Form
          </h2>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your name"
            />
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your phone number"
            />
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="city"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your city"
            />
          </div>
  
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="country"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your country"
            />
          </div>
  
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 flex-grow text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
    );
}
