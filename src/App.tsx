import "@styleComponents/app.scss"
import { resetGlobalSearch } from './api/utils/utils'
import Test from './components/test/Test'
import HashRouter from './Router/Router'
function App() {
  const routes = [
    // { page: undefined, component: MainPage }, 
    { page: undefined, component: Test },
  ]
  const start = async () => {
    await resetGlobalSearch()
  }
  start()
  return (
    <>
      {/*
            Пример использовая ссылки
          <div className={styles.links}>
				<HashLink to=''>Главная</HashLink>

				<HashLink to='page=new-client'>
					Добавление контрагента{' '}
					<span style={{ fontWeight: 600, color: 'rgb(97, 239, 109)' }}>
						(Работает)
					</span>
				</HashLink>

				<HashLink to='page=agent&id=18671'>Страница контрагента</HashLink>
			</div> */}
      <HashRouter routes={routes} />
    </>
  )
}

export default App
