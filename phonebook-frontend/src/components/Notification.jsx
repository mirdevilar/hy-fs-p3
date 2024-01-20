const Notification = ({n}) =>
  n.msg
    ? <div className={`notification ${n.type}`} >{n.msg}</div>
    : null

export default Notification