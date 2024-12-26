import './App.less'
import Header from "./components/Header/Header.jsx";
import SearchInterface from "./components/SearchInterface/SearchInterface.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";

function App() {

  return (
    <>
        <div className="wrapper brand-bg-1 roboto-regular">

            <Header />

            <SearchInterface>
                {/* title */}
                <h2 className={'pt-[20px] mb-[20px] brand-text-1 roboto-bold'}>550 Hotels Available in Melbourne</h2>
                {/* title */}

                {/* filters */}
                <div className={''}>

                </div>
                {/* filters */}

                {/* search results */}
                    <SearchResults />

                <p className={'mt-4'}>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores, consequatur consequuntur culpa cumque debitis dolore error eum facilis illo ipsum molestias neque nobis non perferendis quam, quia, quibusdam ratione sunt vero. Aliquam eaque eum exercitationem fugiat magnam, molestias optio quisquam ullam. Ab cupiditate hic ipsum laborum molestiae mollitia, nisi quae quibusdam sit sunt. Ab, debitis deserunt dicta dolorem dolorum ex fugit hic in iste maiores mollitia, odit placeat praesentium ut voluptas? Autem, enim impedit maiores nostrum numquam quaerat, quos recusandae suscipit tempora totam vel vitae voluptates voluptatum. Aliquam animi earum et labore nisi officiis qui quis sed sint ullam.</p>
                {/* search results */}

                {/* banner */}

                {/* banner */}

            </SearchInterface>

        </div>

        {/* wrapper */}
            {/* title */}
            {/* filter */}
            {/* search results */}
            {/* banner   */}
        {/* wrapper */}

    </>
  )
}

export default App
