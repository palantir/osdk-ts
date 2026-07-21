import{j as r,M as s}from"./iframe-DmCw4giF.js";import{P as p}from"./pdf-viewer-5B5Llm98.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Si62JlgB.js";import"./preload-helper-BqMEmH-P.js";import"./PdfRenderer-DHxK0cnu.js";import"./index-By5PjpkV.js";import"./PdfViewer-RgWSr9Vr.js";import"./PdfViewer.module.css-CO3TpcUB.js";import"./PdfViewerAnnotationLayer-Do6nDiW0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cvs5Yc2O.js";import"./PdfViewerOutlineSidebar-Dxi3asGB.js";import"./PdfViewerSidebarHeader-DiUX2DWI.js";import"./useBaseUiId-CMgGmprv.js";import"./useControlled-CUsv9bVr.js";import"./CompositeRoot-CA7PtBTv.js";import"./CompositeItem-CFe_vHTh.js";import"./ToolbarRootContext-DOoHomck.js";import"./composite-SBWrYybR.js";import"./svgIconContainer-BGxGx4oi.js";import"./PdfViewerSearchBar-Cuth8-zi.js";import"./chevron-up-6cBPkTVH.js";import"./chevron-down-CCFUjBzE.js";import"./cross-C5gUbpJ8.js";import"./PdfViewerSidebar-DPrgmm2F.js";import"./index-DERODYr7.js";import"./index-D7OuGC6M.js";import"./index-Cl_9RNwe.js";import"./PdfViewerToolbar-B4o4TKxO.js";import"./Button-Bg11yYPT.js";import"./chevron-right-DgALrfZ8.js";import"./Input-D0tfRr17.js";import"./search-BX5NV_IZ.js";import"./spin-A5T8-v_1.js";import"./error-BVtxD93c.js";import"./withOsdkMetrics-CQ_rVNLy.js";import"./makeExternalStore-CTtM4SD7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
