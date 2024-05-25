import Emtpy from "./Emtpy";

const MessageBoard = () => {
  return (
    <div className="grid justify-items-center mt-16">
      <Emtpy>
        <h3 className="mt-2 text-sm font-semibold">No messages just yet</h3>
        <p className="mt-1 text-sm text-slate-600">Post announcements, pitch ideas, and gather feedback while keeping discussions organized and on-topic.</p>
      </Emtpy>
    </div>
  )
};

export default MessageBoard;
