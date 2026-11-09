import { NamedApiResource } from './named-api-resource';

export interface BerryDetailResponse {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedApiResource;
  flavors: { potency: number; flavor: NamedApiResource }[];
  item: NamedApiResource;
  natural_gift_type: NamedApiResource;
}
