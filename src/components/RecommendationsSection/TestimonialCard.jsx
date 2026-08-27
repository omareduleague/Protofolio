const Testimonial = ({testimonial}) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-600 dark:border-blue-400"
            />
            <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
                    {testimonial.text}
                </p>
                <p className="text-gray-900 dark:text-white tesxt-lg font-semibold">
                    {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                </p>

            </div>
            </div>
               
    );
};

export default Testimonial;