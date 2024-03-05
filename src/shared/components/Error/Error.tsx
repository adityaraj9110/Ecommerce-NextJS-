const ErrorComponent = ({
  textMessage,
  cause,
  error,
}: {
  textMessage: string;
  cause: string;
  error: Error;
}) => {
  return (
    <>
      <h1>{textMessage}</h1>
      <h3>
        {cause} : {error.message}
      </h3>
    </>
  );
};

export default ErrorComponent;
