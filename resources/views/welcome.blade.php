<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    
    <!-- Vite -->
    @vite(['resources/scss/app.scss', 'resources/ts/app.ts'])
</head>
<body>
    <div class="container">
        <h1>Welcome</h1>
        <button class="button">Test Button</button>
    </div>
</body>
</html> 