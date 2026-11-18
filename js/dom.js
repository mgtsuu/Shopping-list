const shoppingList = document.querySelector('#shopping-list')
const counter = document.querySelector('#counter')
const emptyMessage = document.querySelector('#empty')

function createItem(item, onToggle, onDelete) {
    const itemList = document.createElement("li")
    itemList.classList.add("shopping-item")
    if (item.completed) {
        itemList.classList.add("completed")
    }

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.checked = item.completed
    checkBox.addEventListener("change", function() {
        onToggle(item.id)
    })

    const name = document.createElement("span")
    name.classList.add("item-name")
    name.textContent = item.name

    const deleteButton = document.createElement("button")
    deleteButton.type = "button"
    deleteButton.textContent = "Удалить"
    deleteButton.classList.add("delete-button")
    deleteButton.addEventListener("click", function () {
        onDelete(item.id)
    })

    itemList.appendChild(checkBox)
    itemList.appendChild(name)
    itemList.appendChild(deleteButton)
    return itemList
}

export function showItems (items, onToggle, onDelete) {
    shoppingList.textContent = ""
    items.forEach(function(item) {
        const element = createItem(item, onToggle, onDelete)

        shoppingList.appendChild(element)
    })

    emptyMessage.hidden = items.length > 0
    const remainItems = items.filter(function(item) {
        return !item.completed
    }).length

    counter.textContent = "Осталось купить " + remainItems
}