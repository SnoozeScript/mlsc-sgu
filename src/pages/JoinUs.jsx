const JoinUs = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Background overlay */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl font-bold mb-6">Join Us Soon!</h1>
        <p className="text-xl mb-8">We're updating our page to bring you new exciting opportunities. Stay tuned for more details!</p>
        
        <div className="flex justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-8 rounded-lg text-lg transition duration-300">
            Stay Updated
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
