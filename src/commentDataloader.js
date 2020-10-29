import DataLoader from "dataloader";
import { groupBy, map } from "ramda";
import Comment from "./models/Comment";

export function commentsDataLoader() {
  return new DataLoader(commentsByPostIds);
}

async function commentsByPostIds(postIds) {
  const comments = await Comment.find({ postId: { $in: postIds } });
  const groupByIds = groupBy((comment) => comment.postId, comments);
  return map((postId) => groupByIds[postId], postIds);
}
