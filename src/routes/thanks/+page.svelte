<script>
    import { theme, primaryColor } from '$lib/store'
</script>

<div class='{$theme}' style='text-align: center;'>
    <h1>Thanks!</h1>
    <a href='/' style='color: hsl({$primaryColor})'>Go back</a>
</div>

<style>
    .dark{
  color: #f9f9f9;
  transition: all 0.25s;
}
.light{
  color: #1a1a1a;
  transition: all 0.25s;
}
</style>