/**
 *
 * Password
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { StyledFormItem } from 'app/components/Form/styled';
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'app/containers/LoginPage/slice';
import { selectPassword } from 'app/containers/LoginPage/selectors';

export function Password({ onValidateFields }) {
  const { t } = useTranslation();
  const password = useSelector(selectPassword);
  const dispatch = useDispatch();
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(actions.changePasswordAction(event.currentTarget.value));

  return (
    <StyledFormItem
      label={t(translations.loginForm.password.label)}
      name="password"
      rules={[
        {
          required: true,
          message: t(translations.loginForm.password.validation),
        },
      ]}
    >
      <Input.Password
        onPressEnter={onValidateFields}
        onChange={onChangePassword}
        name="password"
        value={password}
        placeholder={t(translations.loginForm.password.placeholder)}
      />
    </StyledFormItem>
  );
}
