import Header from '../components/Header'
import Cover from '../components/Cover'
import CardComponent from '../components/CardComponent'
import MediumCard from '../components/MediumCard'

function Home(){
    return(
        <div>
      <Header/>
        <Cover/>
        
        <main className ="max-w-7x1 mx-auto px-8 sm:px-8">
            <section className = "pt-6">
                <h2 className = "pb-1 " style={{marginLeft:'8rem',fontWeight:'bold'}}>Explore Nearby</h2>
                <div clasName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CardComponent/>
                </div>
                <h2 className = "pb-1 " style={{marginLeft:'8rem',fontWeight:'bold',marginTop:'8rem'}}>Live anywhere</h2>
                <div clasName="grid grid-cols-12 sm:grid-cols-12 lg:grid-cols-3 xl:grid-cols-4">
              <MediumCard/>
                </div>
                </section>
                </main>
</div>
    )
}
export default Home