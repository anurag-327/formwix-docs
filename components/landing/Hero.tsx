import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-10 pb-10 md:pt-28 md:pb-20 md:min-h-[93vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-80" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-200/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container px-6 md:px-10 max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 text-xs font-medium bg-gray-100 text-primary rounded-full">
              Dynamic Form Generator
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold max-w-4xl mb-6 tracking-tight"
          >
            Create beautiful forms with{" "}
            <span className="text-primary">minimal code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10"
          >
            Formwix makes it easy to generate dynamic forms with minimal
            configuration. Validation, submission handling, and UI components —
            all in one elegant package.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <a
              href="#install"
              className="px-4 py-1 rounded-full bg-primary text-white font-medium "
            >
              View Docs
            </a>
            <a
              href="#usage"
              className="px-4 py-1 rounded-full bg-secondary font-medium"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
