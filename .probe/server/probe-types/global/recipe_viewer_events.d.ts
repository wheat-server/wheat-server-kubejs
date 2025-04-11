import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$RegisterSubtypesKubeEvent, $RegisterSubtypesKubeEvent$$Type} from "dev.latvian.mods.kubejs.recipe.viewer.RegisterSubtypesKubeEvent"
import {$AddInformationKubeEvent, $AddInformationKubeEvent$$Type} from "dev.latvian.mods.kubejs.recipe.viewer.AddInformationKubeEvent"
import {$AddEntriesKubeEvent, $AddEntriesKubeEvent$$Type} from "dev.latvian.mods.kubejs.recipe.viewer.AddEntriesKubeEvent"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$GroupEntriesKubeEvent, $GroupEntriesKubeEvent$$Type} from "dev.latvian.mods.kubejs.recipe.viewer.GroupEntriesKubeEvent"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$RemoveEntriesKubeEvent, $RemoveEntriesKubeEvent$$Type} from "dev.latvian.mods.kubejs.recipe.viewer.RemoveEntriesKubeEvent"

declare global {
export namespace RecipeViewerEvents {
function addEntries(extra: "item", handler: (event: $AddEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function addEntries(extra: "fluid", handler: (event: $AddEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function removeEntriesCompletely(extra: "item", handler: (event: $RemoveEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function removeEntriesCompletely(extra: "fluid", handler: (event: $RemoveEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function addInformation(extra: "item", handler: (event: $AddInformationKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function addInformation(extra: "fluid", handler: (event: $AddInformationKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function removeEntries(extra: "item", handler: (event: $RemoveEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function removeEntries(extra: "fluid", handler: (event: $RemoveEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function registerSubtypes(extra: "item", handler: (event: $RegisterSubtypesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function registerSubtypes(extra: "fluid", handler: (event: $RegisterSubtypesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
function groupEntries(extra: "item", handler: (event: $GroupEntriesKubeEvent<($ItemStack$$Type), ($ItemPredicate$$Type)>) => void): void
function groupEntries(extra: "fluid", handler: (event: $GroupEntriesKubeEvent<($FluidStack$$Type), ($FluidIngredient$$Type)>) => void): void
}
}