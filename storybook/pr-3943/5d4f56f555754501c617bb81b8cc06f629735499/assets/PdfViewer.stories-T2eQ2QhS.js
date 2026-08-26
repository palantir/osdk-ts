import{j as r,M as s}from"./iframe-C8eg2aVK.js";import{P as p}from"./pdf-viewer-7-yHjsXP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DBRQt0Oa.js";import"./preload-helper-C2CvTlen.js";import"./PdfViewer-DX3fzkGB.js";import"./index-DwPFzsZq.js";import"./BasePdfViewer-CLiasc_Z.js";import"./BasePdfViewer.module.css-BvtzBz-i.js";import"./PdfViewerAnnotationLayer-SHPk3iuR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DqC6tM1U.js";import"./PdfViewerOutlineSidebar-Cg2YyWUj.js";import"./PdfViewerSidebarHeader-BLSYlKA7.js";import"./useBaseUiId-DXPA-GsQ.js";import"./useControlled-DVBJV2vy.js";import"./CompositeRoot-DbUaYXMe.js";import"./CompositeItem-6_9MUd5U.js";import"./ToolbarRootContext-CvBB5dRJ.js";import"./composite-CEgtyNx-.js";import"./svgIconContainer-DyXK-o1P.js";import"./PdfViewerSearchBar-bPqxaCLg.js";import"./chevron-up-J9-xNfBD.js";import"./chevron-down-UzOgz9cR.js";import"./cross-DP1qntav.js";import"./PdfViewerSidebar-BX6M2EvS.js";import"./index-CBQZe3n0.js";import"./index-C0Un304-.js";import"./index-ZVVJNOJS.js";import"./PdfViewerToolbar--lOJ2yJw.js";import"./Button-CHkJdegF.js";import"./chevron-right-DGAIU8z0.js";import"./Input-C8xPJvAo.js";import"./search-CbO7NZxO.js";import"./spin-CVdo1YLG.js";import"./error-U6-2l1WQ.js";import"./withOsdkMetrics-BHO_8kDg.js";import"./makeExternalStore-C7CnX90v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
