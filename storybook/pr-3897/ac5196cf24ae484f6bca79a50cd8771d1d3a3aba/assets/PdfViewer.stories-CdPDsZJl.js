import{j as r,M as s}from"./iframe-Bk-88sEf.js";import{P as p}from"./pdf-viewer-DDIv0vWa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qNYfEgR5.js";import"./preload-helper-DvYlXxAP.js";import"./PdfViewer-DVe-3edR.js";import"./index-CdHmGUcS.js";import"./BasePdfViewer-BJH4wJ5e.js";import"./BasePdfViewer.module.css-kRgolQ3P.js";import"./PdfViewerAnnotationLayer-ubjyWe-0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNCIWpUw.js";import"./PdfViewerOutlineSidebar-e-1d84_C.js";import"./PdfViewerSidebarHeader-DvWXMobs.js";import"./useBaseUiId-DES5vLxx.js";import"./useControlled-Cf_AiB9R.js";import"./CompositeRoot-W67SDXWK.js";import"./CompositeItem-DFySnHOB.js";import"./ToolbarRootContext-CXOIvMk7.js";import"./composite-BXvRBvIS.js";import"./svgIconContainer-CJ_w5BhJ.js";import"./PdfViewerSearchBar-DgursYgf.js";import"./chevron-up-BdBblGLw.js";import"./chevron-down-BZoWzWGC.js";import"./cross-CzjMymPe.js";import"./PdfViewerSidebar-CLQhbtqB.js";import"./index-CowKu27H.js";import"./index-DGx-W2pO.js";import"./index-6f90H5TT.js";import"./PdfViewerToolbar-3EYgt1ln.js";import"./Button-DB1Qd4Ey.js";import"./chevron-right-DnafLe5G.js";import"./Input-U7zXtF1y.js";import"./search-Cyt-_x8X.js";import"./spin-BBXkKuLX.js";import"./error-2_AseInf.js";import"./withOsdkMetrics-CcAilitW.js";import"./makeExternalStore-OahYSLFz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
