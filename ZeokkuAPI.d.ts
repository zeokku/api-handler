export default ZeokkuAPI;

enum EResult {
  Failed,
  Ok,
}

interface GenericResult {
  result: EResult;
  error?: String;
}

//declare creates ambient context, so you don't need declare inside
declare namespace ZeokkuAPI {
  namespace IPlayerService {
    interface GetGameScoreBody {
      userid: string;
      gamemode: number;
    }
    interface GetGameScoreResult extends GenericResult {
      score: number;
    }
    function getGameScore(body: GetGameScoreBody): Promise<{ data: GetGameScoreResult }>;

    interface getInfoResult extends GenericResult {}
    function getInfo({ userid: string }): Promise<any>;
  }

  namespace IPromoService {
    function getAwards(): Promise<any>;

    function redeemCode({ code: string }): Promise<{
      data: {
        result: number;
        name: string;
        description: string;
      };
    }>;
    function claimReward({ rewardid: number }): Promise<any>;
  }
}
