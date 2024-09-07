import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgentModuleBase } from "./base/agent.module.base";
import { AgentService } from "./agent.service";
import { AgentController } from "./agent.controller";
import { AgentResolver } from "./agent.resolver";

@Module({
  imports: [AgentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgentController],
  providers: [AgentService, AgentResolver],
  exports: [AgentService],
})
export class AgentModule {}
