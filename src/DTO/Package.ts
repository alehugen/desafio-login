export interface PackageProps {
  id: number;
  title: string;
  fee: number;
  description: string;
  subTitle: string;
  location: string;
  features: string[];
  applications: {
    name: string;
    features: string[];
  };
  migration: {
    name: string;
    sub: string;
  } | null;
  pluses: {
    name: string;
    features: string[];
  };
  mostWanted: number;
}