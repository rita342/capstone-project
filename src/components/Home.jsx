import Header from '../components/Header'
import Cover from '../components/Cover'
import CardComponent from '../components/CardComponent'

function Home(){
    return(
        <div>
      <Header/>
        <Cover/>
        <main className ="max-w-7x1 mx-auto px-8 sm:px-8">
            <section className = "pt-6">
                <h2 className = "text-4xl font-semibold pb-5">Explore Nearby</h2>
                <div clasName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CardComponent/>
                </div>
                </section>
                </main>
</div>
    )
}
export default Home