import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PrismaService } from "src/database/prisma.service";
import { RocketMembersRepository } from "src/repositories/rocket-members-repository";

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prisma: PrismaService){}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction
      }
    })
  }
}