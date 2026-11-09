Access Modifiers in TypeScript OOP

Introduction

In TypeScript, access modifiers are used to control who can access the
properties and methods of a class. They are an important part of Object-Oriented
Programming because they help keep data organized and prevent unwanted changes.
TypeScript mainly provides four modifiers: 'public', 'private', 'protected', and
'readonly'.

Understanding the Access Modifiers

1. Public

The 'public' modifier is the most flexible one. It allows properties and methods
to be accessed from anywhere. Developers do not need to write it explicitly
because all class members are public by default.

2. Private

The 'private' modifier is used when a property or method should only be
available inside its own class. It prevents direct access from outside the
class, helping developers protect internal data.

3. Protected

The 'protected' modifier is quite similar to 'private', but it also allows
access from child classes. It becomes useful when working with inheritance and
sharing functionality between related classes.

4. Readonly

The 'readonly' modifier is used when a property should not be reassigned after
initialization. Its value can be set when declaring the property or inside the
constructor. This helps keep important values unchanged.

Conclusion

Each modifier has its own purpose in TypeScript. 'public' allows open access,
'private' restricts access, 'protected' supports inheritance, and 'readonly'
prevents reassignment. Choosing the right modifier makes code easier to manage
and helps developers build more reliable applications.
