import{j as r,M as s}from"./iframe-CFnZv6W6.js";import{P as p}from"./pdf-viewer-CRjvr1GZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_cIryrM.js";import"./preload-helper-DaeNTAOB.js";import"./PdfViewer-CjWLSpGS.js";import"./index-CVGV4KeD.js";import"./BasePdfViewer-DOO2fLqj.js";import"./BasePdfViewer.module.css-UrQ1GNcU.js";import"./PdfViewerAnnotationLayer-B_zSp0iv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CN1QbKO9.js";import"./PdfViewerOutlineSidebar-DiIDAB8a.js";import"./PdfViewerSidebarHeader-CNlE64hn.js";import"./useBaseUiId-BHfosarc.js";import"./useControlled-C4TNuFLH.js";import"./CompositeRoot-D5wPUCZY.js";import"./CompositeItem-DPJBvKky.js";import"./ToolbarRootContext-CVCFeaES.js";import"./composite-DpDQBUJx.js";import"./svgIconContainer-Ds9wq937.js";import"./PdfViewerSearchBar-5qZAtr8V.js";import"./chevron-up-CuOWuH5a.js";import"./chevron-down-CzFq3N2b.js";import"./cross-C-tbaQSm.js";import"./PdfViewerSidebar-D7coVwQv.js";import"./index-BSlJchRS.js";import"./index-DxTVc7UT.js";import"./index-DqFASQeC.js";import"./PdfViewerToolbar-B_gh2SzW.js";import"./Button-DWKNQBaA.js";import"./chevron-right-DtNYXaVW.js";import"./Input-vKjFw9JB.js";import"./search-CtPaFwvz.js";import"./spin-Fllk15VM.js";import"./error-Dr-3Rs7Z.js";import"./withOsdkMetrics-BPf1l7aJ.js";import"./makeExternalStore-Di8vK866.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
