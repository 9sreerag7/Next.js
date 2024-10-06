"use client"

import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const scholarships = [
  { id: 1, name: 'Scholarship A', grade: '10', description: 'For students in grade 10.', url: '#' },
  { id: 2, name: 'Scholarship B', grade: '12', description: 'For students in grade 12.', url: '#' },
  { id: 3, name: 'Scholarship C', grade: 'College', description: 'For college students.', url: '#' },
  { id: 4, name: 'Scholarship D', grade: '7', description: 'For students in grade 7.', url: '#' },
  { id: 5, name: 'Scholarship E', grade: '8', description: 'For students in grade 8.', url: '#' },
  { id: 6, name: 'Scholarship F', grade: '9', description: 'For students in grade 9.', url: '#' },
  { id: 7, name: 'Scholarship G', grade: '7', description: 'For students in grade 7.', url: '#' },
  { id: 8, name: 'Scholarship H', grade: '8', description: 'For students in grade 8.', url: '#' },
  { id: 9, name: 'Scholarship I', grade: '9', description: 'For students in grade 9.', url: '#' },
]

export default function ScholarshipPage() {
  const searchParams = useSearchParams()
  const grade = searchParams.get('grade')

  const filteredScholarships = scholarships.filter(scholarship => 
    scholarship.grade.toLowerCase() === grade?.toLowerCase()
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Scholarship Finder</h1>
          <Button className="bg-blue-700 hover:bg-blue-800">Login</Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Scholarships for Grade {grade}</h2>

        {filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle>{scholarship.name}</CardTitle>
                  <CardDescription className="text-gray-400">Grade: {scholarship.grade}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{scholarship.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gray-700 hover:bg-gray-600">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-xl">No scholarships found for grade {grade}.</p>
        )}
      </main>
    </div>
  )
}