export type Photos = {
  message: string;
  success: boolean;
  count: number;
  totalPages: number;
  photos: Photo[];
};

export interface Photo {
  id: number;
  width: number;
  createdAt: string;
  title: string;
  description: string;
  fileSize: number;
  height: number;
  updatedAt: string;
  url: string;
}

export interface PhotoDto {
  success: boolean;
  message: string;
  photo: {
    id: number;
    width: number;
    created_at: string;
    title: string;
    description: string;
    file_size: number;
    height: number;
    updated_at: string;
    url: string;
  };
}

export type PhotosDto = {
  message: string;
  success: boolean;
  count: number;
  total_pages: number;
  photos: PhotoDto["photo"][];
};
