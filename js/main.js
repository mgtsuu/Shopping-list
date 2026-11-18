import { loadItems, saveItems } from "./storage.js";
import { showItems } from "./dom.js";

const addForm = document.querySelector("#add-form")
const itemInput = document.querySelector("#input")
const clearButton = document.querySelector("#clear")

let items = loadItems()

function updatePage() {
    showItems(items, toggleItem, deleteItem)
    saveItems(items)
}

function addItem(name) {
    const newItem = {
        id: Date.now(),
        name: name,
        completed: false
    }

    items.push(newItem)
    updatePage()
}

function toggleItem(id) {
    items = items.map(function(item) {
        if (item.id === id) {
            return {
                ...item,
                completed: !item.completed
            }
        }

        return item
    })

    updatePage()
}

function deleteItem(id) {
    items = items.filter(function(item) {
        return item.id !== id
    })

    updatePage()
}

addForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const name = itemInput.value.trim()

    if (name === "") {
        return
    }

    addItem(name)
    itemInput.value = ""
    itemInput.focus()
})

clearButton.addEventListener("click", function() {
    if(items.length === 0)
        items = []
        updatePage()
})

updatePage()
