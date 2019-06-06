const path = require("path")
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  //console.log(JSON.stringify(node, undefined, 5))
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "myslug",
      value: slug,
    })
  }
}
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplete = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              myslug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplete,
      path: `/blog/${edge.node.fields.myslug}`,
      context: {
        slug : edge.node.fields.myslug,
      },
      // 1 ge path to the templete
      // 2 get markdown data
      // 3 create new pages;
    })
  })
}
