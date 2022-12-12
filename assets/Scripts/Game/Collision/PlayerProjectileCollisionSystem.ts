import { IProjectileCollisionSignaler } from "../Projectile/IProjectileCollisionSignaler";
import { ProjectileCollision } from "../Projectile/ProjectileCollision";
import { Enemy } from "../Unit/Enemy/Enemy";

export class PlayerProjectileCollisionSystem {
    public constructor(collisionSignalers: IProjectileCollisionSignaler[]) {
        for (const collisionSignaler of collisionSignalers) {
            collisionSignaler.ProjectileCollisionEvent.on(this.onProjectileCollision, this);
        }
    }

    private onProjectileCollision(projectileCollision: ProjectileCollision): void {
        projectileCollision.otherCollider.getComponent(Enemy).dealDamage(1);
    }
}