import Link from 'next/link'

const scholarships = [
  { id: 1, name: 'Merit Cum Means Scholarship', grade: '10', description: 'For students in grade 10.', url: 'http://dsel.education.gov.in/scheme/nmmss' },
  { id: 2, name: 'Pre Matric Scholarship', grade: '10', description: 'For students in grade 10.', url: 'https://www.minorityaffairs.gov.in/show_content.php?lang=1&level=1&ls_id=777&lid=825' },
  { id: 3, name: 'AICTE Pragathi Scholarship for girls', grade: '10', description: 'For students in grade 10', url: 'https://www.aicte-pragati-saksham-gov.in/' },
  { id: 4, name: 'E-Grantz Scholarship', grade: '11 & 12', description: 'For students in grade 11 & 12.', url: 'https://www.egrantz.kerala.gov.in/' },
  { id: 5, name: 'Post Matric Scholarship', grade: '11 & 12', description: 'For students in grade 11 & 12.', url: 'http://www.pmsonline.bih.nic.in/pmsedu/pms/Default.aspx' },
  { id: 6, name: 'E-Grantz Scholraship', grade: 'Degree', description: 'For College Stuents.', url: 'https://www.egrantz.kerala.gov.in/' },
]

export default function Home() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Scholarship Portal</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarships.map((scholarship) => (
          <div 
            key={scholarship.id} 
            className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-blue-500 hover:border-2"
          >
            <h2 className="text-xl font-semibold mb-2">{scholarship.name}</h2>
            <p className="text-gray-600 mb-2">Grade: {scholarship.grade}</p>
            <p className="text-gray-700 mb-4">{scholarship.description}</p>
            <Link 
              href={scholarship.url} 
              className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md hover:scale-105"
              aria-label={`Learn more about ${scholarship.name}`}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

