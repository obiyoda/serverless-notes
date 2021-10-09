import * as sst from "@serverless-stack/resources";
import { Bucket, Table } from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  table: Table;
  bucket: Bucket;

  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    this.bucket = new sst.Bucket(this, "Uploads");

    this.table = new sst.Table(this, "Notes", {
      fields: {
        userId: sst.TableFieldType.STRING,
        noteId: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
    });
  }
}
