import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Skeleton from 'react-loading-skeleton'

export default function SkeletonSearchResultsLoading() {


  return (
    <div className="SearchResults__Container" data-testid="skeleton-container" >
      <h1><Skeleton width={150} /></h1>
      <ul className="Diet__Options" >
          {
            [1,2,3,4,5,6].map((label) => (
              <Skeleton key={uuidv4()} height={40} width={90} value={label.name} className="Diet__Options-Item" />
            ))
          }
      </ul>
      <div className="List__Cards" >
            {[1,2,3].map(()=>(
              <figure key={uuidv4()} className="Card__Container" >
                <div className="Card__Image-Polaroid" >
                  <Skeleton width={400} height={300} className="Card__Image"/>
                </div>
                <div className="Info" >
                  <Skeleton width={200} className="Info__Kicker"/>
                  <div>
                      <h1 className="Info__Title" ><Skeleton width={100} height={20}/></h1>
                  </div>
                  <div className="Info__Relevant">
                    <span><Skeleton width={100}/></span>
                    <span><Skeleton width={100}/></span>
                  </div>
                </div>
              </figure>
            ))
            }
      </div>
    </div>
  )
}
