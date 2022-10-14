import { action, makeAutoObservable, observable } from "mobx"

class GlobalStore {
    constructor() {
        this.user = "ibrahims",
            this.showUser = false

        makeAutoObservable(this, {
            user: observable,
            setUser: action,
        })
    };
    setUser = (user) => { this.user = user };
    toggleUser = () => this.showUser = !this.showUser
}

export default GlobalStore