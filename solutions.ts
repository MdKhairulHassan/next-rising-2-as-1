const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};
multiplyValue(7, 0);

const processInput = <T>(value: T): string | number | boolean => {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  }

  if (typeof value === 'number') {
    return value * 10;
  }

  if (typeof value === 'boolean' && value === true) {
    return 'Active';
  }
  if (typeof value === 'boolean' && value === false) {
    return 'Inactive';
  } else {
    return typeof value;
  }
};
processInput(' Type string ');
processInput(7);
processInput(false);
processInput([]);

const formatCoordinate = (
  location: readonly [
    latitude: number,
    longitude: number,
    locationName: string,
  ],
): string => {
  const [latitude, longitude, locationName] = location;
  return `Location: ${locationName} (${latitude} ${longitude})`;
};
formatCoordinate([23.81, 90.41, 'Dhaka']);
formatCoordinate([22.35, 91.78, 'Chittagong']);

const concatenateArrays = <T>(...array: T[][]): T[] => {
  let result = [];

  for (const arr of array) {
    result.push(...arr);
  }
  return result;
};
concatenateArrays(['a', 'b'], ['c', 'd']);
concatenateArrays(['a', 'b', 'c'], ['d', 'e', 'f']);
concatenateArrays([1, 2], [3, 4], [5]);

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (
  session: Course[],
  minStudents: number,
): Course[] => {
  let result = [];
  for (const course of session) {
    if (course.students >= minStudents && course.isPublished === true) {
      result.push(course);
    }
  }
  return result;
};

const courses = [
  { title: 'TypeScript Mastery', students: 120, isPublished: true },
  { title: 'Draft Course', students: 200, isPublished: false },
  { title: 'Basic HTML', students: 45, isPublished: true },
  { title: 'Next.js Pro', students: 85, isPublished: true },
];
getPopularCourses(courses, 80);

const pluckValues = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
  return array.map(item => item[key]);
};
const users = [
  { id: 1, name: 'Rakib', role: 'Admin' },
  { id: 2, name: 'Sadia', role: 'Editor' },
  { id: 3, name: 'Tariq', role: 'Subscriber' },
];
pluckValues(users, 'name');
pluckValues(users, 'id');

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  get _baseSalary(): number {
    return this.baseSalary;
  }
}
class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
const manager = new Manager('Alice', 50000, 'Engineering');
manager.getDetails();
manager.getRoleInfo();

const validateAgeAsync = async (age: number): Promise<string> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve('Access Granted');
      } else {
        reject(new Error('Access Denied: Must be 18 or older'));
      }
    }, 1000);
  });
};
validateAgeAsync(18);
