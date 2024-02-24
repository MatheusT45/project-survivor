import k from "./kaboom";
import { loadEnd } from "./scenes/end";
import { loadMain } from "./scenes/main";
import { loadTitle } from "./scenes/title";

loadMain();
loadTitle();
loadEnd();

k.go("title");