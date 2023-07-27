import React from 'react'
import "./globalIndex.css"

const WawrideCardPage = () => {
  return (
    <>
      <div className="ownership-program-card-container">
        <div className="ownership-program-card-main">
          <div className="ownership-program-card">
            <div className="ownershipcard-section1">
              <div className="">
                <h2>Join the Elite with our </h2>
                <h1>Fractional Ownership Program.</h1>
              </div>
            </div>
            <div className="ownershipcard-section2 mt-5">
              <div className="mt-5">
                <div className="row">
                  <div className="col-md-4 p-0">
                    <div className="input-group mb-3">
                      <select className="form-select wawridecardpage-select" aria-label="Default select example">
                        <option selected>Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 p-0">
                    <div className="input-group mb-3">
                      <select className="form-select wawridecardpage-select" aria-label="Default select example">
                        <option selected>Brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 p-0">
                    <div className="input-group mb-3">
                      <select className="form-select wawridecardpage-select" aria-label="Default select example">
                        <option selected>Fuel Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <button type='search' className="input-group-text btn-search">SEARCH</button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex"><i class="fa-solid fa-grid"></i>
                      <p>18 of 150 options shown </p>
                      <p> <i class="fa-solid fa-grid"></i> </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Cards --> */}
              <div className="">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Porsche 718 Cayman GT4</h5>
                        <div className="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <h6>₹ 1.50 lakhs</h6>
                        <div className="d-flex justify-content-between">
                          <h6>1 ticket price</h6>
                          <a href="*" className="nav-link"><span className='text-org'>Details &gt;	&gt;</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 2card --> */}
                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhIQEhIVEhUXEBUWFRASGBUQFRcWFRUXFhUVFhYYHikhGBsmHBUVIjIiJiosMS8vFyA0OTQuOSkwMSwBCgoKDg0OGxAQGyweISAuLi4uLi4uLi4uLiwuLi4uLi4sLi4uLi4uLy4sLC4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAIYBeQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABJEAACAgEBAwYKBgYJAwUAAAABAgADEQQFEiEGEzFBUZEUFSJSU2FxgZKhByMycrHBM0JigsLRFkNEY5OisuHwJFRzNKPD0tP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QANxEAAgECAgcHAQgBBQAAAAAAAAECAxEEIRITMUFRYZEFFXGBobHRFCIyQpLB0uHwogYzU2OC/9oADAMBAAIRAxEAPwDtMREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBES3qL0RS7sqKOlmIUD3mAXIms63ljV0UVvefPH1dXxtxYfdBmH1m1NTdwa3ml8zT5r9xc+UfdiUc1uzPQo9m1qmcvsrnt6bfZczc9ftKqlS1liJgZw7KmfUN4iYLScvNJYuQLgfMFbMe9cj5zWL6tPp2HOlUZhkK4a7UOOjIrAaxuriQB65BTb/OWNXTp2wnBrNSwRQ3UBXUSSfUXB7cSt5vZZepq6OBpK05Sm+WVvf3ubs/LWr9TT6lvaqp+LiRxyzsP2dG/71tY+S5mpPfeem4J6qa60He4d/8ANLniy1uLWXH1Pfdj4Q2PlJtLj7GLrYVfdpX8ZP2RtJ5T6w9GiHvsc/hXKDyn1vXpKh7XtH8E1Wzk5S3F1rb7yB/m08Xk5ph/Vp7q6x+UnRfF+hX6mjuox6yf6m1/0q1n/b0e+2wfwTw8qtX08xp/dY5/hmsDYWn8wfCn/wBZgeU2hrqKbgA3lbPBR0Y7B640XxZH1NP/AIo/5fuOlJyo1fXpEb7j2H/45WeVty8X0Fo+6w/jVZyLY2gpvcrYinyMglVY8COHEeuZsbAC/o7Wr+5vJ/oYRoviSq9HfRXWXyzoVXLvTk4eq1D2AVWfJHJ+Uymn5T6RgDzwrz6YGj/WAJyltDrFGE1djDsssewd1m8JFc66vju12drc2ik++g1tItLiHLCS/DKPg0/ex3Sq1WG8rBh2qQw7xK5wfQ8pjU2TXZQ2RlqGLe0shKP/AJ39hm7bJ5cWBcuBqKwONtfB1B6N8EKV/fVB+0ZOlbaiPpY1P9mSk+D+zLyWx+TvyOhRMdsrbdGoH1dgJxkofJcDt3T0j1jI9cyMvc5ZRcXoyVmhERBUREQBERAEREAREQBERAEREAREQBERAEREAREQBETH7d2qmlqNzhmA4BEG8zE9QHsBJPUAYbsrloxcpKMVdsyETmer+kjVAkLpK07Odaxz7wFEg2fSFtA9C0KOwVWOe8v+Uy18D1Y9hY2X4UvGS+TrUg7T2xRpxm6xUJ6E+07fdQcT3Tl2o5Xa+wbpsdQek1V82e8Ake4iY5XfJYrYWPSzK5Y+sseJ98q6y2I66P8Ap6e2tNJcFm/XJepu+0OWlr+TpkFY9Jd5b/uoDge8n2TCWb1rb9rta3UbDvAfdH2V9wmMptbsPvG7+MymjwWUu6oufKIZWYD1Lnplb32npxwtHDK9ONue1/PkrLkS6a8hmJVERd57HIREUdLMx4ASDdtZn4acmqv/ALlhi+z/AMSsPqU/aILnP6su7U0vP2Ac9WNMhzXphkZcYxbcePOP2dS8MdGZRZs4YyLEPq8v8kmqsjwcXUxNV2UJRj4PPxMHrtQKRzVA+utP2iSzftW2OcliB1kkzI7H0CqgrU4UfadvtMx6T6yZZ0XJ2wF7Hsraxj0jncKo6FXNfRK7Nh3noNZ/eYfisvdHnaiqvwvozIUqhsO79lOBJ47z/wC0lvqJB0uhvRAvNqcdJFiDJ/eIlR01/oT/AIlH/wCkEOE+D6MvNfLZulHg13oW+Ok/hZHgtvobPduH8GgrZ8A13XNK2zrDYwYnrOB2Dhwm68zZ103f4bH8BNW2vsC4ca6rmG99nmbQQCD+ziSVZjNh37t1Z6t7d9zeT+c3sLNCGy9SpP8A09wIIP6Ozh2dXaJv1eoXALZUkAkMrLjh0cRBGkioJK1SUDV1ekQe1gJdTU1HosQ/vL/OQTcsazZldow6g9jDgw9hmt67k9bQwupJfdzhlytig9PFeOPZ3Tc0ZT0Mp9hEsaqxEdbLf0So5PDeG/ld0Y6z9rGeuBtNS0W1QxG95D5yLKxuce0ouAT+0hRvvTdNjcs7a8Lb/wBQmP0lZG+BnHTwD481gjjHWZzjWhTZYV4KXYqG4EKSSPliRNncolQDLKGCDm3rwjKckkOQPLz1hvVM5LRziephKsa96eJd4pZN7U91nt8ndcj6L2XtSnUpzlNgcZwccGU+aynip9RkycJ2FtoXOHpu5rU+bXhCw7K8ndsHXzT8fNz0Tf8AYfLxcivWgUtndF44UluxweNTepuHrkqpxyMq+BsnOjLTitttq8V+q8ckbvEhJtfTk7o1FJbON0WITnsxmTZoeeIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJqP0k7QenTqUYq2bG4YPBUIPD98Tbpo/0h02W+RXjyKCTkhf0jetTnhX/ALys/u5G+GjpVYo4qrvzfOWWOpAAUDAzw4Ro9o2Z6cj18ZRqWDMW6c/rN3DHqnikCee5Zn2VKnVi46U9m3Nu/wCn93mS8a2eoe6Vrti3tHcJjN6A0aTO/TuZhduXdo7hLq7ev84dwmFV5kNJSGloybNIwjLcTht/UecO4SscoL8jyh8I/wCdcqbZyhczHleMvmW1MGti6Gao2/bjee6qvywvl4B4gnP3eHT6xJws1p8qvWbOYdIBt3Wx7xj5zVHX1yHYmOr3S+kltPLxWErSlenJRjw0V77zbb9v6yrhbzQOeBrau0H4WyJ6vLG/sr+E/wA5pKsFOQAPWAM98rGqlNYaUIRULVlFvilY3hOWtw/VQ+5h/FL68ubOuqs/EJoQ1MeExrDR0sM/wL1OgDlwevTg+xsflKxyxpP2tN3OD/CJzzwme+FRrCv0+F3Rt5y+ToI5S6TeJNNo4D7LL1E+ztEutys2evA2amv98D8HnO6dcVYMDggHB9fAzMaHlbqal3BbWy9S2Ura3vLHj3yymntZyYmDhlRg5f8AvZ5NO/U3GrlLom+zq9T8bsPkTLo2tpW/tln76k/6lM5/tTbTWje3NNv+etC0n15KkyJ4T7PYOAHsHUJLmlsZXD0FVvrYOP5XfrE6WbtK39qqP36qvzrnng+mbov0je2uj8gJzTwuVeFmNYavs6g+H5Y/COg7U2LTbU6h9IMofKCqp6O0NwE5Pt+pLbAy1pUObTK1AgZxk53iTnjjp6pl/ChKvC5DqPczLunDvak/JL2Ns2PyApWmstUhY1qWJsvQ5IBOQGwD7AJntrbMutUBUrrcKq86GZiyrwAs3wd/h1k59c5yu0WHQ5HsYj85fTbd46LXH7z/AM5LqX2in2XGnJSpuKa3/a/cZj+itxY5opZlPE7qA9oIK44euZqg7Vr4DnMf+Wxv9TTUP6Q6gEEXt2cSTwPt9eJITlRqh0XH3qp/hlfs8ztdOpLJqm/Jm517R2n1897S6n5c3MjptpbR9J7rKVPzDD8Jo1PLLVj9dT7VH5SfRy51AI31Rh14UqfxMtdcWc1TA1JrKlT6fJvabY2gOmrT2/dNlTfPIlwcrin/AKjR319rVlLl/EH5TH7G2/XqF8ng3mmebR2sa+DJkTTdkzyvo4uo4Toq/JtP3t6Gc0XK7RWnAvVG7Lfqj/mAmbrsDDKkMO0EEd4nL3uouODWuT1EDEhah00bZ37tITxD1u24favHPskaySzdn6fIn2LCTtByi+DSfqrP0OvxND2byxsrVXterU15wbKiqWj7y5x8h7ZuOzNpVXpzlTh16D1FT5rKeKn1GaxmmePXwdWjnJXV7XWavw5Pk7MlxESxyiIiAIiIAiIgCIiAW9Retas7sFVQSzHgAB1mcR5fcsuc56uvIa1sHPApWowqHsZukjq3iJ0b6UAw0FliEg12VPwJHAOAc46sNPnS18sx7ST85z1pPYe12XShoupvvbw3+pdrtlwWiQ8z0NOXRPbVZomc4O2OckTenhaRol9eyZzuJHs2wF4BiT/d8PnIDb1zc2pwo+03V7ZsuxOTdjVPfWoqprUmzVWDeOB0lVHE49XfOmnh1a7PHxXbU1JxpdTErrbm4im5h25P8pUm1ihwwsq+8CwmT214Ppbmotu1Lsu6ecr5tUYMoYMgIJxgzILsNrEqNF3OmyhrvB9QArCtd3JLjyRwdcZxnPTwmuogcMe18VF30k/JfpZmLr2nvDOQfWsHU5mL1ejKFmrU1spxZQ3V7J5TfvDeHd+UwqU5R8D28J2rr1Z5NbjIu2ZHcyhbpczmYHY5qRa5yOchklsiWyMJOSLvORzksxJsQ6jLnOT3nJaiLEabLvOz3nZZxEixOsZf52OdliIsTrGSOejnpHjMWJ1rJPPT3npGzGYsTrWSTd+X4ytbTIRaVh5Fi0azuZSrUYl9togDgM+s9EwrXYBJOAJTp6Tbh7M7hPkUr0uerM1pwlIzxPayw0bbW9iJnjxs4rZyf7nI+Ylxtr6kcSupx27zGZ/ScnmUAX2DTA0vamnpXesdK/tAHIAb1E5mL2ffoNRbXRU2tDu4UO3NEDPSzAHOAMn3TdUInh1O2sVN3uunyRtFyrdWHl8R+raPz6fnOjbH5U6bW1eCalApI4BjkZ7a36m9R+c0Ha+wG5rnwV1NBd1Fyjdcbh3WJU8cAjpGRNayaSATvVn7Ldkh03HOOfI1pdqa1qNfLhJZWOlWcn+Zs5shbqd4tXcBvNWWGMNu8d08Mr14yOImV2RqLtA+mtddxSXqdAykWIGylgI+0N0kZPQV6iZp2n2/baqVWtvbp4OMq+OwspG975s+09PpqdHXcjc8HyWRyA6MSN4pYBvDJCnByDgcJSM7LJZLmelUwcZzjUvbSvGSS+8nfbuTW1PjY7VVYGUMpyCAQe0EZErmC5E6hH0dASwWFaxniN4A5K7wHQcfhM7OpO58pOLhJxe7IREQVEREAREQBERAMdyi2Z4Vpb9MGCm2pkDEbwBI4Ej1HE+W9bpXqdq3GCD3jqI7QZ9aifMXL/Ylui1TpeOFjtYlyg7jqzE9PUw6COr2Sk4KR0YfEyoyy2b0YDMSlXB6DKwJyNWdmfRU56yKlHNM8zLept3VJ7vfLu7Ie0hhQPWZMEnJFMVOUKUpcjPcj9ki2yqk5w31luOndAzge7A9rSXreUmoGtDNW1NKrzQ0jg1qtBON0KRxbhvE9Z9Uv8jXQDWWtVzwr0Tua95qiUDLvEMhyCBjrinlLp7DuBdWASAKCU1i59XOHfPfOxnzdNZ2tcmf0eNu4SqOtSPWLLCuGpVd9N39tQ2MdeJZ29XYOd0/6F7hunPQunpGEqGDgbzcSB24M2HlBpNbis6ap7VDIrogFprdBipWCjh5J9ZHQZXygZ6Kqef57eWzdZ6+bsFdjnNiksv1eT0k5J4YMkoabVo9RZpWtvrZbKMAWP5LW05wRg8W3ekNjozNfZdywY+y46Oxh/z5zc9nbRqs1V9CUMzeDXl9Rbc9uFFJZsJjdHUJo+vfAQ9jZ/CRJXVjSlUdOamtzJc9BlOZ7OA+qTLy3dsuAqeuRokNGiqS35kvwXPRKTozI4z1S4LnHWYsW0qb2xPTpG7J4dM3ZKvCrPPM98Ms889wki1Hg/75lvwduyecy3ZLvhlvb8hPfDX7fkIFqXPoWNw9kbh7Jf8ADbO0d0eGN2DugjRpcX0I+4eyMGX/AAtuwd088KPYsZkaNPj6EfEYl/wj9kSnn/2RGY0YcS1iJd58ebPOcHZF2VtHiRLBv2KnUPKb8h/ztmzaKi5NO+rqqaywvzVJVd4VcPLtI6sdAPVxmp6OzNjntPyzN+TXVU1bPqapw9lDsmpqtes/pH3gyZ3GwQekHpndBWikfK4iprKspc/RZIx2xi43aCxtuqc20ucZJfhbUWPQGyek9JmVu2C1b2XLWqZr5ulkwGrD5qZ36CrL9YcdMyPJ3VLa2oVGtzjce20VKArcQu+o8tSQOBG9kDEv7G0u0efsbU1vSivku+KwbclU3XIIJO8ePzGZYxNE1G0721FXgqs1dSCqmpAWO4PtFgOkPjJPs7Jc5R7I3GCFNxbqucRCQebfrThnGG4exsdUyO2ttVaZ3oevVLusQaVKaNDx4YZF32U9ueMo2zar6HRXpSKFN14Rd5rWIVgGLO3FvKEhGlTaklY1bZt/kg9Y8k++ZnUawmrdzwzMBoDxs+9/OZrZOktvcU1IXc5O6OsLxM455SaR9PgqzdCN3u/g7T9EGjtSu57K2RXXTGtmGA6iriV9WTOgyLskNzFO+MNzNW8D1NuDI75KnYskfMVZaVSUuLYiIkmYiIgCIiAIiIAlFtSsN1lDDsYBh3GVxAMPquSugs4vo9Ox7TUme/Ex9n0ebMP9kVfuF1HdnE2czH67UXL9hMxYtGUo7HY1vU/Rjs49Fbr91h+Ymgba5IbNruAsNrKhOag27veotxIHswfXN72ptXaABC1keyc72ts/VOxZkbJPYZGiuBd16rjouTaMVsfW0aTaL+R/0ti2VNXkt9Rcu6y5PE7pwePmiZrT6BNm1sLVamgEP4Yeb8JvNir5GlIB3UKgAtkYyccckaxr9j3HpRgR0HElbO22gr8E2jpufq/UbiltfrqtHEDj9noMkyubVyP5UveXbyaaV1uzq6tOudytH1HEljxdyACWPEnumLPKY87ZpdRYE1C2WVre436nTfISnVL0OpXdKuPKXOM44SjZWn2bVhatY61NqKbmW+veccw+8K/q+BB7eGOwyJqbtmV2vqWWzXXuxbm7cV6ZD1AhfKtAGOBIBgF27SLo6b9QaeZv1Nb6Zaw62KAXU3W1/rbrDyRk/rTQ9aoLYPEDh75ltrbXsvsa1vKc9G6AqIOxVHAdPQJi10bnoUn3QCea6/OHT2mUmqv0g7zIw2Xaf1G7jHim3zG7jOfUcz2O9/8ArXX+C/gDouHfmUnUMOi1T7Rn8pa8T3ejbuM98TXejbuMsqPMo+1JboJebKvGDj0R/cEuJtVvMq94x+cteJrvRt3GPE13mN3GTqolO9sTuf8AfMkjap8yn8PzjxqfR1fEf5yL4mu8xu4x4mu8xu4ydVEnvfFcV0RK8Z/3df8Aif7x4xHol+P/AHkXxNd5jdxnviW70bdxkamJPe+J4rovgk+MB6Jf8SPDh6P/ANwSKdjXejbuMp8UW+Y3cZGpiT3xiOXRfBL8NX0Z+MR4YvmfNZD8U2+Y3cZ54pt8xu4xqIjvevy6Im+Fr6M/KeeFJ6M9wkI7Kt8xu4zzxXZ5h7jI1ER3xX4LoTTqq/Ms9wnotp4fpRx80H85B8W2eae6PF1nmnuk6iJPfFXfGPQjULut05yfn1TfdjaVNoaeigrY92lsssrrp3d+yqzBNakngRYM57GPtmkto361PdJez9XZS6upZHU5DDgc9HD8x1zY8k3vXbfXRB6waxqlwKqq8tRpgxUM/wDe6g8fLboABAGeOd29yhvp0jOLQXrfQq6uN8OLNEpdbFP2gXBB/HPGaZbds7W+Xej6K88Wv0iq9Lt5z0NjcOendIz2TNa59n3UvXdqz9bcjNzVZLotVaIqjf4MSa8+rePTALZvo2mlVVNXPAPutRZYOf05cqFOntYAtQDngxYjI6hiYTl1r0UUaSr9HpKOaByG37Cxa18jgd5sdHZJ1+19PTW2n2dpzWH4Waq7FmosA6g2Pq19S4kLZey3bI5vf3hggje4dkA1HZZJ8gAszHgqgux9gAnTeTX0a7TZlu4aTrDO5FgBHmpkjh1Eibn9HOxbtMFRazXWCTjJ6zk5J4mdHmbpxbuzsp46rTgoRtlyIWx9JZTTXVbabnVcNaQF3j7B0Dqk2ImhySk5Nt7xERBAiIgCIiAIiIAiIgCIiAeYlJqU9KjulcQCNZoKm6a1PuEgarkvo7OD0IfdMxEA1Oz6OdnH+px7GIlK/Rvs30JPtYzbogGuU8hdnr0aZfeSfzk+jk9pE+zp6x7szKRAIg2XQP6pPhE98XU+iT4RJUQCL4up9EnwiPF1Pok+ESVEAi+LqfRJ8IjxdT6JPhElRAIvi6n0SfCI8XU+iT4RJUQCL4up9EnwiejQVejT4RJMQCN4BV6NPhE88W0+iT4RJUQCJ4so9EnwiPFdHok+ESXEAh+KqPQp8Inh2Rp/Q1/CJNiAQDsbT+gr+ESk7D03oK/hEyMQDFtyd0h6dPX3SJq+RmgsG62mTHqyv4TPxANFu+ibZjHIS1PuWsPxzPE+ifZ467z7bP5Cb3EA1nQ8gtn1fZpz62ZmPzMzem2bTX9itV9gkuIAAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgH/9k=" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Porsche 718 Cayman GT4</h5>
                        <div className="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <h6>₹ 1.50 lakhs</h6>
                        <div className="d-flex justify-content-between">
                          <h6>1 ticket price</h6>
                          <a href="*" className="nav-link"><span className='text-org'>Details &gt;	&gt;</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 3cards --> */}
                  <div className="col-md-4">
                    <div className="card mb-2">
                      <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Porsche 718 Cayman GT4</h5>
                        <div className="d-flex justify-content-between">
                          <p>Class:</p>
                          <p>Premium</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Air Condition</p>
                          <p>Yes</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Body Style:</p>
                          <p>Sedan</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Transmission:</p>
                          <p>Automatic</p>
                        </div>
                        <h6>₹ 1.50 lakhs</h6>
                        <div className="d-flex justify-content-between">
                          <h6>1 ticket price</h6>
                          <a href="*" className="nav-link"><span className='text-org'>Details &gt;	&gt;</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='text-end'>
                    <span className='text-org'>&lt;	&lt; 1 &gt;	&gt;</span>
                  </p>
                  <p className='font-12'>The WAWrides platform is a blockchain-based system that enables users to invest in and partially own
                    high-end assets such as cars, yachts, and private jets. The platform utilizes
                    blockchain technology to tokenize ownership shares, allowing users to buy, sell, and trade these shares
                    on a secure and transparent platform. In addition to ownership, users can also use
                    the platform to rent these assets, making luxury travel and transportation more accessible to a wider
                    audience</p>

                  <p className='font-12'>Quick answers to the questions you may have. Checkout our <span className='text-org'>FAQs</span>  for any related information, by <span className='text-org'> clicking
                    here</span></p>

                  {/* <!--  --> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WawrideCardPage