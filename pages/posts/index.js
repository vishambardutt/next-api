import Link from 'next/link'
function PostList({ posts }) {
      return (
            <>
                  <h3>List of Post</h3>
                  {posts.map((post)=>{
                        return (
                              <div key={post.id}>
                                    <Link href={`posts/${post.id}`}>
                                    <h4>{post.id} {post.title}</h4>
                                    </Link>
                                   <hr></hr>
                              </div>
                        )

                  })}
            </>
      )


}
export default PostList

export async function getStaticProps() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await response.json()
      return {
            props: {
                  // posts: data.slice(0, 3) ONLY FOR THREE PAGES
                  posts:data,
            },
      }
}