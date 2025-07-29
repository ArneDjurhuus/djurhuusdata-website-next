import Link from 'next/link'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Fuld-stack e-commerce løsning med React frontend og Node.js backend. Inkluderer betalingsintegration, produktstyring og brugeradministration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "Afsluttet",
      image: "project1"
    },
    {
      id: 2,
      title: "CRM System",
      description: "Skræddersyet CRM-system til små og mellemstore virksomheder. Omfatter kundestyring, salgspipeline og rapportering.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      status: "I gang",
      image: "project2"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Interaktivt dashboard til visualisering af forretningsdata med real-time opdateringer og avancerede analyseværktøjer.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      status: "Planlagt",
      image: "project3"
    }
  ]

  return (
    <section 
      id="projekter" 
      className="py-20 bg-white"
      role="main"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mine projekter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En samling af projekter, der viser mine tekniske kompetencer og kreative tilgang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              aria-labelledby={`project-${project.id}-title`}
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Projektbillede</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 id={`project-${project.id}-title`} className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Afsluttet' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'I gang'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Teknologier:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`Læs mere om ${project.title} projektet`}
                >
                  Læs mere
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interesseret i at se flere projekter eller diskutere et samarbejde?
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Kontakt mig for at diskutere projekter"
          >
            Kontakt mig
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
