import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemToolTierRegistryKubeEvent, $ItemToolTierRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.custom.ItemToolTierRegistryKubeEvent"
import {$KubeStartupEvent, $KubeStartupEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeStartupEvent"
import {$BlockModificationKubeEvent, $BlockModificationKubeEvent$$Type} from "dev.latvian.mods.kubejs.block.BlockModificationKubeEvent"
import {$ItemModificationKubeEvent, $ItemModificationKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.ItemModificationKubeEvent"
import {$ItemModelPropertiesKubeEvent, $ItemModelPropertiesKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.ItemModelPropertiesKubeEvent"
import {$MenuScreenRegistryKubeEvent, $MenuScreenRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.client.MenuScreenRegistryKubeEvent"
import {$EntityRendererRegistryKubeEvent, $EntityRendererRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.client.EntityRendererRegistryKubeEvent"
import {$BlockEntityRendererRegistryKubeEvent, $BlockEntityRendererRegistryKubeEvent$$Type} from "dev.latvian.mods.kubejs.client.BlockEntityRendererRegistryKubeEvent"
import {$CreativeTabKubeEvent, $CreativeTabKubeEvent$$Type} from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabKubeEvent"

declare global {
export namespace ItemEvents {
function modelProperties(handler: (event: $ItemModelPropertiesKubeEvent) => void): void
/**
 * Invoked after all items are registered to modify them.
 */
function modification(handler: (event: $ItemModificationKubeEvent) => void): void
/**
 * Invoked when the game is starting up and the item tool tiers are being registered.
 */
function toolTierRegistry(handler: (event: $ItemToolTierRegistryKubeEvent) => void): void
}
export namespace ClientEvents {
function menuScreenRegistry(handler: (event: $MenuScreenRegistryKubeEvent) => void): void
function entityRendererRegistry(handler: (event: $EntityRendererRegistryKubeEvent) => void): void
function blockEntityRendererRegistry(handler: (event: $BlockEntityRendererRegistryKubeEvent) => void): void
}
export namespace StartupEvents {
function init(handler: (event: $KubeStartupEvent) => void): void
function modifyCreativeTab(extra: $ResourceLocation$$Type, handler: (event: $CreativeTabKubeEvent) => void): void
function postInit(handler: (event: $KubeStartupEvent) => void): void
}
export namespace BlockEvents {
function modification(handler: (event: $BlockModificationKubeEvent) => void): void
}
}