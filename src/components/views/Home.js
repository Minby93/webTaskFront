import { useEffect, useState } from "react";
import { getNotes, updateNote, deleteNote, addNote } from "../services/NoteService";
import { logout } from "../services/UserService";
import { Navigate } from 'react-router-dom';
import './styles/Notes.css';

function Home(){
    const [notes, setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Состояние для создания новой заметки
    const [currentNote, setCurrentNote] = useState(null);
    const [newNoteData, setNewNoteData] = useState(''); // Текст новой заметки

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await getNotes();
                setNotes(response.data);
            } catch (error) {
                window.location.pathname = '/login';
            }
        };

        fetchNotes();
    }, [])

    // Функция для открытия модального окна редактирования заметки
    const openModal = (note) => {
        setCurrentNote(note);
        setIsModalOpen(true);
    };

    // Функция для закрытия модального окна редактирования заметки
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentNote(null);
    };

    // Функция для открытия модального окна для создания новой заметки
    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    // Функция для закрытия модального окна для создания новой заметки
    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
        setNewNoteData(''); // Очищаем текст новой заметки
    };

    // Функция для добавления новой заметки
    const addNoteHandler = async () => {
      // Проверяем, что текст не пустой
      if (newNoteData.trim() === '') {
        alert('Пожалуйста, введите текст заметки!');
        return;
      }
    
      // Формируем объект заметки
      const newNote = {
        data: newNoteData,
      };
    
      try {
        // Отправляем запрос на добавление заметки
        await addNote(newNote);
        
        // После добавления заметки, запрашиваем обновленный список заметок с сервера
        const response = await getNotes();
        setNotes(response.data); // Обновляем список заметок
        setNewNoteData(''); // Очищаем поле ввода
        closeCreateModal();
      } catch (error) {
        console.error('Ошибка при добавлении заметки:', error);
        alert('Произошла ошибка при добавлении заметки.');
        closeCreateModal();
      }
    };
    

    // Подтвердить удаление заметки
    const confirmDelete = async () => {
        try {
            await deleteNote(currentNote.id);
            setNotes(notes.filter((note) => note.id !== currentNote.id));
            closeDeleteModal();
            closeModal();
        } catch (error) {
            alert("Ошибка при удалении заметки: " + error.message);
        }
    };

    // Функция для открытия модального окна для удаления
    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    // Закрыть модальное окно для удаления
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    // Сохранение изменений заметки
    const saveNote = async () => {
        try {
            await updateNote(currentNote);
            const response = await getNotes();
            setNotes(response.data); // Обновляем список заметок
            closeModal();
        } catch (error) {
            alert("Ошибка при сохранении заметки: " + error.message);
        }
    };

    // Обработчик для выхода из системы
    const handleLogout = async () => {
      try{
        await logout();
        return <Navigate to='/login'/>; 
      }
      catch (error){
        window.location.reload();
      }
  };

    return (
      <div className="notes-container">
        {/* Кнопка Logout */}
        <button className="logout-btn" onClick={handleLogout}>
          Выйти
        </button>
      {/* Кнопка создания заметки доступна всегда */}
        <button className="create-note-btn" onClick={openCreateModal}>
          Создать заметку
        </button>
  
      {/* Если заметок нет, показываем сообщение */}
      {!notes.length && (
          <div className="no-notes">
              <p>У вас пока нет заметок</p>
          </div>
      )}
  
      {/* Карточка заметки */}
      {notes.map((note) => (
          <div key={note.id} className="note" onClick={() => openModal(note)}>
              <p>{note.data.length > 20 ? note.data.slice(0, 20).trim() + "..." : note.data}</p>
          </div>
      ))}
  
      {/* Модальное окно для создания новой заметки */}
      {isCreateModalOpen && (
          <div className="modal">
              <div className="modal-content">
                  <button className="close-btn" onClick={closeCreateModal}>
                      ×
                  </button>
                  <textarea
                      style={{ width: '100%', height: '150px' }}
                      value={newNoteData}
                      onChange={(e) => setNewNoteData(e.target.value)}
                      placeholder="Введите текст заметки..."
                  />
                  <div className="modal-buttons">
                      <button className="save-btn" onClick={addNoteHandler}>
                          Создать
                      </button>
                      <button className="save-btn" onClick={closeCreateModal}>
                          Отмена
                      </button>
                  </div>
              </div>
          </div>
      )}
  
      {/* Модальное окно для редактирования заметки */}
      {isModalOpen && (
          <div className="modal">
              <div className="modal-content">
                  <button className="close-btn" onClick={closeModal}>
                      ×
                  </button>
                  <textarea
                      style={{ width: '100%', height: '150px' }}
                      value={currentNote.data}
                      onChange={(e) => setCurrentNote({ ...currentNote, data: e.target.value })}
                  />
                  <div className="modal-buttons">
                      <button className="save-btn" onClick={saveNote}>
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
