import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import "./RecipeCard.css"

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxHeight: 600,
    margin: 15,
  },
})

const RecipeCard = ({ data }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className="media-image"></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="cardActions">
          <div>
            <Button size="small" color="primary">
              <span className="material-icons">favorite</span>
            </Button>
            <span>{data.likes}</span>
          </div>
          <div>
            <Button size="small" color="primary">
              <span className="material-icons">delete</span>
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
