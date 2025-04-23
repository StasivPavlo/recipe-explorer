import { Router } from 'express';
import * as recipeController from '../controllers/recipeController';
import { asyncHandler } from '../middleware/asyncHandler';

const router = Router();

router.get('/recipes', asyncHandler(recipeController.getRecipes));
router.get('/recipes/:id', asyncHandler(recipeController.getRecipeById));

export default router;
