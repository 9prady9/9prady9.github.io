import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from "../components/header"
import ProjectTag from "../components/project_tag"
import gridStyles from "./index.module.css"
import qrcode from "../../static/BusinessCard.png"

export default function Home({data}) {
  return (
    <>
    <Helmet>
      <meta
        name="AboutPradeep"
        content="General tech info on Pradeep Garigipati"
      />
      <script
        type="text/javascript"
        src="https://cdn.youracclaim.com/assets/utilities/embed.js" async>
      </script>
      <script
        type="text/javascript"
        src="//cdn.credly.com/assets/utilities/embed.js" async>
      </script>
    </Helmet>
    <div style={{ display: `flex`, flexDirection: `column` }} >
      <div style={{ display: `inline-flex` }} >
        <div style={{ float: `left`, marginRight: `12px` }} >
          Pradeep Garigipati <a href="https://www.linkedin.com/in/pradeepgarigipati">(LinkedIn Profile)</a>
          <p>
            Freelance Software Engineer
          </p>
          <p>
            Interests: Computer Graphics and Parallel Computing.
          </p>
          <p>
            GitHub username is <a href="https://github.com/9prady9">9prady9</a>
          </p>
        </div>
        <div style={{ float: `right`, marginRight: `12px`  }} >
          <img src={qrcode} style={{ maxWidth:128, width:`auto`, height:`auto` }} alt="qr code"/>
        </div>
        <div data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="a208c918-fed5-4c97-ae1f-d0bbd6e1052a"
          data-share-badge-host="https://www.youracclaim.com">
        </div>
        <div data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="61e3687c-d3e0-48b1-a5bb-05fda1085642"
          data-share-badge-host="https://www.credly.com">
        </div>
      </div>
      <Header headerLevel="2" text="Projects"/>
      <div className={gridStyles.grid_container}>
        {data.allGithubOrganization.nodes.map((node) => (
          <a
            href={node.repository.url} key={node.repository.id}
            style={{ textDecoration: `none` }}
          >
            <div className={gridStyles.grid_item}>
              <ProjectTag
              name={node.repository.name}
              desc={node.repository.description}
              stars={node.repository.stargazerCount}
              plang={node.repository.primaryLanguage}
              />
            </div>
          </a>
        ))}
        {data.allGithubUser.nodes.map((node) => (
          <a
            href={node.repository.url} key={node.repository.id}
            style={{ textDecoration: `none` }}
          >
            <div className={gridStyles.grid_item}>
              <ProjectTag
              name={node.repository.name}
              desc={node.repository.description}
              stars={node.repository.stargazerCount}
              plang={node.repository.primaryLanguage}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
    </>
  )
}

export const repoQueries = graphql`
query ReposQuery {
  allGithubOrganization {
    nodes {
      repository {
        description
        id
        name
        primaryLanguage {
          color
          name
        }
        stargazerCount
        url
      }
    }
  }
  allGithubUser {
    nodes {
      repository {
        description
        id
        name
        primaryLanguage {
          color
          name
        }
        stargazerCount
        url
      }
    }
  }
}
`
