import { useState } from "react"
import Layout from '../components/Layout'

export default function Fuzzy({ posts }) {

    const [Crow, setCrow] = useState(3)

    const setMatrix = (Crow) => {
        if (Crow > 9 || Crow <0) {
            setCrow(9)
        }else {
            setCrow(Crow)
        }
    }

    const createMatrix = (Crow) => {
        const matrix =  Array(Crow).fill({
            head : null,
            body : []
        })

        for (let i=0; i<Crow;i++){

            let temp_matrix = []
            temp_matrix.push(<th className="border max-w-xs">C{i+1}</th>)
            for (let j=0; j<Crow;j++){
                temp_matrix.push(<td className="border max-w-xs"><input className="w-1/3" type="number"/><input className="w-1/3" type="number"/><input className="w-1/3" type="number"/></td>)
                
            }
                
            matrix[i] = {
                head : <th className="border max-w-xs">C{i+1}</th>,
                body : temp_matrix,
            }
        }
        return matrix
    }
    
    return (
        <div>
            <Layout title="Fuzzy AHP">
                <div className="bg-white">
                    <div className="mt-24">
                        <div className="container md:mx-auto px-6 md:px-0">
                            <h5 className="flex font-semibold text-3xl w-auto md:mx-auto">Matrix Head</h5>
                            <input className="bg-white h-10 w-full p-3 border-2 rounded text-sm focus:outline-none focus:border-one" onChange={
                                    event => {
                                        
                                        setMatrix(event.target.value)
                                    }
                                }/>
                            <table className="w-full">
                                <thead className="w-auto m-0">
                                    <tr>
                                        <th className="border"></th>
                                        {createMatrix(Crow).map(({head}) => {
                                            return (
                                                    head
                                            );
                                        })}
                                    </tr>
                                </thead>
                                <tbody className="w-auto m-0 text-center">
                                        {createMatrix(Crow).map(({body}) => {
                                            return (
                                                    <tr>
                                                        {body}
                                                    </tr>
                                                    
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}