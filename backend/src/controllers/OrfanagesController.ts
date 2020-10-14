import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orfanage";
import orphanageView from '../views/orphanage_view';
import orphanage_view from "../views/orphanage_view";

export default {

  async index(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage);

    const orphanages = await orphanageRepository.find({
      relations: ['images'],
    });

    return response.json(orphanageView.renderMany(orphanages));
  }, 

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanageRepository = getRepository(Orphanage);

    try {
      const orphanage = await orphanageRepository.findOneOrFail(id, {
        relations: ['images'],
      });
      return response.json(orphanageView.render(orphanage));
    } catch (e) {
      return response.status(200).json({});
    }
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanageRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanageRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
};