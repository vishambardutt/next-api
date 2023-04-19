function Post({post}){

      return (
            <>
            <h4>{post.id} {post.title}</h4>
            <p>{post.body}</p>
            </>
      )

}
export default Post

export async function getStaticPaths(){
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await response.json()
      let paths = data.map((post)=>{
            return {
                  params:{
                        postId: `${post.id}`,
                  }
            }
      })
      return {
            // paths:[
            //      {
            //       params: {postId:'1'},
            //      },
            //      {
            //       params: {postId:'2'},
            //      },
            //      {
            //       params: {postId:'3'},
            //      }            
            // ],
            paths,
            fallback:false,
      }
}

export async function getStaticProps(contect){
      const {params} = contect
      let response = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      let data = await response.json()

      return {
            props:{
                  post:data,
            }
      }

}