import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';

const StateWise = () => {
	const [data, setdata] = useState([]);

	const getCovidData = async () => {
		const res = await fetch('https://api.covid19india.org/data.json');
		const actualData = await res.json();
		
		setdata(actualData.statewise);
	}
	console.log(data);

	useEffect(() =>{
		getCovidData();
	}, []);
	return(
		<>
		<h1 align='center'> StateWise Data </h1>
		<div>
			<div>
				<Table responsive>
					<thead>
						<tr>
							<th>State</th>
							<th>Confirmed</th>
							<th>recovered</th>
							<th>deaths</th>
							<th>active</th>
							<th>lastupdatedtime</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((currEle,index) =>{
								return(
									<tr>
										<th>{currEle.state}</th>
										<td>{currEle.confirmed}</td>
										<td>{currEle.recovered}</td>
										<td>{currEle.deaths}</td>
										<td>{currEle.active}</td>
										<td>{currEle.lastupdatedtime}</td>
									</tr>
									);
							})
						}
						
					</tbody>
				</Table>
			</div>
		</div>
		</>
		);
}

export default StateWise;