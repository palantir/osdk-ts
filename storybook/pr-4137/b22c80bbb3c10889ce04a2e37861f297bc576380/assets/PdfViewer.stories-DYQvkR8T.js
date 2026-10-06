import{j as r,M as s}from"./iframe-OTC_SZd0.js";import{P as p}from"./pdf-viewer-Dg_zyniq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CA8CZCSz.js";import"./preload-helper-1vGzY75P.js";import"./PdfViewer-BAh0Su5Z.js";import"./index-BoJX-ksu.js";import"./BasePdfViewer-DnY6YTXQ.js";import"./BasePdfViewer.module.css-CPzW-JHX.js";import"./PdfViewerAnnotationLayer-gk6VWqCS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DX8rDNgB.js";import"./PdfViewerOutlineSidebar-LkdH2c5q.js";import"./PdfViewerSidebarHeader-CcVE7Mo-.js";import"./useBaseUiId-CX-b-AU2.js";import"./useControlled-VRarZ-1e.js";import"./CompositeRoot-B-8BXpXq.js";import"./CompositeItem-JGQEQxmA.js";import"./ToolbarRootContext-BqVPJrpg.js";import"./composite-DmMBTPuj.js";import"./svgIconContainer-BcCPLcaR.js";import"./PdfViewerSearchBar-oZgfbnf8.js";import"./chevron-up-C2P_UCL2.js";import"./chevron-down-Bq3D3uVm.js";import"./cross-DqMcRqPP.js";import"./PdfViewerSidebar-BIbX1YiK.js";import"./index-D_oKlTjT.js";import"./index-CvsR1t9J.js";import"./index-UWWplry5.js";import"./PdfViewerToolbar-jXfzFTuX.js";import"./Button-Cp-yQ_WA.js";import"./chevron-right-VZ_deazk.js";import"./Input-RoK9jBHN.js";import"./search-CqHOzh_J.js";import"./spin-CpiLQIkE.js";import"./error-DRGNiszN.js";import"./withOsdkMetrics-BAfhlptC.js";import"./makeExternalStore-CJLgs2ND.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
