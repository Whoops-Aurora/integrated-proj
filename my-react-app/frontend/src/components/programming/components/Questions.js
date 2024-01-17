// Questions.js
import React from 'react';

const Questions = () => {
  // Mock data for questions
  const questions = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', description: 'Given an array of integers, find two numbers such that they add up to a specific target.' },
    { id: 2, title: 'Reverse String', difficulty: 'Easy', description: 'Write a function that reverses a string.' },
    // Add more questions as needed
  ];

  return (
    <div className='py-32'>
      {/* <header className="bg-gray-900 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Coding Exercise Platform</h1>
        <nav className="mt-2">
          <a href="/" className="text-white hover:text-gray-300 mx-2">Home</a>
          <a href="/questions" className="text-white hover:text-gray-300 mx-2">Questions</a>
          <a href="/leaderboard" className="text-white hover:text-gray-300 mx-2">Leaderboard</a>
          <a href="/login" className="text-white hover:text-gray-300 mx-2">Login</a>
          <a href="/register" className="text-white hover:text-gray-300 mx-2">Register</a>
        </nav>
      </header> */}

      <section className="p-4">
        <h2 className="text-3xl font-semibold mb-4">Coding Questions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.map(question => (
            <div key={question.id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
              <p className="text-gray-700 mb-2">{question.description}</p>
              <p className="text-sm text-gray-500">Difficulty: {question.difficulty}</p>
              <a href={`/questions/${question.id}`} className="text-blue-500 hover:underline">View Details</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Questions;
