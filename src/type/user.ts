export interface UserType {
    id: string;
    username: string;
    email: string;
<<<<<<< HEAD
    avatar: string;
    newUser: boolean;
    isVerified: string;
    createdAt: Date;
    otpExpires?: Date;
    resetPasswordOtpExpires?: Date;
=======
    isVerified: string;
    createdAt: Date;
    otpExpires: Date;
    resetPasswordOtpExpires: Date;
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
}
