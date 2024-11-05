import { useEffect, useState } from "react";
import { getNotes } from "../services/NoteService"
import './styles/Notes.css';
function Home(){
  const notes = [{id: 2, data: "asdqwew2131dsadasdasdasdasdasdsadsadfkdsjlkfjdsklgjdsjgklsdjkldsjakfljdsk23"},
                {id: 2312, data: "AAAAA"},
                {id: 23321321, data: "qwewq"},
                {id: 23213, data: "HEllo friend"}];
    // const [notes, setNotes] = useState([]);
   
    // useEffect(() => {
    //     const fetchNotes = async () => {
    //         try{
    //             const response = await getNotes();
    //             setNotes(response);
    //         }   catch(error){
    //             alert('An error occurred: ' + error.message);
    //         }
    // };

    // fetchNotes();
    // }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState(null);
  
    // Функция для открытия модального окна
    const openModal = (note) => {
      setCurrentNote(note);
      setIsModalOpen(true);
    };
  
    // Функция для закрытия модального окна
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentNote(null);
    };

    // Функция для подтверждения удаления заметки
  // Открыть модальное окно для подтверждения удаления
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  // Закрыть модальное окно для подтверждения удаления
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  // Подтвердить удаление заметки
  const confirmDelete = () => {
    // Логика удаления заметки
    alert("Заметка удалена!");
    closeDeleteModal();
    closeModal();
  };
  
    return (
      <div className="notes-container">
        {/* Карточка заметки */}
        {notes.map((note) => (
          <div key={note.id} className="note" onClick={() => openModal(note)}>
            <p>{note.data.length > 20 ? note.data.slice(0,20).trim() + "..." : note.data}</p>
          </div>
        ))}
        
  
        {/* Модальное окно */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
              <textarea
                style={{ width: '100%', height: '150px' }}
                value={currentNote.data}
                onChange={(e) => setCurrentNote({...currentNote, data: e.target.value})}
              />
              <div className="modal-buttons">
                <button className="save-btn" onClick={() => alert("Сохранено!")}>
                  Сохранить
                </button>
                <button className="delete-btn" onClick={openDeleteModal}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Модальное окно для подтверждения удаления */}
      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Вы уверены, что хотите удалить эту заметку?</p>
            <div className="modal-buttons">
              <button className="delete-btn" onClick={confirmDelete}>
                Да, удалить
              </button>
              <button className="save-btn" onClick={closeDeleteModal}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  }


export default Home;