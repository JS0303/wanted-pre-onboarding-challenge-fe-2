/**
 * @typedef {Object} Tag - tag type.
 * @param {string} id - tag id.
 * @param {string} name - tag name.
 */

/**
 * data types for todo App
 * @typedef {Object} Todo - todo type
 * @property {string} id - todo id
 * @property {string} content - todo content
 * @property {boolean} done - todo status
 * @property {string} category - todo category
 * @property {Tag[]} tags - tags string array
 */

/**
 * createTodo function parameters type
 * @typedef {Object} CreateTodo - createTodo type
 * @property {string} content - todo content. optional.
 * @property {string=} category - todo category. optional
 * @property {Array<string>=} tags - tags string array. optional
 */

/**
 * function createTodo create todo.
 * @param {CreateTodo} props content(optional), category(optional), tags(optional)
 * @returns {Promise<Todo>} return todo value.
 */
async function createTodo({ content, category, tags }) {}

/**
 * function getTodo is request function for todo list.
 * @returns {Promise<Todo[]>} todo json data.
 */
async function getTodo() {}

/**
 * function getTodoDetail is request function for todo detail.
 * @param {Todo.id} id todo id. required/
 * @returns {Promise<Todo>} todo json data.
 */
async function getTodoDetail(id){}

/**
 * updateTodo data type
 * @typedef {Object} UpdateTodo - updateTodo type.
 * @property {string} id - id. required.
 * @property {string=} content - content. optional.
 * @property {boolean} done - status. optional.
 * @property {string=} category - category. optional.
 * @property {Array<string>=} tags - tags string array. optional
 */

/**
 * function upadateTodo update specific todo with id.
 * function updateTodo request HTTP method 'patch'.
 * @param {UpdateTodo} props required : id, optional : content, do, category, tags
 * @returns {Promise<Todo>} todo json data about update
 */
async function updateTodo({ id, content, done, category, tags})

/**
 * function deleteTodo deletes todo.
 * @param {Todo.id} id required
 * @returns {Promise<any>}
 */
async function deleteTodo(id){}

/**
 * function deleteAllTodo deletes All todo.
 * @returns {Promise<any>}
 */
async function deleteAllTodo(){}

/**
 * function deleteTag deletes todo's tag.
 * @param {Todo.id} todoId required.
 * @param {Tag} todoTag required
 * @returns {Promise<any>}
 */
async function deleteTag(todoId, todoTag){}

/**
 * function deleteAllTags deletes all tags
 * @param {Todo.id} todoId required
 * @returns {Promise<any>}
 */
async function deleteAllTags(todoId){}
