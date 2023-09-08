//For this exercise you will be strengthening your page-fu mastery. 
//You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

//The class is designed to take in an array of values and an
// integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

//The following are some examples of how this class is used:

class PaginationHelper {
	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and a integer indicating how many
		// items fit within a single page
		this.collection = collection;
		this.itemsPerPage = itemsPerPage
	}
	itemCount() {
		// returns the number of items within the entire collection
		return this.collection.length
	}
	pageCount() {
		// returns the number of pages
		return Math.ceil(this.itemCount() / this.itemsPerPage);

	}
	pageItemCount(pageIndex) {
		// returns the number of items on the current page. page_index is zero based.
		// this method should return -1 for pageIndex values that are out of range
		if (pageIndex <= this.pageCount() - 1 && pageIndex >= 0) {
			const startItem = (pageIndex - 1) + this.itemsPerPage;
			const endItem = Math.min(startItem + this.itemsPerPage, this.collection.length);
			return endItem - startItem
		} else {
			return -1
		}
	}
	pageIndex(itemIndex) {
		// determines what page an item is on. Zero based indexes
		// this method should return -1 for itemIndex values that are out of range
		if (itemIndex >= 0 && itemIndex < this.itemCount()) {
			return Math.floor(itemIndex/this.itemsPerPage);  
		} else {
			return -1
		}
	}

}
const testOne = new PaginationHelper([1, 3, 3, 5, 4, 5], 4)
const numTotal = testOne.itemCount();
const numPag = testOne.pageCount();
const showNumItems = testOne.pageItemCount(1);
const showItemPag = testOne.pageIndex(6)
//console.log(numTotal);
//console.log(numPag);
//console.log(showNumItems);
console.log(showItemPag);