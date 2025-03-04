import { IconCheck } from "@tabler/icons";
import { Box } from "components/layout/Box";
import { Column } from "components/layout/Column";
import { Row } from "components/layout/Row";
import { Typography } from "components/Typography";
import { useField } from "formik";
import React from "react";
import styled, { css } from "styled-components";

const CheckboxInput = styled.input`
  margin: 0 6px 0 0;
  position: relative;
  width: 0;
  height: 0;
  margin-right: 22px;
  cursor: pointer;
  display: none;
  height: 18px;
`;

const CheckboxWrapper = styled(Row)`
  position: relative;
  height: 18px;

  & > label::before {
    top: -2px;
    left: -22px;
    position: absolute;
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 4px;
  }

  ${({ theme }) => {
    const colors = theme.colorSchemas.input;

    return css`
      & > label::before {
        border: 1px solid ${colors.border};
      }

      &:hover > label::before {
        border: 1px solid ${colors.borderHover};
      }

      input[type="checkbox"]:checked + label::before {
        border: 1px solid ${theme.colors.primary};
      }
    `;
  }}

  & > .icon-check {
    position: absolute;
    left: 2px;
    top: 2px;
  }
`;

const CheckboxLabel = styled(Typography)`
  position: relative;
  margin-left: 22px;
  cursor: pointer;
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 0.8125rem;
`;

const StyledLink = styled.a`
  ${({ theme }) => {
    const color = theme.colors.primary;
    return css`
      color: ${color};
      &:visited {
        color: ${color};
      }
    `;
  }}
`;

interface CheckBoxProps {
  name: string;
  privacyPolicyUrl: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, privacyPolicyUrl }) => {
  const [, meta, helpers] = useField({ name });
  const { value } = meta;
  const { setValue } = helpers;

  return (
    <Column ai="flex-start">
      <CheckboxWrapper>
        <CheckboxInput
          type="radio"
          checked={value}
          onChange={() => {
            setValue(!value);
          }}
          onClick={() => {
            setValue(!value);
          }}
        />
        {value && <IconCheck className="icon-check" size={12} />}
        <CheckboxLabel
          typographyType="body"
          as="label"
          onClick={() => {
            setValue(!value);
          }}
        >
          Oświadczam, że zapoznałem(-am) się z treścią{" "}
          <StyledLink
            href={privacyPolicyUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            klauzuli RODO.
          </StyledLink>
        </CheckboxLabel>
      </CheckboxWrapper>
      <Box h="13px" mt={0.5} mb={1}>
        {meta.error && meta.touched && (
          <Typography typographyType="label" as="span" color="error">
            {meta.error}
          </Typography>
        )}
      </Box>
    </Column>
  );
};

export default CheckBox;
