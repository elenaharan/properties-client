export type Property = {
  Address: string;
  _id?: string;
  Image: string;
  Price: number;
  Property_ID?: number;
};

export type MainProps = {
  setShowModal: (showModal: boolean) => void;
  loading: boolean;
  properties: Property[];
  showModal: boolean;
  handleAddProperty: (formData: Property) => Promise<void>;
};

export type PropertyListProps = {
  properties: Property[];
};

export type PropertyCardProps = {
  property: Property;
};

export type PropertyFormProps = {
  onSubmit: (formData: Property) => Promise<void>;
  onClose: () => void;
  showModal: boolean;
};
