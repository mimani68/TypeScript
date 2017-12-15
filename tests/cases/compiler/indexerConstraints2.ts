class A { a: number; }
class B extends A { b: number; }

// Inheritance
class F {
    [s: string]: B
}
class G extends F {
    [n: number]: A
}

// Other way
class H {
    [n: number]: A
}
class I extends H {
    [s: string]: B
}

// With hidden indexer
class J {
    [n: number]: {}
}

class K extends J {
    [n: number]: A;
    [s: string]: B;
}


type AliasedNumber = number;

interface L {
    [n: AliasedNumber]: A;
}

type AliasedString = string;

interface M {
    [s: AliasedString]: A;
}

type AliasedBoolean = boolean;

interface N {
    [b: AliasedBoolean]: A;
}