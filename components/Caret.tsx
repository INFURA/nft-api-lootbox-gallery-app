const Caret = ({ className }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.69766 0L0.347656 2.35L7.98099 10L0.347656 17.65L2.69766 20L12.6977 10L2.69766 0Z"
        fill="white"
      />
    </svg>
  );
};

export default Caret;
