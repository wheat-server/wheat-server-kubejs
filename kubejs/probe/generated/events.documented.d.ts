/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.low_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.chunk_generator", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.height_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.material_condition", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired on an entity is spawned.
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "entity.spawned", handler: (event: Internal.EntitySpawnedEventJS) => void);
/**
* Fired by different tag everytime when a player:
* - ticks
* - logged in
* - logged out
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.tick", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.material_rule", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.activity", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when player clicked a non-air, non-fluid block.
*
* This event is called only once.
* 
* The event fires on: **startup**, **server**, **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "block.left_click", handler: (event: Internal.BlockLeftClickEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.placed_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.template_pool", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when ticking on client side.
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.tick", handler: (event: Internal.ClientTickEventJS) => void);
/**
* Fired when a living entity is about to die.
*
* If the entity's HP <= 0, the entity will fall and get removed.
*
* If the event is not cancelled, the entity will die and drop loots.
* 
* The event fires on: **startup**, **server**, **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "entity.death", handler: (event: Internal.LivingEntityDeathEventJS) => void);
/**
* Fired when you need to modify properties of an item.
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.modification", handler: (event: Internal.ItemModificationEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.chunk_status", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.noise", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.sensor_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.items", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.trunk_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_condition_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.blocks", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the game:
* - is initializing
* - is post-initializing
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "init", handler: (event: Internal.StartupEventJS) => void);
/**
* Fired when you need to modify recipes.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.int_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "block.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag everytime when a player:
* - ticks
* - logged in
* - logged out
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.logged_in", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.entity_types", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_pool_entry_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.memory_module_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.motive", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.feature_size_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the chest loot table is registering.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "chest.loot_tables", handler: (event: Internal.ChestLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.position_source_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to remove worldgen.
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "worldgen.remove", handler: (event: Internal.WorldgenRemoveEventJS) => void);
/**
* Fired to register special handlers for tooltips on items.
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.tooltip", handler: (event: Internal.ItemTooltipEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.block_entity_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.game_events", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_pool_element", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when a block is placed.
*
* Note that the entity can be `null`, if the placer is a dispenser, etc.
* 
* The event fires on: **startup**, **server**, **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "block.place", handler: (event: Internal.BlockPlaceEventJS) => void);
/**
* Fired by different tag when the server:
* - loads
* - ticks
* - unloads
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "server.unload", handler: (event: Internal.ServerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.custom_stat", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.stat_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.block_state_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.dimension_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.attribute", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to remove worldgen.
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "worldgen.add", handler: (event: Internal.WorldgenAddEventJS) => void);
/**
* Fired when you need to modify properties of a block.
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "block.modification", handler: (event: Internal.BlockModificationEventJS) => void);
/**
* Fired when the inventory of player is changed.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.inventory.changed", handler: (event: Internal.InventoryChangedEventJS) => void);
/**
* Fired when the gift loot table (cat, villager, etc.) is registering.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "gift.loot_tables", handler: (event: Internal.GiftLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.particle_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.foliage_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.recipe_serializer", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the fishing loot table is registering.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "fishing.loot_tables", handler: (event: Internal.FishingLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "fluid.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the level:
* - loads
* - ticks
* - unloads
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "level.tick", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.enchantment", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.mob_effect", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_score_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.noise_settings", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.point_of_interest_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the server:
* - loads
* - ticks
* - unloads
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "server.tick", handler: (event: Internal.ServerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_placement", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.biome_source", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.pos_rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when an explosion occurred in the level.
*
* This event is not cancellable.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "level.explosion.post", handler: (event: Internal.ExplosionEventJS$Post) => void);
/**
* Fired when the player:
* - opens the inventory
* - closes the inventory
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.inventory.opened", handler: (event: Internal.InventoryEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_number_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.recipe_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_nbt_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the client is:
* - logged in
* - logged out
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.logged_out", handler: (event: Internal.ClientLoggedInEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.block_predicate_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when a living entity is hurt.
*
* If cancelled, the attack will do no effect.
* 
* The event fires on: **startup**, **server**, **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "entity.hurt", handler: (event: Internal.LivingEntityHurtEventJS) => void);
/**
* Fired by different tag when the game:
* - is initializing
* - is post-initializing
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "postinit", handler: (event: Internal.StartupEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the generic loot table is registering.
* Note that this is unused.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "generic.loot_tables", handler: (event: Internal.GenericLootEventJS) => void);
/**
* Fired by different tag everytime when a player:
* - ticks
* - logged in
* - logged out
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.logged_out", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.density_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the server:
* - loads
* - ticks
* - unloads
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "server.load", handler: (event: Internal.ServerEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.float_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.high_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.last", handler: (event: Internal.DataPackEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.schedule", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the level:
* - loads
* - ticks
* - unloads
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "level.load", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_piece", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.density_function", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when player right clicks on an Entity.
*
* Note that both main hand and off hand will be called if not cancelled.
*
* On cancellation, Result.SUCCESS is returned, thus making player swing his arm.
* 
* The event fires on: **startup**, **server**, **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "item.entity_interact", handler: (event: Internal.ItemEntityInteractEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_processor", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.sound_event", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the player tossed an item.
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "item.toss", handler: (event: Internal.ItemTossEventJS) => void);
/**
* Fired when player left clicked air on client side.
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.left_click", handler: (event: Internal.ItemLeftClickEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the entity loot table is registering.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "entity.loot_tables", handler: (event: Internal.EntityLootEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the client is initalizing.
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.init", handler: (event: Internal.ClientEventJS) => void);
/**
* Fired when a block is broken by player. This will not be fired by other means, like TNT.
*
* On fabric, the experience returned is always `null`.
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "block.break", handler: (event: Internal.BlockBreakEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_set", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.tree_decorator_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when player right clicks with item on hand.
*
* Note that this will only be fired when hand has item.
*
* On cancellation, Result.SUCCESS is returned, thus making player swing his arm.
* 
* The event fires on: **startup**, **server**, **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "item.right_click", handler: (event: Internal.ItemRightClickEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.placement_modifier_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.villager_profession", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the player:
* - opens the inventory
* - closes the inventory
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.inventory.closed", handler: (event: Internal.InventoryEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.villager_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when an item is about to be picked up by the player.
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "item.pickup", handler: (event: Internal.ItemPickupEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.processor_list", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired by different tag when the level:
* - loads
* - ticks
* - unloads
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "level.unload", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.fluids", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when an explosion is about to happen in the level.
*
* If cancelled, the explosion will not occur.
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "level.explosion.pre", handler: (event: Internal.ExplosionEventJS$Pre) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when the block loot table is registering.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "block.loot_tables", handler: (event: Internal.BlockLootEventJS) => void);
/**
* Fired by different tag when the client is:
* - logged in
* - logged out
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.logged_in", handler: (event: Internal.ClientLoggedInEventJS) => void);
/**
* Fired when player right clicks on an Block that is not fluid.
*
* Note that both main hand and off hand will be called if not cancelled.
*
* On cancellation, Result.SUCCESS is returned, thus making player swing his arm.
* 
* The event fires on: **startup**, **server**, **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "block.right_click", handler: (event: Internal.BlockRightClickEventJS) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.menu", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.potion", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add, change tags of things.
*
* However, due to the type erasure of Java, Probe can not determine what
* can be used here, please refer to the tag string itself.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.biome", handler: (event: Internal.TagEventJS<any>) => void);
/**
* Fired when you need to add some datapack json to the server.
*
* Low priority event is fired first, as they will be overriden later.
*
* And vise versa for high priority events.
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.first", handler: (event: Internal.DataPackEventJS) => void);
