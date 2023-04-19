// for fallback true
import { useRouter } from "next/router"
function Post({ post }) {
      // for fallback true
      const router = useRouter()
      if (router.isFallback) {
            return <h1>Loading........</h1>
      }

      return (
            <>
                  <h4>{post.id} {post.title}</h4>
                  <p>{post.body}</p>
            </>
      )

}
export default Post

export async function getStaticPaths() {
      //fallback false
      // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      // const data = await response.json()
      // let paths = data.map((post)=>{
      //       return {
      //             params:{
      //                   postId: `${post.id}`,
      //             }
      //       }
      // })
      return {
            paths: [
                  {
                        params: { postId: '1' },
                  },
                  {
                        params: { postId: '2' },
                  },
                  {
                        params: { postId: '3' },
                  },
            ],
            // paths, (for fallback false)
            fallback: true,
      }
}

export async function getStaticProps(contect) {
      const { params } = contect
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      let data = await response.json()
      console.log(`generating pages for /post/${params.postId}`)

      return {
            props: {
                  post: data,
            }
      }

}