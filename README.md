**JavaScript Developer. Professional**

**Task #7**

To run application:
```
npm start
```

Query example:
```
{
    carts {
        id       
        user {      
          id
          login
        }
        products {
          id
          name
          detail
          price      
          image
        }
        order_date
    }
}
```

# GraphQL Server

**Часть 1.**

Написать схему GraphQL для примера веб-приложения e-commerce shop:
до 3 балла - какие сущности (минимум 3, можно больше), какие у них поля, какие обязательные какие нет
до 4 баллов - какие запросы/мутации понадобятся (минимум 4, можно больше)

**Часть 2.**

до 5 баллов - развернуть локально graphQL + nodejs или воспользоваться одним из веб демо (graphqlbin), перенести полностью или частично написанную в Части 1 схему.
Результатом работы будет ссылка на онлайн демо или репозиторий. 