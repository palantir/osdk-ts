import{j as r,M as s}from"./iframe-BgXQ_2ZQ.js";import{P as p}from"./pdf-viewer-DdE7VHea.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-7sU-iPxv.js";import"./preload-helper-BidOVzf2.js";import"./PdfViewer-CNgL38_x.js";import"./index-Du7DARA2.js";import"./BasePdfViewer-DIYyHK6e.js";import"./BasePdfViewer.module.css-C9aNIRk9.js";import"./PdfViewerAnnotationLayer-CrVlHF5I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kPH7afgF.js";import"./PdfViewerOutlineSidebar-sgxXc-qj.js";import"./PdfViewerSidebarHeader-DqnX3AYH.js";import"./useBaseUiId-BDBZknBQ.js";import"./useControlled-BJTO4Tz0.js";import"./CompositeRoot-CDxZD_lV.js";import"./CompositeItem-BoTWi4na.js";import"./ToolbarRootContext-DnYkqago.js";import"./composite-DkGW9dlU.js";import"./svgIconContainer-Dt6fkfKI.js";import"./PdfViewerSearchBar-DERNs7BK.js";import"./chevron-up-DOlBMi8n.js";import"./chevron-down-xbEb9_oS.js";import"./cross-DjR1Bdqm.js";import"./PdfViewerSidebar-CHRzBpdx.js";import"./index-BR5r7qBw.js";import"./index-BrroAixZ.js";import"./index-BNVSiMmU.js";import"./PdfViewerToolbar-DwjQRltg.js";import"./Button-DyzWkyRc.js";import"./chevron-right-DgbYNyJ2.js";import"./Input-snLmBrpI.js";import"./search-DUa1f9S-.js";import"./spin-Cmg6tD_q.js";import"./error-DWfidi70.js";import"./withOsdkMetrics-DMzLVnra.js";import"./makeExternalStore-Bhk5996J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
