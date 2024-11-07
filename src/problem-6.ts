//w: 07/11/2024 04:15 PM Thu GMT+6 Sharifpur, Gazipur, Dhaka
//! problem-6
interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  original: Profile,
  changes: Partial<Profile>,
): Profile => {
  const updated = {
    ...original,
    ...changes,
  };
  return updated;
};

const myProfile = { name: "sj", age: 20, email: "sj@.com" };
console.log(updateProfile(myProfile, { age: 36 }));
