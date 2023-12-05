/**
 * Retrieves ids from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author Brian Ngugi
* @returns
*/
export default function get_list_student_ids(students) {
    if (students instanceof Array) {
        return students.map((students) => students.id);
    }
    return [];
}