import{j as r,M as s}from"./iframe-BoMYVZ8P.js";import{P as p}from"./pdf-viewer-BJjXdjZz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DRQUNIXu.js";import"./preload-helper-BK2UTj0g.js";import"./PdfViewer-DaE_kwHl.js";import"./index-CWGS1jbk.js";import"./BasePdfViewer-D0AuO5PP.js";import"./BasePdfViewer.module.css-DwfuqRjy.js";import"./PdfViewerAnnotationLayer-BmwZWCco.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-r0bJv7E5.js";import"./PdfViewerOutlineSidebar-BIGpitFk.js";import"./PdfViewerSidebarHeader-7uGVVhXH.js";import"./useBaseUiId-B21DQZ5t.js";import"./useControlled-5CvF-qs0.js";import"./CompositeRoot-CPD9XcLC.js";import"./CompositeItem-Dh_pkc7t.js";import"./ToolbarRootContext-vNggTixJ.js";import"./composite-KNqjoGAg.js";import"./svgIconContainer-BVTvLC-e.js";import"./PdfViewerSearchBar-D8nDAsAa.js";import"./chevron-up-Du5mladb.js";import"./chevron-down-xbPqDJA1.js";import"./cross-C8gHFhcw.js";import"./PdfViewerSidebar-CEL_q539.js";import"./index-XV4DS-Dv.js";import"./index-BhWLpeRw.js";import"./index-ClsDrsL5.js";import"./PdfViewerToolbar-BlH4TIpV.js";import"./Button-B6yMNcTW.js";import"./chevron-right-BmRFgeel.js";import"./Input-BTERu37S.js";import"./search-DXLrUQjP.js";import"./spin-DXT_nJlY.js";import"./error-6dVeQLZ0.js";import"./withOsdkMetrics-DqIIQvI6.js";import"./makeExternalStore-DnUcW7Zh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
