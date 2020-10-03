import React from "react"
import { Helmet } from "react-helmet"

export default function NotFound() {
    return (
      <>
      <Helmet>
        <meta
          name="NotFoungPage"
          content="This page appears when unknown paths are requested from glog"
        />
      </Helmet>
      <div>
      <h2>Oops!, there is no such page.</h2>
      </div>
      </>
    )
}
