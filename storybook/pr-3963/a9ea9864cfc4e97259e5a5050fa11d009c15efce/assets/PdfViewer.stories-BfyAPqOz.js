import{j as r,M as s}from"./iframe-BrJtcpJ-.js";import{P as p}from"./pdf-viewer-CcW3U4w9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cyw01BVs.js";import"./preload-helper-CuoRPrGF.js";import"./PdfViewer-cpHdOXBd.js";import"./index-nkhoJcGd.js";import"./BasePdfViewer-DZdilqNf.js";import"./BasePdfViewer.module.css-DoL9Mbm1.js";import"./PdfViewerAnnotationLayer-Ft6DALqL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnkqjpfG.js";import"./PdfViewerOutlineSidebar-CVqmVHUn.js";import"./PdfViewerSidebarHeader-CLmB6MZF.js";import"./useBaseUiId-DFIfo0ZP.js";import"./useControlled-Cd1hGYJl.js";import"./CompositeRoot-qKW1ZYvM.js";import"./CompositeItem-wSMz-Esy.js";import"./ToolbarRootContext-EqViDiBL.js";import"./composite-C-pSriHc.js";import"./svgIconContainer-DQxuiyDQ.js";import"./PdfViewerSearchBar-CO0NClV2.js";import"./chevron-up-IZxGNIji.js";import"./chevron-down-CoN2lN4l.js";import"./cross-d8c80yU_.js";import"./PdfViewerSidebar-CrqS8NGV.js";import"./index-CfmHUnMx.js";import"./index-Dwk1Vkcl.js";import"./index-B5ZK0sbN.js";import"./PdfViewerToolbar-DWE6ggh9.js";import"./Button-DcuDiaTG.js";import"./chevron-right-DRb5KU_P.js";import"./Input-DAryto7C.js";import"./search-X8eqGfVO.js";import"./spin-Bm1N8JSU.js";import"./error-DVsSmDYx.js";import"./withOsdkMetrics-DpnTSy7T.js";import"./makeExternalStore-DiNYJVVJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
