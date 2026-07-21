import{j as r,M as s}from"./iframe-BrPzj4JS.js";import{P as p}from"./pdf-viewer-DX4AL1ZC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bl_8VFxS.js";import"./preload-helper-Cs48bxEq.js";import"./PdfRenderer-CbbDmZ14.js";import"./index-KRJwl6lJ.js";import"./PdfViewer-wVmXbsHn.js";import"./PdfViewer.module.css-Du4rhuUh.js";import"./PdfViewerAnnotationLayer-sYR1Qhl3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRhSIxN0.js";import"./PdfViewerOutlineSidebar-DqUbGR26.js";import"./PdfViewerSidebarHeader-DFMt8bTx.js";import"./useBaseUiId-C1IVEUu0.js";import"./useControlled-81B9KEVs.js";import"./CompositeRoot-CHe080QQ.js";import"./CompositeItem-BHoTN6nd.js";import"./ToolbarRootContext-B9kw_RNO.js";import"./composite-c1IVu92X.js";import"./svgIconContainer-Dpfdk41P.js";import"./PdfViewerSearchBar-Ck7bs54-.js";import"./chevron-up-FQQ0HYr1.js";import"./chevron-down-Cg8-4eUy.js";import"./cross-BTKNx0tq.js";import"./PdfViewerSidebar-BjlmBVKq.js";import"./index-DQ5gmqne.js";import"./index-CnJmd38Y.js";import"./index-Bd7k9Zqu.js";import"./PdfViewerToolbar-DN4eN0Ic.js";import"./Button-CG6gF7Jm.js";import"./chevron-right-CBzUdCIf.js";import"./Input-Bq7aAMSS.js";import"./search-C96msPus.js";import"./spin-h61j74Jw.js";import"./error-C68wTVTT.js";import"./withOsdkMetrics-Ym8zEuUE.js";import"./makeExternalStore-BoSV2dxm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
