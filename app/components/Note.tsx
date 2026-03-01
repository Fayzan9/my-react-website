"use client";

import { useState, useEffect } from "react";
import { initialNotes, Note } from "../data/notes";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState<Note[]>(initialNotes);

    useEffect(() => {
        console.log(notes);
    }, [notes]);

    const createNote = (e: React.FormEvent) => {
        e.preventDefault();
        const newNote: Note = {
            title: title,
            content: content
        }
        setNotes((prev) => [...prev, newNote])
        setTitle("")
        setContent("")
        console.log('Saved Successfully')
    };

    return (
        <section
            id="contact"
            className="py-24 max-w-6xl mx-auto px-6 text-center"
        >
            <h2 className="text-4xl font-bold mb-8">Contact</h2>

            <form
                onSubmit={createNote}
                className="flex flex-col gap-4 max-w-md mx-auto"
            >

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg"
                />

                <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg"
                />

                <button
                    type="submit"
                    className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                    Create Note
                </button>
            </form>
        </section>
    );
}