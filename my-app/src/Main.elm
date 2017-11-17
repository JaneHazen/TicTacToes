module Main exposing (..)

import Html exposing (..)


---- PROGRAM ----


main : Program Never Model Msg
main =
    Html.program
    { init = (init, Cmd.none)
      ,view = view
      , update = update
      , subscriptions = \_ -> Sub.none
    }

---- MODEL ----


type alias Model =
    {
    turn: String
    , winner: Bool
    }


init: Model
init = {
    turn = "X"
    , winner =  False
    }




---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div []
        [ul[]]






