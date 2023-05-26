import { TrueAuthClient } from "@/grpc/service_grpc_web_pb";

export const client = new TrueAuthClient("trueauth.localhost:32778");
