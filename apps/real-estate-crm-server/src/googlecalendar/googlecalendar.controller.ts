import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GoogleCalendarService } from "./googlecalendar.service";
import { CalendarEvent } from "../googleCalendar/CalendarEvent";

@swagger.ApiTags("googleCalendars")
@common.Controller("googleCalendars")
export class GoogleCalendarController {
  constructor(protected readonly service: GoogleCalendarService) {}

  @common.Post("/calendar/event")
  @swagger.ApiOkResponse({
    type: CalendarEvent
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCalendarEvent(
    @common.Body()
    body: CalendarEvent
  ): Promise<CalendarEvent> {
        return this.service.CreateCalendarEvent(body);
      }
}
