import type { Context } from "@actions/github/lib/context"

export async function run({ context }: { context: Context }) {
  console.log("Payload: ", JSON.stringify(context.payload, null, 2))

  console.log("Action: ", context.action)

  // output action-specific debug info
  if (context.eventName === "pull_request") {
    console.log("PR number: ", context.payload.pull_request?.number)
    console.log("PR title: ", context.payload.pull_request?.title)
    console.log("PR body: ", context.payload.pull_request?.body)
  }

  if (context.eventName === "push") {
    console.log("Pusher: ", context.payload.pusher?.name)
    console.log("Ref: ", context.payload.ref)
  }

  if (context.eventName === "delete") {
    console.log("Ref: ", context.payload.ref)
    console.log("Ref type: ", context.payload.ref_type)
  }

  if (context.eventName === "create") {
    console.log("Ref: ", context.payload.ref)
    console.log("Ref type: ", context.payload.ref_type)
  }
}
