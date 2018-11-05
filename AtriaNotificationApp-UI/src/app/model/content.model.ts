import { Announcer } from './announcer.model';

export class Content {
    id: string;
    title: string;
    posted: Date;
    image: string;
    postedBy: Announcer;
    description: string;
    isApproved: boolean;
    isActive: boolean;
}
