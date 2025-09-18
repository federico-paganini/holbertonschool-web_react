/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    Director.prototype.toString = function () {
        return "Director";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    Teacher.prototype.toString = function () {
        return "Teacher";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    var numSalary = typeof salary === "string"
        ? parseInt(salary.replace(/\D/g, ""), 10)
        : salary;
    return numSalary < 500 ? new Teacher() : new Director();
};
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
var isDirector = function (employee) {
    return employee instanceof Director;
};
var executeWork = function (employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
};
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
var teachClass = function (todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    return "Teaching History";
};
console.log(teachClass("Math"));
console.log(teachClass("History"));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWFBO0lBQUE7SUFjQSxDQUFDO0lBYkMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDRSxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQWNBLENBQUM7SUFiQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELDBCQUFRLEdBQVI7UUFDRSxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFNRCxJQUFNLGNBQWMsR0FBMkIsVUFBQyxNQUFNO0lBQ3BELElBQU0sU0FBUyxHQUNiLE9BQU8sTUFBTSxLQUFLLFFBQVE7UUFDeEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUViLE9BQU8sU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUlwQyxJQUFNLFVBQVUsR0FBRyxVQUFDLFFBQWtCO0lBQ3BDLE9BQU8sUUFBUSxZQUFZLFFBQVEsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFNRixJQUFNLFdBQVcsR0FBd0IsVUFBQyxRQUFRO0lBQ2hELElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDckM7SUFFRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUkvQyxJQUFNLFVBQVUsR0FBRyxVQUFDLFVBQW9CO0lBQ3RDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBFbXBsb3llZUludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIGV4dGVuZHMgRW1wbG95ZWVJbnRlcmZhY2Uge1xuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIGV4dGVuZHMgRW1wbG95ZWVJbnRlcmZhY2Uge1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4gIH1cbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCI7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkRpcmVjdG9yXCI7XG4gIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgfVxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIlRlYWNoZXJcIjtcbiAgfVxufVxuXG5pbnRlcmZhY2UgY3JlYXRlRW1wbG95ZWVGdW5jdGlvbiB7XG4gIChzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IFRlYWNoZXIgfCBEaXJlY3Rvcjtcbn1cblxuY29uc3QgY3JlYXRlRW1wbG95ZWU6IGNyZWF0ZUVtcGxveWVlRnVuY3Rpb24gPSAoc2FsYXJ5KSA9PiB7XG4gIGNvbnN0IG51bVNhbGFyeSA9XG4gICAgdHlwZW9mIHNhbGFyeSA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBwYXJzZUludChzYWxhcnkucmVwbGFjZSgvXFxEL2csIFwiXCIpLCAxMClcbiAgICAgIDogc2FsYXJ5O1xuXG4gIHJldHVybiBudW1TYWxhcnkgPCA1MDAgPyBuZXcgVGVhY2hlcigpIDogbmV3IERpcmVjdG9yKCk7XG59O1xuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKFwiJDUwMFwiKSk7XG5cbnR5cGUgRW1wbG95ZWUgPSBUZWFjaGVyIHwgRGlyZWN0b3I7XG5cbmNvbnN0IGlzRGlyZWN0b3IgPSAoZW1wbG95ZWU6IEVtcGxveWVlKTogZW1wbG95ZWUgaXMgRGlyZWN0b3IgPT4ge1xuICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcjtcbn07XG5cbmludGVyZmFjZSBleGVjdXRlV29ya0Z1bmN0aW9uIHtcbiAgKGVtcGxveWVlOiBFbXBsb3llZSk6IHN0cmluZztcbn1cblxuY29uc3QgZXhlY3V0ZVdvcms6IGV4ZWN1dGVXb3JrRnVuY3Rpb24gPSAoZW1wbG95ZWUpID0+IHtcbiAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG4gICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG4gIH1cblxuICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xufTtcblxuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSkpO1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpKTtcblxudHlwZSBTdWJqZWN0cyA9IFwiTWF0aFwiIHwgXCJIaXN0b3J5XCI7XG5cbmNvbnN0IHRlYWNoQ2xhc3MgPSAodG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcgPT4ge1xuICBpZiAodG9kYXlDbGFzcyA9PT0gXCJNYXRoXCIpIHtcbiAgICByZXR1cm4gXCJUZWFjaGluZyBNYXRoXCI7XG4gIH1cblxuICByZXR1cm4gXCJUZWFjaGluZyBIaXN0b3J5XCI7XG59O1xuXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKFwiTWF0aFwiKSk7XG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKFwiSGlzdG9yeVwiKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=