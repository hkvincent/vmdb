import React from 'react'
import Loading from "components/PageLoading";
import CardContainer from "components/CardContainer";
import { Suspense } from "react";
export default function GenrePage(params) {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <CardContainer genre={params.params.genre} />
      </Suspense>
    </div>
  )
}
