function removecolor() {
    // 1. Get the select element by its ID
    const dropdown = document.getElementById("colorSelect");

    // 2. Get the index of the currently selected option
    const selectedIndex = dropdown.selectedIndex;

    // 3. Validation: Ensure an item is actually selected before trying to remove
    if (selectedIndex !== -1) {
        // 4. Remove the option at the selected index
        dropdown.remove(selectedIndex);
    }
}