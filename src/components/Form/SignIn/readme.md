# Formulários salvos com *[unForm](https://unform-rocketseat.vercel.app/guides/basic-form)*

**Os componentes contidos dentro do componente de formulário serão construídos em JS da biblioteca do *[unForm](https://unform-rocketseat.vercel.app/guides/basic-form)*, mantido e desenvolvido pela *[Rocktseat](https://www.rocketseat.com.br/)*. Uma biblioteca servida de performance e mais dinâmico em relação as informações a serem salvas e renderizadas dentro do componente front-end, quanto vindas de um servidor back-end!**

## Por que o unForm?

- Pois o unForm é uma biblioteca bastante **performática**, e isso ajudará na componentização e renderização da nossa página, afim de ela ser melhor distribuída, e assim nos ajudará na forma de trazermos um possível ***back-end*** a aplicação...

## Estrutura básica:

A estrutura base usa sim os ***hooks* do próprio React** para se construir, afim de conseguir trazer mesmo assim uma natividade para dentro do ambiente web, e não uma infinita importação de bibliotecas. Mas vamos ao código...

1. Começamos com a importação do unForm, para que assim consigamos conectar qualquer elemento de input no JSX a bibliteca.

```jsx
import { useField } from "@unform/core";
```

2. Iremos buscar os 3 tipos de dados que este input irá carregar dentro do formulário. Obs: a própria biblioteca já sugere oque deve ser colocado, apenas criando a variável e apertando a sugerir com *CTRL + SPACE*

```jsx
const { fieldName, defaultValue, registerField, error } = useField(name);
```

- **Essas variáveis tem cada uma, uma função, na qual conseguimos com que ela seja diferente, dependendo do estado do input, do registro dele no formulário.** 

- **O *`fieldName`*, representa o valor final do nosso input, ou seja, oque queremos realmente guardar em um objeto JS.**

- **Já o *`registerField`* será o nome que será registrado em no objeto a todo momento que ele registrar uma mudança**

3. Iremos buscar a referência do elemento em HTML, para o JS, com o próprio ref, em que usaremos o hook React de *useRef*, e ainda o useEffect, para assim conseguirmos puxar isso do elemento, o valor para todas as vezes que ele mudar dentro do input:

```jsx
const inputRef = useRef(null);

useEffect(() => {
    console.log(inputRef.current.value)
}, [inputRef]);

<input ref={inputRef}/>
```

- **Sendo assim, usando os dois Hooks do React, *`import React, { useEffect, useRef } from "react";`*, e a biblioteca do unForm, já conseguimos o acesso ao input, agora só precisamos registrar em um objeto comum usando ele!**

4. Utilizaremos para isso primeiro, a função do objeto que criamos, com *`registerField`*, e agora passamos todos os parâmetros que queremos que se armazene dentro dele, para ser registrado.

```jsx
 useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'  // Indicar qual current ele quer mostrar, e por aqui indicamos o valor bruto, ou 'value'.
    });
  }, [fieldName, registerField]); // Dependências a serem usadas dentro do useEffect
```
5 - Jogar todo o processo, para o onSubmit para o Form componente: 

```jsx
export function SignIn() {
  function handleSubmit(data) { // Função criada para acessar os dados do formulário
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    // Função usada no submit de formulário.
    <Form onSubmit={handleSubmit}> 
      <Input name="email" type="email" required/>
      <Input name="password" type="password" required/>

      <button type="submit">Sign in</button>
    </Form>
  );
}

```

- **A partir disso, já poderemos acessar todas as informações que foram jogadas assim que o console foi submetido, trazendo essas informações para o console da aplicação, conseguindo armazenar tudo a partir de um objeto JS!**

```json
Object
email: "serfsefdsef@gmail.com"
password: "23132"

[[Prototype]]: Object
```

---

## A mais para o *back-end*...

