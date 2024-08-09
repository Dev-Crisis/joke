import prisma from "../../../utils/dev";
import {NextResponse} from "next/server";

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

    return NextResponse.json({message: "Task Created"}, {status: 204})
}

export async function DELETE(request){
    const {id} = request.params.id;
    await prisma.task.delete({
        where: {
            id: id,
        },
    });

    return NextResponse.json({message: "Task Created"}, {status: 204})
}

export async function GET(request){
    const res = await prisma.task.findMany();
    return NextResponse.json(res, {status: 200})
}