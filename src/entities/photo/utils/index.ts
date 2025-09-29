import type { Photo, PhotoDto, Photos, PhotosDto } from "../types";

export function mapPhotoDtoToPhoto(dto: PhotoDto): Photo {
  return {
    ...dto.photo,
    createdAt: dto.photo.created_at,
    updatedAt: dto.photo.updated_at,
    fileSize: dto.photo.file_size,
  };
}

function mapPhotosPhotoDtoToPhoto(dto: PhotoDto["photo"]): Photo {
  return {
    ...dto,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    fileSize: dto.file_size,
  };
}

export function mapPhotosDtoToPhotos(dto: PhotosDto): Photos {
  return {
    ...dto,
    photos: dto.photos.map((p) => mapPhotosPhotoDtoToPhoto(p)),
    totalPages: dto.total_pages,
  };
}
