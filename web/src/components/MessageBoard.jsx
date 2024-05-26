import Empty from "./Empty";

const MessageBoard = () => {
  return (
    <div className="grid justify-items-center mt-16">
      <Empty>
        <h3 className="text-sm font-semibold">No messages just yet</h3>
        <p className="mt-1 text-sm text-slate-600">Post announcements, pitch ideas, and gather feedback while keeping discussions organized and on-topic.</p>
      </Empty>
    </div>
  )
};

export default MessageBoard;
