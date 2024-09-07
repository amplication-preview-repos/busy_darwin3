import { Module } from "@nestjs/common";
import { GoogleCalendarService } from "./googlecalendar.service";
import { GoogleCalendarController } from "./googlecalendar.controller";
import { GoogleCalendarResolver } from "./googlecalendar.resolver";

@Module({
  controllers: [GoogleCalendarController],
  providers: [GoogleCalendarService, GoogleCalendarResolver],
  exports: [GoogleCalendarService],
})
export class GoogleCalendarModule {}
