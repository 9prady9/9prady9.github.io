import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Container from "../components/container"
import styles from "./academia.module.css"
import ieeelogo from "../../static/ieee_mb_blue.png"
import acmlogo from "../../static/acmlogo.png"

const Publication = props => (
  <div className={styles.publication}>
    <img src={props.avatar_thumbnail} className={styles.avatar_thumbnail} alt="" />
    <div className={styles.brief_desc}>
      <h4 className={styles.pub_title}>{props.pub_title}</h4>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
    <br/>
  </div>
)

export default function Academia() {
  return (
    <>
    <Helmet>
      <meta
        name="PradeepsAcademia"
        content="Academic info of Pradeep Garigipati"
      />
    </Helmet>
    <div>
      <Header headerLevel="1" text="Academia" />
      <ul>
        <li> MS in CS from <a href="https://www.tamu.edu/">Texas A&M</a>, Class of 2013 </li>
        <li> Bachelors in Technology at <a href="http://www.nitdgp.ac.in/">National Institute of technology, Durgapur, India</a> </li>
      </ul>
      <Container>
        <Header headerLevel="2" text="Publications"/> <a href="http://www.informatik.uni-trier.de/~ley/pers/hd/g/Garigipati:Pradeep.html">(CS bibliography link)</a>
        <Publication
          pub_title="Duotone surfaces"
          avatar_thumbnail={acmlogo}
          excerpt="P. Garigipati, E. Akleman. Computational Aesthetics in Graphics, Visualization, and Imaging 2012"
        />
        <Publication
          pub_title="Hamiltonian cycle art: Surface covering wire sculptures and duotone surfaces"
          avatar_thumbnail="https://sdfestaticassets-us-east-1.sciencedirectassets.com/shared-assets/24/images/elsevier-non-solus-new-grey.svg"
          excerpt=" Ergun Akleman, Qing Xing, Pradeep Garigipati, Gabriel Taubin, Jianer Chen, Shiyu Hu. Computers & Graphics, Volume 37, Issue 5, August 2013, Pages 316-332, ISSN 0097-8493"
        />
        <Publication
          pub_title="Estimating Diffusion Parameters from Polarized Spherical-Gradient Illumination"
          avatar_thumbnail={ieeelogo}
          excerpt="Yufeng Zhu, Pradeep Garigipati, Pieter Peers, Paul Debevec and Abhijeet Ghosh.IEEE Computer Graphics and Applications"
        />
      </Container>
    </div>
    </>
  )
}