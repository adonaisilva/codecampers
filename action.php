Hi <?php echo htmlspecialchars($_POST['Customer']); ?>.
<br>
Your <?php echo htmlspecialchars($_POST['Type']); ?> with number <?php echo htmlspecialchars($_POST['Order_num']); ?> was created.
<br>
Here are the details: <?php echo htmlspecialchars($_POST['Event']); ?> for date <?php echo htmlspecialchars($_POST['Date']); ?>.