import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "./Authentication.module.css";

export const Authentication = () => {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Добро пожаловать обратно в E-Wallet!
        </Title>

        <TextInput label="Email" placeholder="hello@gmail.com" size="md" />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Не выходить из системы" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Войти
        </Button>

        <Text ta="center" mt="md">
          У вас нет учетной записи?{" "}
          <Anchor href="#" fw={700}>
            Зарегайся
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};
