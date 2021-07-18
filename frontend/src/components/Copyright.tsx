import MuiLink from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import * as React from "react"

const CopyrightContent = () => (
  <MuiLink color="inherit" href="https://watheia.app/terms-and-conditioons">
    Watheia Labs, LLC.
  </MuiLink>
)

export default function Copyright({ children = <CopyrightContent /> }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {children} {new Date().getFullYear()}.
    </Typography>
  )
}
