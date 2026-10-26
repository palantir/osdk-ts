import{j as r,M as s}from"./iframe-I-oDj4Zf.js";import{P as p}from"./pdf-viewer-BAn1yjAw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DKkxFmKu.js";import"./preload-helper-DoR3GGZy.js";import"./PdfViewer-CisyzZNQ.js";import"./index-QR0ynjTm.js";import"./BasePdfViewer-CpXQxI4H.js";import"./BasePdfViewer.module.css-BzH-iAXF.js";import"./PdfViewerAnnotationLayer-qkQSHLSO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BoR2IwbI.js";import"./PdfViewerOutlineSidebar-DIfAJFNu.js";import"./PdfViewerSidebarHeader-BIEC8wvU.js";import"./useBaseUiId-DbsMUGHz.js";import"./useControlled-CphiSNJu.js";import"./CompositeRoot-BZSNJ_Vm.js";import"./CompositeItem-Bh0NB-Cc.js";import"./ToolbarRootContext-DOAo9bSD.js";import"./composite-CVLqeN_f.js";import"./svgIconContainer-BrWiwUny.js";import"./PdfViewerSearchBar-Dev7XKJz.js";import"./chevron-up-C9-HH4Lo.js";import"./chevron-down-DsdifgPL.js";import"./cross-CX2gEjus.js";import"./PdfViewerSidebar-CL8W9TzA.js";import"./index-COac3hDI.js";import"./index-D2sLcc-K.js";import"./index-CPedUlI1.js";import"./PdfViewerToolbar-BzMMCeoA.js";import"./Button-DZTSIR38.js";import"./chevron-right-DRiubHY2.js";import"./Input-QRcBEz-L.js";import"./search-CIYeg_xA.js";import"./spin-jq7xDk7V.js";import"./error-DQf4Jva_.js";import"./withOsdkMetrics-CzZMIy3-.js";import"./makeExternalStore-DSBRYZ6v.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
