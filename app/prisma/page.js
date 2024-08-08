import prisma from "../../utils/dev";

const getAllTasks = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: 'buy milk'
  //   }
  // });

  // await prisma.task.update({
  //   where: {
  //     id: "36c0e8b3-b982-465e-bc32-fb5aee7ec1d1"
  //   },
  //   data: {
  //     content: 'buy milk fuck!'
  //   }
  // });

  // await prisma.task.delete({
  //   where: {
  //     id: "36c0e8b3-b982-465e-bc32-fb5aee7ec1d1"
  //   },
  // });

  const allTasks = await prisma.task.findMany();
  return allTasks;
}

const Prisma = async () => {
  const tasks = await getAllTasks();
  return <div>
    <h1 className="text-7xl">Tasks</h1>
    {
      tasks?.map((task) => (
        <h3 key={task.id} className="text-xl py-2 text-white">{task.content}</h3>
      ))}
  </div>
}

export default Prisma;