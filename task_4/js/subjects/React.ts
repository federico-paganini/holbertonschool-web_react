/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      return !this.teacher ||
        !this.teacher.experienceTeachingReact ||
        this.teacher.experienceTeachingReact <= 0
        ? "No available teacher"
        : `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
