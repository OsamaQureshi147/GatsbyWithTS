import React from "react"
import { useQuery } from "@apollo/client"
import { GET_ALL_RECIPIES } from "../Queries/gqlQueries"
import RecipeCard from "./RecipeCard"
import "./CardContainer.css"

const CustomCard = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_RECIPIES, {
    fetchPolicy: "cache-first",
    onCompleted: data => console.log(data.getAllRecipes),
  })

  if (loading) return <h3>Loading.....</h3>

  if (error) return <h3>Error!</h3>

  return (
    <div className="cardContainer">
      {data.getAllRecipes.map(dataObj => {
        return <RecipeCard data={dataObj} key={dataObj._id} />
      })}
    </div>
  )
}

export default CustomCard
