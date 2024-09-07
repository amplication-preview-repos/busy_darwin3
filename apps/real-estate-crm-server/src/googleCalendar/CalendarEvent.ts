import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("CalendarEventObject")
class CalendarEvent {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    summary!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    location?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    start!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    end!: string;

    @Field(() => [String], {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => [String]
    })
    @Type(() => String)
    recurrence?: string;

    @Field(() => [String], {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => [String]
    })
    @Type(() => String)
    attendees?: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    reminders?: InputJsonValue;
}

export { CalendarEvent as CalendarEvent };