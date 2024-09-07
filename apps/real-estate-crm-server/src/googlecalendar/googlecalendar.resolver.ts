import * as graphql from "@nestjs/graphql";
import { CalendarEvent } from "../googleCalendar/CalendarEvent";
import { GoogleCalendarService } from "./googlecalendar.service";

export class GoogleCalendarResolver {
  constructor(protected readonly service: GoogleCalendarService) {}

  @graphql.Mutation(() => CalendarEvent)
  async CreateCalendarEvent(
    @graphql.Args()
    args: CalendarEvent
  ): Promise<CalendarEvent> {
    return this.service.CreateCalendarEvent(args);
  }
}
