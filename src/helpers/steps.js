export const steps = [
                        {
                        id: 'SALUDO_WISE',
                        message: 'Hola soy el asistente de Soporte del sistema Wise, COMO TE LLAMAS?',
                        trigger: "NOMBRE_USUARIO"
                        },
                        {
                            id: 'NOMBRE_USUARIO',
                            user: true,
                            trigger: 'SALUDO_USUARIO'
                        },
                        {
                            id:"SALUDO_USUARIO",
                            message: 'Hola, un gusto en saludarte!',
                            trigger: 'OPCIONES_CHAT'
                        },
                        {
                            id:"OPCIONES_CHAT",
                            message: 'Hola, un gusto en saludarte!',
                            end:true,
                        }
                    ];
