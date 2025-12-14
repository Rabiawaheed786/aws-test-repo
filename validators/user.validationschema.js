const z = require("zod")


exports.userBodySchema = z.object({
    userName: z.string(),
    email: z.email(),
    password: z.string().min(6)
})