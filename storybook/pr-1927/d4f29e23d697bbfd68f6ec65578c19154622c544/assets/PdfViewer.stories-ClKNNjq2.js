import{j as r,M as s}from"./iframe-CA9r65OT.js";import{P as p}from"./pdf-viewer-CalzWqsv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BOWIT2XN.js";import"./preload-helper-tCbzRVEA.js";import"./PdfRenderer-Ba38bVi6.js";import"./index-3l5n5zjF.js";import"./PdfViewer-CydzpxND.js";import"./PdfViewer.module.css-J6Ct3y4n.js";import"./PdfViewerAnnotationLayer-DOXgS54K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kCLVQoiy.js";import"./PdfViewerOutlineSidebar-nOlIg05u.js";import"./PdfViewerSidebarHeader-DWW0P76x.js";import"./useBaseUiId-BMe3a5v7.js";import"./useControlled-sJGz_czO.js";import"./CompositeRoot-DQYzNSmO.js";import"./CompositeItem-TexNzlTU.js";import"./ToolbarRootContext-g-i8chAa.js";import"./composite-DIPm2o_P.js";import"./svgIconContainer-CoGSYZNF.js";import"./PdfViewerSearchBar-DwtfTud7.js";import"./chevron-up-B2puoCwk.js";import"./chevron-down-DgvdmvON.js";import"./cross-BIMMbybY.js";import"./PdfViewerSidebar-CLK-9fUn.js";import"./index-CDue3-ep.js";import"./index-DHaBnaKt.js";import"./index-CllE9Qij.js";import"./PdfViewerToolbar-AxqgFw2q.js";import"./Button-sRGu_cmJ.js";import"./chevron-right-CGdVhM1B.js";import"./Input-Bb9nnqm9.js";import"./search-eEATc8rI.js";import"./spin-PhVbtkY9.js";import"./error-DnvhBUUT.js";import"./withOsdkMetrics-MvKispNs.js";import"./makeExternalStore-DVNiFfiz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
