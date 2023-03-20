import React from "react"
import { graphql } from "gatsby"
import Layout from  '../components/layout'
import Seo from '../components/SEO'

const IndexPage = ({ data }) => {
  console.log(data)
  const page = data.directus.notes[0];

  return (
    <>
      <Layout pageTitle="Azure Notes">
        <ul>
          {
            data.directus.notes.map(note => (
              <li key={note.id}>
                {note.posted_date} - {note.product.map(product => <div>{product.sku_id.sku_name}</div>)} - {note.note_type} - {note.description}<br/>
                <a href={note.more_info}>More Information</a><br/>
                <a href={note.reference}>Reference</a>
              </li>
            ))
          }
        </ul>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    directus {
      notes(sort: "-id", filter: {status: {_eq: "published"}}) {
        id
        description
        more_info
        note_type
        posted_date
        reference
        product {
          sku_id {
            sku_name
          }
        }
        status
      }
    }
  }
`
export const Head = () => <Seo title="Azure Notes" />
export default IndexPage