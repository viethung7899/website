<script lang="ts">
  import { cn } from "@/lib/utils"
  import type { ClassValue } from "clsx"
  import {scale} from "svelte/transition";
  export let show = true;
  export let className: ClassValue | undefined;
</script>

<span transition:scale class={cn(
  "transition-all duration-500 ease-in-out",
  show ? "opacity-100" : "opacity-0",
  show ? undefined : (className || "mr-[-0.5em]"),
)}>
  <slot />
</span>