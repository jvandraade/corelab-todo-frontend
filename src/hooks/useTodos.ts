import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import * as todoService from "../services/todoService";

export const useTask = () => {
  const [Task, setTask] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTask = async () => {
    setLoading(true);
    try {
      const data = await todoService.getTasks();
      setTask(data);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title: string, color?: string) => {
    const newTodo = await todoService.createTask(title, color);
    setTask(prev => [...prev, newTodo]);
  };

  const editTodo = async (id: string, data: Partial<Task>) => {
    const updated = await todoService.updateTask(id, data);
    setTask(prev => prev.map(t => (t.id === id ? updated : t)));
  };

  const removeTodo = async (id: string) => {
    await todoService.deleteTask(id);
    setTask(prev => prev.filter(t => t.id !== id));
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return { Task, loading, addTodo, editTodo, removeTodo };
};
