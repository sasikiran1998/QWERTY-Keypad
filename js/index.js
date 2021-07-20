const keys = document.querySelectorAll('.key');
        const regulars = document.querySelectorAll('.key.text');
        
        const text=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'];
        
        keys.forEach(key => {
            key.addEventListener('click', () => playNote(key))
        })

        document.addEventListener('keydown', e => {
            if (e.repeat) return
            const key = e.key
            const whiteKeyIndex = text.indexOf(key)
            if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex])
           
        })

        let playNote = (key) => {
            const noteSound = document.getElementById(key.dataset.note)
            noteSound.currentTime = 0
            noteSound.play()
            key.classList.add('active')
            noteSound.addEventListener('ended', () => {
                key.classList.remove('active')
            })
        }