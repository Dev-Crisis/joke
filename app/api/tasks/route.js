import prisma from "../../../utils/dev";
import {NextResponse} from "next/server";

export async function POST(request){
    await prisma.task.create({
        data: {
            content: 'buy milk'
        }
    });

    return NextResponse.json({message: "Task Created"}, {status: 201})
}

export async function GET(request){
    return NextResponse.json([])
}