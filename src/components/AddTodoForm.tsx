"use client";

import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TagSelector } from "@/components/TagSelector";

export function AddTodoForm() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const { addTodo } = useTodos();

  const handleAdd = async () => {
    if (!title.trim()) return;

    setLoading(true);
    await addTodo(title, color);
    setTitle("");
    setColor(undefined);
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
      <Input
        placeholder="Nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />

      <TagSelector selected={color} onSelect={(c) => setColor(c)} />

      <Button onClick={handleAdd} disabled={loading}>
        {loading ? "Adicionando..." : "Adicionar"}
      </Button>
    </div>
  );
}
