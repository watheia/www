import styles from "./index.module.css"
import cn from "classnames"

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <main className="bg-gray-50">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-blue-600">Start your project today.</span>
          </h2>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
            <div className="inline-flex ml-3 rounded-md shadow">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md hover:bg-blue-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <article className="prose lg:prose-xl">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with
            cheese to their children, with the food earning such an iconic status in our
            culture that kids will often dress up as warm, cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series
            of rabies cases springing up around the country.
          </p>
        </article>
      </main>
    </div>
  )
}

export default Index
