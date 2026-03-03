import app from "./app";

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`DeploySight API running on port ${PORT}`);
});