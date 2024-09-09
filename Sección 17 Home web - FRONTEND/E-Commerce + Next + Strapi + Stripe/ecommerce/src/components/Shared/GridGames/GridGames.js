import { map } from "lodash";
import Link from "next/link";
import { ENV, fn } from "@/utils";
import styles from "./GridGames.module.scss";
import { Label } from "../Label";

export function GridGames({ games }) {
  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.attributes.slug}`}
          className={styles.game}
        >
          <div>
            <img
              src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`}
            />
            {game.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.attributes.discount}%`}
              </Label.Discount>
            )}
          </div>
          <div className={styles.title}>
            <span>{game.attributes.title}</span>
            <span>
              {fn.calcDiscountedPrice(
                game.attributes.price,
                game.attributes.discount
              )}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
