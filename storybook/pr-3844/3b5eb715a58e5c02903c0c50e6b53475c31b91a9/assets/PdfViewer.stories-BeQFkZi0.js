import{j as r,M as s}from"./iframe-DRBkbE1i.js";import{P as p}from"./pdf-viewer-yNJPXSoS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DxNRDveR.js";import"./preload-helper-Bhy-vhLy.js";import"./PdfRenderer-DTLJLyhD.js";import"./index-Ga9rMgQo.js";import"./PdfViewer-D_Bt8Phw.js";import"./PdfViewer.module.css-VXfJGlJo.js";import"./PdfViewerAnnotationLayer-RwA_I8CG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_BFIxq5.js";import"./PdfViewerOutlineSidebar-C3Ye34kM.js";import"./PdfViewerSidebarHeader-BRv1BqZY.js";import"./useBaseUiId-BZVOUgQ3.js";import"./useControlled-DwqloCO6.js";import"./CompositeRoot-CBhAW1Tj.js";import"./CompositeItem-DFqDcWEk.js";import"./ToolbarRootContext-D1BoJMvj.js";import"./composite-D-yjAodN.js";import"./svgIconContainer-GQruUs5P.js";import"./PdfViewerSearchBar-DSLz-4S5.js";import"./chevron-up-BFUiDtNt.js";import"./chevron-down-XFaMqkP6.js";import"./cross-0Mj0-pu3.js";import"./PdfViewerSidebar-DlwLCGFJ.js";import"./index-CV6Dvu1R.js";import"./index-BnWv0qmu.js";import"./index-ucRzESfs.js";import"./PdfViewerToolbar-CiNoYPuY.js";import"./Button-BLvvEGYy.js";import"./chevron-right-BdianrK2.js";import"./Input-5siurHkP.js";import"./search-BCFpbh-w.js";import"./spin-y7C7UAEi.js";import"./error-CZAmZxlc.js";import"./withOsdkMetrics-BK4JgsVP.js";import"./makeExternalStore-zFNhFc_7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
