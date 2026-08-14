import{j as r,M as s}from"./iframe-BWtbK-6e.js";import{P as p}from"./pdf-viewer-CqhfAkeT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B1EE4-5K.js";import"./preload-helper-D-SpX73X.js";import"./PdfViewer-BAJQwj-c.js";import"./index-BJRZeoAy.js";import"./BasePdfViewer-CkfLdXTp.js";import"./BasePdfViewer.module.css-RIcYwpfy.js";import"./PdfViewerAnnotationLayer-nTvISILA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dg_rrNQd.js";import"./PdfViewerOutlineSidebar-xinngEpN.js";import"./PdfViewerSidebarHeader-C2TldSbd.js";import"./useBaseUiId-p9hIi61X.js";import"./useControlled-C9p9N_86.js";import"./CompositeRoot-p9FcxSb4.js";import"./CompositeItem-14mpYRhD.js";import"./ToolbarRootContext-DLdfgRBt.js";import"./composite-O3B6JlFs.js";import"./svgIconContainer-tYWwIhLy.js";import"./PdfViewerSearchBar-DQroLVbl.js";import"./chevron-up-gPE_OO3v.js";import"./chevron-down-D1Mpjl8C.js";import"./cross-BbOW2-LY.js";import"./PdfViewerSidebar-Cq8OuUqk.js";import"./index-CDa_2TTR.js";import"./index-DiSQQItY.js";import"./index-D3iqlyMR.js";import"./PdfViewerToolbar-CQqAx4NW.js";import"./Button-B0i6dGlw.js";import"./chevron-right-C403HOf3.js";import"./Input-BPHe4LBr.js";import"./search-BR8rsC3q.js";import"./spin-D2FdB1dC.js";import"./error-kr-jwrPU.js";import"./withOsdkMetrics-DQ89NQ44.js";import"./makeExternalStore-1AVtHYwG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
