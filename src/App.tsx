import "@styleComponents/app.scss"
import { resetGlobalSearch } from './Api/utils/utils'
import HashRouter from './Router/Router'
function App() {
  const routes = [
    // { page: undefined, component: MainPage }, // главная страница, если hash-параметр "page" отсутствует
    // { page: 'new-client', component: NewClientPage },
    // { page: 'agent', component: AgentPage },
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
