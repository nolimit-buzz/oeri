import { FileText, Users, Rocket, BarChart3, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problem() {
  const features = [
    {
      icon: FileText,
      title: 'SOP to LMS Conversion',
      description: 'Transform your static SOPs into interactive training modules with quizzes, progress tracking, and certifications.'
    },
    {
      icon: Users,
      title: 'Employee Training Platform',
      description: 'Deliver consistent, engaging training experiences that employees actually complete and retain.'
    },
    {
      icon: Target,
      title: 'Client Education Portal',
      description: 'Provide your clients with self-service access to your processes and best practices.'
    },
    {
      icon: Rocket,
      title: 'Automated Onboarding',
      description: 'Streamline new hire training with structured learning paths and automated progress tracking.'
    },
    {
      icon: BarChart3,
      title: 'Training Analytics',
      description: 'Track completion rates, knowledge retention, and training effectiveness across your organization.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your SOPs Deserve Better<br />Than Static Documents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your Standard Operating Procedures into interactive learning experiences that employees actually want to complete and clients can easily follow.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Left Stack */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 w-80 h-[240px]"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {features[0].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[0].description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 w-80 h-[240px]"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {features[1].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[1].description}
              </p>
            </motion.div>
          </div>

          {/* Center Large Card with Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900 rounded-2xl p-0 hover:shadow-lg transition-all duration-300 w-80 lg:w-96 h-[500px] flex flex-col"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              {/* Video with fallback */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                onError={(e) => {
                  console.error('Video error:', e);
                  // Hide video and show fallback content
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
              >
                <source src="/video.mp4" type="video/mp4" />
                {/* <source src="https://videos.pexels.com/video-files/5197383/5197383-sd_1280_720_25fps.mp4" type="video/mp4" />
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback content when video fails */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-white text-sm opacity-75">Business Analytics Dashboard</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {features[2].title}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {features[2].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Stack */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 w-80 h-[240px]"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {features[3].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[3].description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 w-80 h-[240px]"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {features[4].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[4].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
