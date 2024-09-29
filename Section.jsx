import { AbortedDeferredError } from "react-router-dom";
import { Main } from "./Main";
import { Work } from "./Work";

export function Section() {
  return (
    <section className="w-100 h-100 bg-light container-fluid p-0">
      <Main />
      <Work />
    </section>
  );
}
