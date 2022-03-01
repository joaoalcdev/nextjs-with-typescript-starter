import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header'
import Footer from '../src/patterns/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Typography />
      </main>
      <Footer />
    </div>
  );
}

import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Typography />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Home

// const Home: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Typography />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default Home