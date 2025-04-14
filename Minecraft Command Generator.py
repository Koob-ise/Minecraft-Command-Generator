import json
import customtkinter as ctk
import pyperclip
from tkinter import scrolledtext

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("dark-blue")

app = ctk.CTk()
app.title("Minecraft Command Generator")
app.geometry("800x600")
app.minsize(600, 500)

commands_list = []

def set_dark_theme():
    ctk.set_appearance_mode("dark")
    app.configure(fg_color="#000000")

set_dark_theme()

main_frame = ctk.CTkFrame(app, fg_color="#000000")
main_frame.pack(fill="both", expand=True, padx=10, pady=10)

entry_frame = ctk.CTkFrame(main_frame, fg_color="#000000")
entry_frame.pack(pady=10)

command_entry = ctk.CTkEntry(entry_frame, width=400, placeholder_text="Enter Minecraft command", fg_color="#121212", border_color="#333333", text_color="#FFFFFF")
command_entry.pack(side="left", padx=5)

def add_command():
    cmd = command_entry.get().strip()
    if cmd:
        commands_list.append(cmd)
        command_entry.delete(0, "end")
        update_status(f"Added command: {cmd[:20]}..." if len(cmd) > 20 else f"Added command: {cmd}")
    else:
        update_status("Error: Empty command")

add_button = ctk.CTkButton(entry_frame, text="Add", command=add_command, fg_color="#1E1E1E", hover_color="#2E2E2E")
add_button.pack(side="left", padx=5)

button_frame = ctk.CTkFrame(main_frame, fg_color="#000000")
button_frame.pack(pady=10)

def generate_command():
    if not commands_list:
        update_status("Error: No commands added")
        return
    
    try:
        result = create_minecraft_command(commands_list)
        result_text.delete(1.0, "end")
        result_text.insert("end", result)
        update_status("Command generated!")
    except Exception as e:
        update_status(f"Error: {str(e)}")

generate_button = ctk.CTkButton(button_frame, text="Generate", command=generate_command, fg_color="#1E1E1E", hover_color="#2E2E2E")
generate_button.pack(side="left", padx=10)

def copy_to_clipboard():
    command = result_text.get(1.0, "end").strip()
    if command:
        pyperclip.copy(command)
        update_status("Copied to clipboard!")

copy_button = ctk.CTkButton(button_frame, text="Copy", command=copy_to_clipboard, fg_color="#1E1E1E", hover_color="#2E2E2E")
copy_button.pack(side="left", padx=10)

def clear_all():
    commands_list.clear()
    result_text.delete(1.0, "end")
    update_status("All commands cleared")

clear_button = ctk.CTkButton(button_frame, text="Clear", command=clear_all, fg_color="#1E1E1E", hover_color="#2E2E2E")
clear_button.pack(side="left", padx=10)

result_text = scrolledtext.ScrolledText(main_frame, wrap="word", font=("Consolas", 11), bg="#121212", fg="#FFFFFF", insertbackground="white")
result_text.pack(fill="both", expand=True, padx=5, pady=5)

status_label = ctk.CTkLabel(main_frame, text="Ready", height=20, text_color="#CCCCCC", fg_color="#000000")
status_label.pack(pady=5)

def update_status(message):
    status_label.configure(text=message)
    app.after(3000, lambda: status_label.configure(text="Ready"))

def create_minecraft_command(commands):
    passengers = []
    for cmd in commands:
        escaped_cmd = cmd.replace('"', '\\"')
        passenger = {'id': 'command_block_minecart', 'Command': escaped_cmd}
        passengers.append(passenger)
    
    passengers.append({'id': 'command_block_minecart', 'Command': 'kill @e[type=minecraft:command_block_minecart,distance=..3]'})
    
    middle_passenger = {
        'id': 'falling_block',
        'BlockState': {'Name': 'activator_rail'},
        'Health': 0,
        'Passengers': passengers
    }
    
    main_entity = {
        'id': 'falling_block',
        'BlockState': {'Name': 'redstone_block'},
        'Passengers': [middle_passenger]
    }
    
    nbt_string = json.dumps(main_entity, separators=(',', ':'))
    nbt_string = nbt_string.replace('"id"', 'id').replace('"BlockState"', 'BlockState') \
                          .replace('"Name"', 'Name').replace('"Passengers"', 'Passengers') \
                          .replace('"Health"', 'Health').replace('"Command"', 'Command')
    
    return f'summon falling_block ~ ~1 ~ {nbt_string}'

app.mainloop()
