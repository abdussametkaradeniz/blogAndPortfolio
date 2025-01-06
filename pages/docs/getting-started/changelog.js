// import node module libraries
import { Col, Row, Alert } from 'react-bootstrap';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';

// import sub components
import Version_01_00_00 from 'sub-components/dashboard/changelog/Version_01_00_00';
import Version_01_00_01 from 'sub-components/dashboard/changelog/Version_01_00_01';
import Version_02_00_00 from 'sub-components/dashboard/changelog/Version_02_00_00';
import Version_02_00_01 from 'sub-components/dashboard/changelog/Version_02_00_01';
import Version_02_01_00 from 'sub-components/dashboard/changelog/Version_02_01_00';
import Version_02_01_01 from 'sub-components/dashboard/changelog/Version_02_01_01';
import Version_02_02_00 from 'sub-components/dashboard/changelog/Version_02_02_00';
import Version_02_02_01 from 'sub-components/dashboard/changelog/Version_02_02_01';
import Version_02_03_00 from 'sub-components/dashboard/changelog/Version_02_03_00';
import Version_03_00_00 from 'sub-components/dashboard/changelog/Version_03_00_00';

// import widget/custom components
import { PageHeadingDescription } from 'widgets';

// import required data files
import { changelogLinks } from 'data/docs/SidebarContentLinks';

// import template components
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout';

const ChangeLog = () => {
	return (
		<DocsInnerLayout links={changelogLinks} id='intro'>
			<div className="docs-content mx-xxl-9">

				<PageHeadingDescription
					title="Changelog"
					description="We’re constantly improving & updating Geeks. See the latest features and improvements."
				/>


				<hr className="mb-5 mt-5" />
				<Row>
					<Col xl={12} lg={12} md={12} sm={12} xs={12}>
						<Alert variant="warning" className="justify-content-between d-flex">
							<div>
								<ExclamationTriangleFill size={20} className="me-1" />
							</div>
							<div className="ms-3">
								<Alert.Heading as="h4">
									Make a backup before updating.
								</Alert.Heading>
								Before updating, read the changelog carefully and please backup
								your project and customizations, because having a backup will keep
								you safe from losing anything.
							</div>
						</Alert>
					</Col>
				</Row>

				<div id='v300'></div>
				<hr className="mb-5 mt-5" />

				<Version_03_00_00 />

				<div id='v230'></div>
				<hr className="my-5" />

				<Version_02_03_00 />

				<div id='v221'></div>
				<hr className="my-5" />

				<Version_02_02_01 />

				<div id='v220'></div>
				<hr className="my-5" />

				<Version_02_02_00 />

				<div id='v211'></div>
				<hr className="my-5" />

				<Version_02_01_01 />

				<div id='v210'></div>
				<hr className="my-5" />

				<Version_02_01_00 />

				<div id='v201'></div>
				<hr className="my-5" />

				<Version_02_00_01 />

				<div id='v200'></div>
				<hr className="my-5" />

				<Version_02_00_00 />

				<div id='v101'></div>
				<hr className="my-5" />

				<Version_01_00_01 />

				<div id='v100'></div>
				<hr className="my-5" />

				<Version_01_00_00 />
			</div>
		</DocsInnerLayout>
	);
};

export default ChangeLog;
