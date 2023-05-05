<script>
	import { fly, fade } from 'svelte/transition';
</script>

<div
	class="flex flex-col items-center mx-auto font-montserrat font-medium text-xs leading-6 tracking-wider text-gray-800 gap-8 px-6 mt-8"
>
	<div
		in:fade={{ duration: 900, delay: 1200 }}
		out:fade={{ duration: 500 }}
		class="grid grid-cols-2 gap-10"
	>
		<h2 class="text-3xl col-span-2 text-center mt-2 sm:text-left ">Quartely Labour Force Survey 2022</h2>
		<p class="text-base leading-8 font-normal text-justify col-span-2 sm:col-span-1">
			Currently, I am actively engaged in analyzing the Quarterly Labour Force Survey of Q4 2022,
			encompassing a sample of 65115 participants, procured from the public datasets of Statistics
			South Africa. Thus far, my work has revealed intriguing insights, specifically with regard to
			the gender, racial, and education composition of the sample data.
		</p>
		<p class="text-base leading-8 font-normal text-justify col-span-2 sm:col-span-1">
			My approach has involved utilizing <span class="italic">Jupyter Notebooks</span>,
			<span class="italic">Numpy</span>
			, <span class="italic">Pandas</span>, and <span class="italic">Matplotlib</span> to compile, refine,
			and visualize the data. I am steadfastly dedicated to this project and anticipate attaining further
			insights while commencing the development of predictive models founded upon this dataset. Kindly
			refer to the charts below, presenting the relevant findings obtained from the dataset.
		</p>
	</div>

	<div class="mt-10">
		<img src="images/statss_sa/gender_distribution.png" alt="Gender distribution of sample data." />
		<p class="text-base leading-8 font-normal text-center col-span-1 mt-5">
			The above chart displays the gender distribution of the sample data.
		</p>
	</div>
	<br />
	<div>
		<img
			src="images/statss_sa/racial_distribution.png"
			alt="Racial distribution of sample data in raw numbers."
		/>
		<p class="text-base leading-8 font-normal text-center col-span-1 mt-5">
			The above chart displays the racial distribution of the sample data in raw numbers.
		</p>
	</div>
	<br />
	<div>
		<img
			src="images/statss_sa/racial_distribution_by_percentage.png"
			alt="Racial distribution of sample data in percentages."
		/>
		<p class="text-base leading-8 font-normal text-center col-span-1 mt-5">
			The displayed chart compares the racial distribution of the sample data in percentages across
			different groups.
		</p>
	</div>
	<br />
	<div>
		<img
			src="images/statss_sa/education_distribution.png"
			alt="Education distribution of sample data in raw numbers."
		/>
		<p class="text-base leading-8 font-normal text-center col-span-1 mt-5">
			The displayed chart compares the distribution of the sample data based on the educational
			attainment of Grade 12. The results indicate a significant number of individuals who are
			employed or unemployed that have not completed the highest qualification in secondary
			education. This suggests a potential impact on employment opportunities and household income.
		</p>
	</div>
	<br />
	<div>
		<img
			src="images/statss_sa/higher_edu_racial_composition_by_percentage.png"
			alt="higher education composition by race in percentages."
		/>
		<p class="text-base leading-8 font-normal text-center col-span-1 mt-5">
			The chart above provides a detailed breakdown of the racial composition of individuals who
			have acquired Grade 12 or higher. It examines each racial group's level of education
			attainment, ranging from college/tvet to postgraduate studies, allowing for a comparative
			analysis. The data reveals that the African/Black racial group dominates the attainment of
			lower NQF qualifications such as college/tvet and undergraduate degrees. A fact not too
			surprising considering the group's contribution to the sample's population. However, as the
			level of qualification increases, this group's contribution decreases. An investigation into
			the reasons behind this trend is ongoing, and a comprehensive report will be published upon
			the project's completion.
		</p>
	</div>

	<a
		in:fade={{ duration: 1200, delay: 4200 }}
		out:fade={{ duration: 500 }}
		href="https://www.linkedin.com/in/lunga-qaba-b19325236"
		class="flex items-center justify-center w-48 h-10 mx-auto my-20 font-montserrat font-semibold text-lg leading-6 text-white transition duration-300 bg-gray-700 border border-gray-700 shadow-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
	>
		<p>Contact me</p>
	</a>
</div>
