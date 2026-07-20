import { redirect } from "next/navigation";

// Canonical route is /workers. Permanently redirect any visitors here.
export default function ProfessionalsRedirect() {
  redirect("/workers");
}
