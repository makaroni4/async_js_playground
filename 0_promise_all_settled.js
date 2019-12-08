if (!Promise.allSettled) {
  Promise.allSettled = promises =>
    Promise.all(
      promises.map((promise, i) => {
        return promise
          .then(value => ({
            status: "fulfilled",
            value: value,
          }))
          .catch(reason => ({
            status: "rejected",
            reason: reason,
          }))
      }
      )
    );
}
