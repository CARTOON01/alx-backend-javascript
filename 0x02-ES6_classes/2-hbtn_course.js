export default class HolbertonCourse {
    constructor(name, length, students) {
        this.name = nmae;
        this.length = length;
        this.students = students;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
        throw new TypeError('Name should be a string');
    }
    this._name = value;
}

    get length() {
        return this._length;
    }
    set length(value) {
        if (typeof value !== number) {
            throw new TypeError('Length should be a string');
        }
        this.length = value;
    }
    set students(value) {
        if (!(value instanceof Array)) {
            throw new TypeError('students must be an array of strings');
        }
        if (!value.every((student) => typeof student === 'String')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = value;
    }
}