import { useState, useEffect } from "react";
import { Game } from "@/api";
import styles from "./BannerLastGamePublished.module.scss";
import { Container, Image } from "semantic-ui-react";
import { ENV, fn } from "@/utils";
import Link from "next/link";
import { DateTime } from "luxon";
import { Label } from "@/components/Shared";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null;

  const urlServer = `${ENV.SERVER_HOST}`;
  const wallpaper = game.attributes.wallpaper.data.attributes.url;
  const releaseDate = new Date(game.attributes.releaseDate).toISOString();
  const price = fn.calcDiscountedPrice(
    game.attributes.price,
    game.attributes.discount
  );

  return (
    <div className={styles.container}>
      <Image src={`${urlServer}${wallpaper}`} className={styles.wallpaper} />
      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>
          <h2>{game.attributes.title}</h2>
          <p className={styles.price}>
            <Label.Discount>-{game.attributes.discount}%</Label.Discount>
            <span className={styles.finalPrice}>{price}pesos</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
