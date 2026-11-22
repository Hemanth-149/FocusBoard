import Modal from "./Modal.jsx";

export default function ConfirmDialog({ task, onConfirm, onCancel }) {
  return (
    <Modal title="Delete this task?" labelId="confirm-title" onClose={onCancel}>
      <p className="confirm-text">“{task.title}” will be removed permanently. This can’t be undone.</p>
      <div className="form-actions">
        <button className="btn" onClick={onCancel}>Cancel</button>
        <button className="btn danger-solid" onClick={onConfirm}>Delete task</button>
      </div>
    </Modal>
  );
}
