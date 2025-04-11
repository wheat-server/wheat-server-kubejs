import {$JukeboxSong, $JukeboxSong$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.JukeboxSong"
import {$PaintingVariant, $PaintingVariant$$Type} from "moe.wolfgirl.probejs.generated.registry.minecraft.PaintingVariant"

declare global {
export namespace ServerEvents {
function registry(type: "painting_variant", handler: (event: $PaintingVariant) => void): void
function registry(type: "jukebox_song", handler: (event: $JukeboxSong) => void): void
}
}