import{j as r,M as s}from"./iframe-MV3gBuhb.js";import{P as p}from"./pdf-viewer-DFtrSmXE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CbMTYn1Z.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-B-AWqSTc.js";import"./index-CPeLDKLC.js";import"./PdfViewer-DJcEhKQS.js";import"./PdfViewer.module.css-DueQN5CM.js";import"./PdfViewerAnnotationLayer-C2-Ek6ic.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BA_Vy7Ei.js";import"./PdfViewerOutlineSidebar-BE-rBu_L.js";import"./PdfViewerSidebarHeader-iXIepgsH.js";import"./useBaseUiId-DJc1IzLT.js";import"./useControlled-BAuu-oXX.js";import"./CompositeRoot-D9HBDvUV.js";import"./CompositeItem-CqaTd4ET.js";import"./ToolbarRootContext-BV1tTkw1.js";import"./composite-JnoI1v48.js";import"./svgIconContainer-C29zPRQZ.js";import"./PdfViewerSearchBar-BI2HHfsv.js";import"./chevron-up-DvdiHWpx.js";import"./chevron-down-Dq4ZWi7O.js";import"./cross-D-dx7OQY.js";import"./PdfViewerSidebar-y0A_DySf.js";import"./index-CSUITZSY.js";import"./index-DUyzW1cO.js";import"./index-DS4B-Z3C.js";import"./PdfViewerToolbar-BBChRDAW.js";import"./Button-BCOIsKOG.js";import"./chevron-right-DOX5kKpx.js";import"./Input-CFAsB6-e.js";import"./search-Dx6v8zL9.js";import"./spin-Da5TgMSh.js";import"./error-DZQYXIrZ.js";import"./withOsdkMetrics-CCiJ9j-V.js";import"./makeExternalStore-BXBS29Jd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
