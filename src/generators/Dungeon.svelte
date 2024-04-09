<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  const options = {
    small: '1d4',
    default: '1d6',
    medium: '1d8',
    large: '1d12',
    xl: '1d20',
  };
  let selected = 'default';
  let formula = options[selected];
  const numberOfAreas = new DiceRoll(formula).total;
</script>