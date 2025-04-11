import {$CreativeModeTab, $CreativeModeTab$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.CreativeModeTab"
import {$ParticleType, $ParticleType$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.ParticleType"
import {$Item, $Item$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.Item"
import {$SoundEvent, $SoundEvent$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.SoundEvent"
import {$Fluid, $Fluid$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.Fluid"
import {$Block, $Block$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.Block"
import {$MobEffect, $MobEffect$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.MobEffect"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.ArmorMaterial"
import {$Attribute, $Attribute$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.Attribute"
import {$Potion, $Potion$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.Potion"
import {$FluidType, $FluidType$$Type} from "moe.wolfgirl.probejs.generated.registry.neoforge.FluidType"
import {$VillagerProfession, $VillagerProfession$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.VillagerProfession"
import {$VillagerType, $VillagerType$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.VillagerType"
import {$PointOfInterestType, $PointOfInterestType$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.PointOfInterestType"
import {$CustomStat, $CustomStat$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.CustomStat"

declare global {
export namespace StartupEvents {
function registry(type: "villager_profession", handler: (event: $VillagerProfession) => void): void
function registry(type: "block", handler: (event: $Block) => void): void
function registry(type: "mob_effect", handler: (event: $MobEffect) => void): void
function registry(type: "attribute", handler: (event: $Attribute) => void): void
function registry(type: "potion", handler: (event: $Potion) => void): void
function registry(type: "creative_mode_tab", handler: (event: $CreativeModeTab) => void): void
function registry(type: "custom_stat", handler: (event: $CustomStat) => void): void
function registry(type: "neoforge:fluid_type", handler: (event: $FluidType) => void): void
function registry(type: "point_of_interest_type", handler: (event: $PointOfInterestType) => void): void
function registry(type: "fluid", handler: (event: $Fluid) => void): void
function registry(type: "item", handler: (event: $Item) => void): void
function registry(type: "villager_type", handler: (event: $VillagerType) => void): void
function registry(type: "sound_event", handler: (event: $SoundEvent) => void): void
function registry(type: "armor_material", handler: (event: $ArmorMaterial) => void): void
function registry(type: "particle_type", handler: (event: $ParticleType) => void): void
}
}