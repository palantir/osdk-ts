import{j as r,M as s}from"./iframe-aCq_g3w6.js";import{P as p}from"./pdf-viewer-DbxqJKK1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHrFA4zv.js";import"./preload-helper-UUSxO84G.js";import"./PdfRenderer-DuCagzJK.js";import"./index-CSsMTEyY.js";import"./PdfViewer-QVVzGEuG.js";import"./PdfViewer.module.css-5685CXnz.js";import"./PdfViewerAnnotationLayer-hkO5QpS9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DglnRMgb.js";import"./PdfViewerOutlineSidebar-Dzbm-EoQ.js";import"./PdfViewerSidebarHeader-DXhUUnAM.js";import"./useBaseUiId-BNG6DLH2.js";import"./useControlled-C35FdDTC.js";import"./CompositeRoot-DgeLIlZK.js";import"./CompositeItem-OApa3E9B.js";import"./ToolbarRootContext-BzxLQKxD.js";import"./composite-BGN3oFgJ.js";import"./svgIconContainer-BOv-jsG1.js";import"./PdfViewerSearchBar-BePuF720.js";import"./chevron-up-fnhGQD_R.js";import"./chevron-down-DUptqSW1.js";import"./cross-BrgA3kIi.js";import"./PdfViewerSidebar-08HZMpIM.js";import"./index-D6Tuy83n.js";import"./index-CxZEKvWq.js";import"./index-2UiSVRF4.js";import"./PdfViewerToolbar-Y5PJaTEB.js";import"./Button-CSGA2Wxl.js";import"./chevron-right-D8WC1jQZ.js";import"./Input-KoZ5HftR.js";import"./search-DwsH7dY2.js";import"./spin-B1Ku_x1r.js";import"./error-DqgP0A5_.js";import"./withOsdkMetrics-CqGHF823.js";import"./makeExternalStore-B6rRcBgB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
