"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userGetAllService = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const currentFilters = JSON.parse(filters);
    // const query = db("usuario")
    //   .select(
    //     "id",
    //     db.raw('UPPER("descricao") as descricao'),
    //     db.raw('UPPER("email") as email'),
    //     "fotobase64",
    //     "foto_url",
    //     "dat_cadastro"
    //   )
    //   .where({ ativo: "S" });
    // if (currentFilters) {
    //     for (const key in currentFilters) {
    //       const upperColumn = db.raw(`UPPER("${key}")`);
    //       if (currentFilters[key] && key !== "dataIni" && key !== "dataFin") {
    //           query.andWhere(upperColumn, "like", `%${currentFilters[key].toUpperCase()}%`);
    //       }
    //     }
    //     if (currentFilters.dataIni && currentFilters.dataFin) {
    //       query.whereBetween('dat_cadastro', [
    //         currentFilters.dataIni,
    //         currentFilters.dataFin
    //       ]);
    //     }
    // }
    // const users = await query;
    // if (!users.length) {
    //   throw new AppError(404, "Não há usuários cadastrados");
    // }
    // return { totalPages, users };
});
exports.default = userGetAllService;
