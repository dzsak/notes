import Empty from "./Empty";

const Chat = () => {
  return (
    <div className="grid justify-items-center mt-16">
      <Empty>
        <h3 className="text-sm font-semibold">Start by saying “Hi!” to your team.</h3>
        <p className="mt-1 text-sm text-slate-600">Chat casually with people in Notes. Ask questions, connect with your team, and share news without ceremony.</p>
      </Empty>
    </div>
  )
};

export default Chat;
