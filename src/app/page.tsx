import Image from 'next/image';

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Personalized Learning for the IELTS</h1>
        <p className="text-lg">
          Our AI tutor analyzes your strengths, weaknesses, and learning style to create a personalized study plan that helps you maximize your IELTS score. With adaptive practice questions and detailed performance tracking, you'll be better prepared than ever before.
        </p>
        <div className="inline-block bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded mt-4">
          Coming Soon
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Adaptive Practice</h2>
          <p>Our AI tutor adjusts the difficulty of practice questions based on your performance, ensuring you’re always challenged at the right level.</p>
        </div>
        <div>
          <Image src="/lauren-mancke-aOC7TSLb1o8-unsplash.jpg" alt="Adaptive practice" width={600} height={400} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Performance Tracking</h2>
          <p>Detailed reports and analytics help you identify your strengths and weaknesses, so you can focus your studying on the areas that need the most improvement.</p>
        </div>
        <div>
          <Image src="/scott-graham-5fNmWej4tAA-unsplash.jpg" alt="Performance tracking" width={600} height={400} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Personalized Curriculum</h2>
          <p>Our AI tutor creates a custom study plan based on your individual needs, ensuring you’re always working on the right skills and concepts.</p>
        </div>
      </section>
      <footer className="text-center mt-12">
        <p>© 2024 Aldiyar Muratkhanov</p>
      </footer>
    </main>
  );
}
