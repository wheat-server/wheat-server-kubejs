/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.serializer.special.flag", handler: (event: Internal.SpecialRecipeSerializerManager) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.chest.opened", handler: (event: Internal.ChestEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "player.advancement", handler: (event: Internal.PlayerAdvancementEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.type_registry", handler: (event: Internal.RecipeTypeRegistryEventJS) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "sound.registry", handler: (event: Internal.SoundRegistryEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.compostables", handler: (event: Internal.CompostablesRecipeEventJS) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.armor_tiers", handler: (event: Internal.ItemArmorTierEventJS) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.generate_assets", handler: (event: Internal.ClientGenerateAssetsEventJS) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.right_click_empty", handler: (event: Internal.ItemRightClickEmptyEventJS) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.paint_screen", handler: (event: Internal.ScreenPaintEventJS) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.model_properties", handler: (event: Internal.ItemModelPropertiesEventJS) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.painter_updated", handler: (event: Internal.PainterUpdatedEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "command.registry", handler: (event: Internal.CommandRegistryEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "command.run", handler: (event: Internal.CommandEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "item.food_eaten", handler: (event: Internal.ItemFoodEatenEventJS) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.tool_tiers", handler: (event: Internal.ItemToolTierEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.chest.closed", handler: (event: Internal.ChestEventJS) => void);
declare function onEvent(name: "minecraft.sound_event.registry", handler: (event: Registry.Sound_event) => void);
declare function onEvent(name: "sound_event.registry", handler: (event: Registry.Sound_event) => void);
declare function onEvent(name: "minecraft.fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "minecraft.block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "minecraft.item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "minecraft.enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "minecraft.mob_effect.registry", handler: (event: Registry.Mob_effect) => void);
declare function onEvent(name: "mob_effect.registry", handler: (event: Registry.Mob_effect) => void);
declare function onEvent(name: "minecraft.entity_type.registry", handler: (event: Registry.Entity_type) => void);
declare function onEvent(name: "entity_type.registry", handler: (event: Registry.Entity_type) => void);
declare function onEvent(name: "minecraft.block_entity_type.registry", handler: (event: Registry.Block_entity_type) => void);
declare function onEvent(name: "block_entity_type.registry", handler: (event: Registry.Block_entity_type) => void);
declare function onEvent(name: "minecraft.potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "minecraft.particle_type.registry", handler: (event: Registry.Particle_type) => void);
declare function onEvent(name: "particle_type.registry", handler: (event: Registry.Particle_type) => void);
declare function onEvent(name: "minecraft.motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "minecraft.custom_stat.registry", handler: (event: Registry.Custom_stat) => void);
declare function onEvent(name: "custom_stat.registry", handler: (event: Registry.Custom_stat) => void);
declare function onEvent(name: "minecraft.point_of_interest_type.registry", handler: (event: Registry.Point_of_interest_type) => void);
declare function onEvent(name: "point_of_interest_type.registry", handler: (event: Registry.Point_of_interest_type) => void);
declare function onEvent(name: "minecraft.villager_type.registry", handler: (event: Registry.Villager_type) => void);
declare function onEvent(name: "villager_type.registry", handler: (event: Registry.Villager_type) => void);
declare function onEvent(name: "minecraft.villager_profession.registry", handler: (event: Registry.Villager_profession) => void);
declare function onEvent(name: "villager_profession.registry", handler: (event: Registry.Villager_profession) => void);
