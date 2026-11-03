import { USER_ROLES } from "./constants/user.constant"


export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]


export interface User {
      id: string,
      fullName: string,
      email: string,
      phone: string | null,
      avatarUrl: string | null,
      role: UserRole,
      isActive: boolean,
      emailVerifiedAt: string | null,
      createdAt: string | null,
      updatedAt: string | null,
      agentProfile: null
}