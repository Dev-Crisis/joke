import prisma from "../../../utils/dev";
import {NextResponse} from "next/server";
import {sql} from "@vercel/postgres";

export async function POST(request){
    const {content, isCompleted} = await request.json();
    await prisma.task.create({
        data: {
            content: content,
            completed: isCompleted,
        }
    });

    return NextResponse.json({message: "Task Created"}, {status: 201})
}

export async function PATCH(request){
    const {id} = request.params.id;
    await prisma.task.update({
        where: {
            id: id,
        },
        data: {
            content: 'buy milk'
        }
    });

    return NextResponse.json({message: "Task Updated"}, {status: 204})
}

export async function DELETE(request){
    const {id} = await request.json();
    console.log(id)
    await prisma.task.delete({
        where: {
            id: id,
        },
    });

    return NextResponse.json({message: "Task Deleted"})
}

export async function GET(request){
    const { rows } = await sql`SELECT * from TASK`;
    return NextResponse.json(rows, {status: 200})
}