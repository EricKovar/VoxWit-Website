import { calculateCommentScore } from './score';
import type { Comment } from './types';

export function CommentPanel({ comments }: { comments: Comment[] }) {
  if (!comments.length) return null;
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-2">Recent Comments</h3>
      <div className="grid gap-3" style={{ gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {comments.map(c => (
          <div key={c.id} className="border border-slate-200 rounded-lg p-3 bg-white text-slate-900">
            <div className="text-xs text-slate-500 mb-1">{new Date(c.createdAt).toLocaleString()}</div>
            <div className="mb-2">{c.content}</div>
            <div className="flex gap-3 text-sm text-slate-700">
              <span>Score: <b>{calculateCommentScore(c)}</b></span>
              <span>Likes: <b>{c.likes}</b></span>
              <span>Replies: <b>{c.replies}</b></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
