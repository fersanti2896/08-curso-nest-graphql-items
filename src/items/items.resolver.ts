import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';
import { User } from '../users/entities/user.entity';
import { CreateItemInput, UpdateItemInput } from './dto/inputs';
import { IdentificadorArgs } from './dto/args';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorators';

@Resolver(() => Item)
@UseGuards( JwtAuthGuard )
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation(() => Item, { name: 'createItem' })
  async createItem(
    @Args('createItemInput') createItemInput: CreateItemInput, 
    @CurrentUser() user: User 
  ): Promise<Item> {
    return this.itemsService.create( createItemInput, user );
  }

  @Query(() => [ Item ], { name: 'items' })
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Query(() => Item, { name: 'item' })
  async findOne( @Args() { id }: IdentificadorArgs ): Promise<Item> {
    return this.itemsService.findOne({ id });
  }

  @Mutation(() => Item)
  updateItem(
    @Args('updateItemInput') updateItemInput: UpdateItemInput
  ): Promise<Item> {
    return this.itemsService.update( updateItemInput.id, updateItemInput );
  }

  @Mutation(() => Item)
  removeItem( @Args() { id }: IdentificadorArgs ): Promise<Item> {
    return this.itemsService.remove({ id });
  }
}
