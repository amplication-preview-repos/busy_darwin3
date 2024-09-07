import { Injectable } from "@nestjs/common";
import { CalendarEvent } from "../googleCalendar/CalendarEvent";

@Injectable()
export class GoogleCalendarService {
  constructor() {}
  async CreateCalendarEvent(args: CalendarEvent): Promise<CalendarEvent> {
    throw new Error("Not implemented");
  }
}
