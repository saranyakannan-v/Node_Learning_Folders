    /*------Method 1 : Regular Function---------
                                                      const square = function(x) {
                                                      return x * x
                                                     }
                                                    console.log(square(3))
                                                    
                                        */

    /*-------Method 2 : Arrow Function--------

    const square = (x) => {
        return x * x
    }
    console.log(square(3)) 
    
    */

    /* -------Method 3 : Arrow Function------- 

    const square = (x) => x * x
    console.log(square(3)) 
    
    */
    //--------Method 4----------

    const events = {
        name: 'Birthday Party',
        guestList: ['Mom', 'Dad'],
        printGuestList() {
            console.log('Guest List is ' + this.name)
            this.guestList.forEach((guest) => {
                console.log(guest + ' is attending ' + this.name)
            })
        }
    }
    events.printGuestList()