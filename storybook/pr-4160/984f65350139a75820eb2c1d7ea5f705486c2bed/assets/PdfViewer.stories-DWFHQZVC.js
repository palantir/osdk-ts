import{j as r,M as s}from"./iframe-B7lh4g6p.js";import{P as p}from"./pdf-viewer-k4A4MTwK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2aDWVwC.js";import"./preload-helper-Bs-nMSmN.js";import"./PdfViewer-Dd-crJR1.js";import"./index-DEvGhliI.js";import"./BasePdfViewer-BWh426vB.js";import"./BasePdfViewer.module.css-DbETzXqO.js";import"./PdfViewerAnnotationLayer-Bo3LpcZV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_Qo5aR-3.js";import"./PdfViewerOutlineSidebar-CQiOUGfm.js";import"./PdfViewerSidebarHeader-BSPofUWU.js";import"./useBaseUiId-Bb1FrUqT.js";import"./useControlled-CPKeQZ_f.js";import"./CompositeRoot-BS4ARwtN.js";import"./CompositeItem-DtBwKtoa.js";import"./ToolbarRootContext-oEsqExNC.js";import"./composite-Dkx2J5ep.js";import"./svgIconContainer-BNlhaeSZ.js";import"./PdfViewerSearchBar-Co3k_4lM.js";import"./chevron-up-B9RmgZf2.js";import"./chevron-down-B2xEAqn8.js";import"./cross-BYT7TYIn.js";import"./PdfViewerSidebar-B_-71LCD.js";import"./index-D2-d5N75.js";import"./index-DhDUpT6q.js";import"./index-DPe8iSwh.js";import"./PdfViewerToolbar-Qan-Fwev.js";import"./Button-Cdt1t7O2.js";import"./chevron-right-DTX3fYrA.js";import"./Input-Cv8mC2jD.js";import"./search-LFDcG9Bw.js";import"./spin-jwkBV6Kb.js";import"./error-CTtfffuQ.js";import"./withOsdkMetrics-FDsqzYBW.js";import"./makeExternalStore-DqOv6fSv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
