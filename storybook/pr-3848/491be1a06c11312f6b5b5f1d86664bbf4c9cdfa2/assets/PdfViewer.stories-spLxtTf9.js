import{j as r,M as s}from"./iframe-BH5IiT7r.js";import{P as p}from"./pdf-viewer-DvfitMXN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3Dbqipwy.js";import"./preload-helper-CgcnXVY5.js";import"./PdfRenderer-BAnaxk20.js";import"./index-C-xq5Jew.js";import"./PdfViewer-Ch2YDvVm.js";import"./PdfViewer.module.css-CYgQAJ5S.js";import"./PdfViewerAnnotationLayer-BgLGa3o9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6CFGfDT.js";import"./PdfViewerOutlineSidebar-B7kPj30N.js";import"./PdfViewerSidebarHeader-xLAAbZnD.js";import"./useBaseUiId-BT9W5-EQ.js";import"./useControlled-CWW3ek2h.js";import"./CompositeRoot-DQtJ0NAx.js";import"./CompositeItem-DLW8zfDE.js";import"./ToolbarRootContext-BVDM8PzK.js";import"./composite-zGPWEU1s.js";import"./svgIconContainer-GOdrTkUX.js";import"./PdfViewerSearchBar-CuKS5d1V.js";import"./chevron-up-CJaJShH2.js";import"./chevron-down-DlwuI3Cv.js";import"./cross-ffgBmB0d.js";import"./PdfViewerSidebar-rAdRcjco.js";import"./index-D0K_ANpa.js";import"./index-CgtSgOie.js";import"./index-17g8derX.js";import"./PdfViewerToolbar-ndHd010I.js";import"./Button-BFL5vhLR.js";import"./chevron-right-CEeZ3aiQ.js";import"./Input-BFWuvbJ_.js";import"./search-BDtWZjZ5.js";import"./spin-DnFzO3ms.js";import"./error-BQnTtdHZ.js";import"./withOsdkMetrics-DGdq_Xe-.js";import"./makeExternalStore-Bf5Duafr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
