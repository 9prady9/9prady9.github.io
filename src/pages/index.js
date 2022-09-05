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
            Engineer@<a href="https://voltrondata.com/">voltrondata</a> , <a href="https://github.com/arrayfire/arrayfire">ArrayFire</a> PMC Member
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
