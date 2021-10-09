import * as sst from "@serverless-stack/resources";
import StorageStack from "./StorageStack";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  // app.setDefaultFunctionProps({
  //   runtime: "nodejs12.x"
  // });

  new StorageStack(app, "storage");

  // Add more stacks
}
