# TODO From Doc
## Goal
App scans a document to certain keyword or markup and populates a to-do list. Complete with alerts.

Could be useful for writers or coders where you want to get back to something, but have a hard time remembering all those unfinished ideas. Sure you could use the find feature, but this lets you see everything all in one place.

## Features
- Live doc link can update your to-do list on the fly as you write.
- Maybe app opens when you open the doc?? No idea how to do this.
- You don't upload a file, the app connects to it with a file path.
    - How to do this securely?
    - Only loads todo items.
- No login. Do some sort of hash? How does Trezor do it? 
    - Somehow the data exists online saved to a hash rather than a full "account" and all you need is the hash key to unlock that account rather than a password.
    - Or for the time being, it's all localized.
- Make changes to the notes in the app and they update in your doc. 

## MVP HTML
- Menu
    - Link another document
        - File path
        - keyword(s)
- Main List
    - Header
        - Name of the document
        - close connection
        - collapse/expand
        - sync
        - hide complete toggle
    - List item
        - The note.
        - Reference to line number(s)?
        - Complete toggle

## HTML
- Menu
    - Link another document
        - File path
        - keyword(s)
    - Unlink all documents
    - Settings?
- Main List
    - Header
        - Name of the document
        - close connection
        - collapse/expand
        - sync
        - hide complete/cancelled toggle
        - change view
    - Sublist
        - Sublist name
        - collapse toggle
    - List item
        - The note.
        - Reference to line number(s)?
        - Complete/cancelled toggle
        - Move to sublist dropdown
        - Edit note
- One-At-A-Time
    - Single card with document, sublist, and list item
    - complete/cancelled
    - change sublist dropdown
    - reference to line number in doc
    - next and back buttons
    - return to full view