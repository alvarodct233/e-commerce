import toast, { Toaster } from 'react-hot-toast';
import './modal.css';
import { ReactNode, useEffect, useRef } from 'react';

export interface IModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export function Modal(props: IModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.open) {
      modalRef.current?.showModal();
      document.body.classList.add('modal-open');
    } else {
      modalRef.current?.close();
      document.body.classList.remove('modal-open');
    }
    toast.success('Your order is coming!', {
    });
  }, [props.open]);

  return (
    <dialog className="modal" ref={modalRef}>
      <Toaster />
      <article className="modal-article">
        <button className="btn-close" onClick={props.onClose}>
          X
        </button>
        {props.children}
      </article>
    </dialog>
  );
}
