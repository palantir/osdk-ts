import{j as r,M as s}from"./iframe-CV9AnRvZ.js";import{P as p}from"./pdf-viewer-wQoeSmFb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DAXRNiwk.js";import"./preload-helper-7FfFv9ik.js";import"./PdfViewer--kz1g89k.js";import"./index-Di1ZWUkk.js";import"./BasePdfViewer-83IBP7p0.js";import"./BasePdfViewer.module.css-BsfSMdWc.js";import"./PdfViewerAnnotationLayer-BY5ZQmPY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0ZgqCdW.js";import"./PdfViewerOutlineSidebar-CNHssz3a.js";import"./PdfViewerSidebarHeader-D5evP5lJ.js";import"./useBaseUiId-C1_GlfkL.js";import"./useControlled-D-7JcRiN.js";import"./CompositeRoot-D582HL5q.js";import"./CompositeItem-Bf5YN-0d.js";import"./ToolbarRootContext-BhRNTtAp.js";import"./composite-qPADmGy9.js";import"./svgIconContainer-CNjSdOBT.js";import"./PdfViewerSearchBar-BsVoo0ST.js";import"./chevron-up-BnAdrgWv.js";import"./chevron-down-DqetHEHw.js";import"./cross-DhIejhWj.js";import"./PdfViewerSidebar-CHxWwoqw.js";import"./index-B4-YpXrf.js";import"./index-igmFT0OY.js";import"./index-CmKxkFU5.js";import"./PdfViewerToolbar-BKNUtSaQ.js";import"./Button-DxiXB_zs.js";import"./chevron-right-BZBalvBE.js";import"./Input-dv3PsiKp.js";import"./search-DNk3MK5-.js";import"./spin-QFMEFCQ1.js";import"./error-BkY5gQM6.js";import"./withOsdkMetrics-zIgNwk4v.js";import"./makeExternalStore-DGTggbnP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
