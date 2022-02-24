import ZeokkuAPI from "./ZeokkuAPI";

let { data } = await ZeokkuAPI.IPlayerService.getGameScore({
  userid: "123",
  gamemode: 2,
});

if (data.result === 1) {
  console.log(data.score);
}
