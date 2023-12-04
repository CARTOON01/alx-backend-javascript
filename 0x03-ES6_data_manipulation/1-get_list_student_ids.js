export default function get_list_student_ids(students) {
    if (students instanceof Array) {
        return students.map((students) => students.id);
    }
    return [];
}