export default function Layout({children}){
    return (
        <div id="container">
          <header>
                <h1>James Bond filmer:</h1>
          </header>
          <main>
                {children}
          </main>
          <footer>
                <p>Mer info</p>
          </footer>
        </div>
    )
}