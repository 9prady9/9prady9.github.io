import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import ProjectTag from "../components/project_tag"
import gridStyles from "./index.module.css"
import qrcode from "../../static/BusinessCard.png"

export default function Home({data}) {
  return (
    <div style={{ display: `flex`, flexDirection: `column` }} >
      <div style={{ display: `block` }} >
        <div style={{ float: `left` }} >
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
        <div style={{ float: `right` }} >
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
