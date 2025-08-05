import React from 'react';
import fotoCapa from '../../assets/sobre_mim_capa.png';
import PostModelo from '../PostModelo/PostModelo';
import fotoPc from '../../assets/fotoPc.png';
import './SobreMim.css';

export default function SobreMim(){
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className='subtitulo'>
                Olá, eu sou o Kauã 
            </h3>
            <img src={fotoPc} alt='fotoPc com código' className='fotoSobreMim'></img>

            <p className='paragrafo'> 
                Peter got out of bed feeling sad. He was tired of living and wanted to die.
            </p>
            <p className='paragrafo'>
                He would even ask people around him to help him die. They made suggestions, because they thought he was joking. One said that he should overdose on medicine; the other simply offered him a noose. 
            </p>
            <p className='paragrafo'>
                Peter was not satisfied with their answers. Then, Peter asked Sarah. Sarah was pretty and always smiling to everyone she talked to.
            </p>
            <p className='paragrafo'>
                She even talked to Peter, who was usually gloomy. Peter asked Sarah about how he should kill himself.
            </p>
            <p className='paragrafo'>
                Sarah just beamed and smiled at him sincerely. With that, Peter had a change of heart. Suddenly he was not filled with grief. Instead, he had a new purpose. Sarah did not help him die, she helped him find a reason to live.
            </p>
            <p className='paragrafo'>
                From that day on, Peter was a new person. He was happy and joyful. He even started to smile at people he met. He was grateful to Sarah for helping him find a reason to live.
            </p>
            <p className='paragrafo'>
                Peter and Sarah became good friends. They would often meet and talk about life. Peter was no longer sad, he was happy. He had found a reason to live, and it was all thanks to Sarah.
            </p>
            <p className='paragrafo'>
                Peter learned that sometimes, all it takes is a smile and a kind word to change someone's life. He was grateful to Sarah for helping him find a reason to live.
            </p>
            <p className='paragrafo'>
                Peter and Sarah remained friends for many years. They would often reminisce about the day they met and how Sarah's smile had changed Peter's life. Peter was no longer sad, he was happy. He had found a reason to live, and it was all thanks to Sarah.
            </p>
            

        </PostModelo>
        
    );
}