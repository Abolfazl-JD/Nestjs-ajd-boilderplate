import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public } from "src/common";
import { LoginDto, RegisterDto } from "./dto";

@Public()
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("register")
    async register(@Body() dto: RegisterDto) {
        const { access_token } = await this.authService.register(dto);
        return {
            statusCode: HttpStatus.CREATED,
            access_token,
        };
    }

    @Post("login")
    async login(@Body() dto: LoginDto) {
        const user = await this.authService.validateUser(dto);

        const { access_token } = await this.authService.login(user);
        return {
            statusCode: HttpStatus.CREATED,
            access_token,
        };
    }
}
