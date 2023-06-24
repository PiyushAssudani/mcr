import './App.css'
import PostList from './components/PostList'
import { forumData } from './data'
import { PostContextProvider } from './postcontext'


function App() {
  return (
    <div>
      <PostContextProvider>
        <PostList/>
      </PostContextProvider>
    </div>
  )
}

export default App
