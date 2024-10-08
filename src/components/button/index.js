import React from 'react';
import { Button as TButton, Spinner } from '@material-tailwind/react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

function Button({ children, link, loading, className, variant = 'filled', ...props }) {
  return link ? (
    <Link to={link}>
      <TButton
        {...props}
        variant={variant}
        className={cx('bg-main h-[52px] rounded-[12px] text-[16px] font-[500]', className)}>
        {loading ? <Spinner className="h-6 w-6" color="red" /> : children}
      </TButton>
    </Link>
  ) : (
    <TButton
      {...props}
      variant={variant}
      className={cx('bg-main h-[52px] rounded-[12px] text-[16px] font-[500]', className)}>
      {loading ? <Spinner className="h-6 w-6" color="red" /> : children}
    </TButton>
  );
}

export default Button;
