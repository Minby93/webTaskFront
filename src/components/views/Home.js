import { useEffect, useState } from "react";
import { getNotes } from "../services/NoteService"
import './Notes.css';
function Home(){
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

    //return (
        // <div>
        //     <h1>Список заметок</h1>
        //     {notes.map((note) => (
        //         <div key={note.id}>
        //             <p>{note.data}</p>
        //         </div>
        //     ))}
        // </div>
    //)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState("Тут должен быть текст заметки, который можно редактировать в этом же поле");
  
    // Функция для открытия модального окна
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Функция для закрытия модального окна
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="notes-container">
        {/* Карточка заметки */}
        <div className="note" onClick={openModal}>
          Тут должна быть часть текста заметки...
        </div>
  
        {/* Модальное окно */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
              <textarea
                style={{ width: '100%', height: '150px' }}
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
              />
              <div className="modal-buttons">
                <button className="save-btn" onClick={() => alert("Сохранено!")}>
                  Сохранить
                </button>
                <button className="delete-btn" onClick={() => alert("Удалено!")}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }


export default Home;