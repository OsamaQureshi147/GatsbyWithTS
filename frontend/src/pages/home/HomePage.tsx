import React from "react"

import CustomAppBar from "../../components/CustomAppBar"
import CardContainer from "../../components/CardContainer"
import { RouteComponentProps } from "../../Types/RouteComponentProps"


const HomePage: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <CardContainer />
    </div>
  )
}
export default HomePage
