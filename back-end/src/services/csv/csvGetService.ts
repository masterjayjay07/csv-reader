import { AppError } from "../../erros/AppErros";
import db from "../../database/knex";

const userGetAllService = async (
  filters: any
) => {
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
};

export default userGetAllService;
