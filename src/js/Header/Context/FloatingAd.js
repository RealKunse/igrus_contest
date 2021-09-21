let context = '';

for(let i =0; i< 999; i++){
    context += `안녕하세요!<br/>`
}

const FloatingAd = () => {

    return (
        <div>
            ${context}
        </div>
    );
}

export default FloatingAd