export interface RolesTypePOST {
  libelleRole: string;
  droits: string;
}

export enum RolesEnum {
  NOM_TABLE = 'Role_utilisateur',
  PK = 'id_role_utilisateur',
  LIBELLE = 'libelle_role',
  DROITS = 'droits',
}

export enum isRightRoleEnum {
  ETUDIANT = 'ETUDIANT',
  INTERVENANT = 'INTERVENANT',
  ATTACHE_PROMO = 'ATTACHE_PROMO',
  RESPONSABLE_PEDA = 'RESPONSABLE_PEDA',
  REPROGRAPHE = 'REPROGRAPHE',
  ADMINISTRATEUR = 'ADMINISTRATEUR',
}

export type UtilisateurPagination = 'NOM' | 'PRENOM' | 'EMAIL' | 'PK';
