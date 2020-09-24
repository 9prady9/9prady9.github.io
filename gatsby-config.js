require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `glog - Pradeep Garigipati's`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-github`,
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GIT_REPO_STATS_READ_TOKEN_FOR_GATSBY}`,
        },
        queries: [
          `{
            organization(login: "arrayfire") {
              repository(name: "arrayfire") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`,
          `{
            organization(login: "arrayfire") {
              repository(name: "forge") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`,
          `{
            organization(login: "arrayfire") {
              repository(name: "arrayfire-rust") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`,
          `{
            organization(login: "arrayfire") {
              repository(name: "arrayfire-python") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`,
          `{
            user(login: "9prady9") {
              repository(name: "CLGLInterop") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`,
          `{
            user(login: "9prady9") {
              repository(name: "wildfire") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`,
          `{
            user(login: "9prady9") {
              repository(name: "MeshIO") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`,
          `{
            user(login: "9prady9") {
              repository(name: "ImageConvolve") {
                id
                name
                url
                description
                stargazerCount
                primaryLanguage {
                  color
                  name
                }
              }
            }
          }`
        ],
      },
    },
  ],
}
