import{j as r,M as s}from"./iframe-rpiRS41X.js";import{P as p}from"./pdf-viewer-0kJ6pOv5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BT9PONw3.js";import"./preload-helper-BvYsjbK4.js";import"./PdfRenderer-BUaFlfmA.js";import"./index-CSoWGyET.js";import"./PdfViewer-BITxTQ7o.js";import"./PdfViewer.module.css-DZW1jQns.js";import"./PdfViewerAnnotationLayer-CRKJf9QP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GMT0JkYf.js";import"./PdfViewerOutlineSidebar-SjiyMcRE.js";import"./PdfViewerSidebarHeader-BQhMsLYn.js";import"./useBaseUiId-Bd1dL16r.js";import"./useControlled-Xnox6_xR.js";import"./CompositeRoot-D40y0_oC.js";import"./CompositeItem-VxTtFFWC.js";import"./ToolbarRootContext-D4NJqCgE.js";import"./composite-qK7plUwA.js";import"./svgIconContainer-uaJooQm8.js";import"./PdfViewerSearchBar-CCM4_d6y.js";import"./chevron-up-D26GRiGz.js";import"./chevron-down-56wpOY_8.js";import"./cross-CLzmU9Xm.js";import"./PdfViewerSidebar-D5aWRONO.js";import"./index-R9wSA61c.js";import"./index-Dgik_YNF.js";import"./index-7vAJQfTB.js";import"./PdfViewerToolbar-BCz2UbhG.js";import"./Button-BrmkJS1t.js";import"./chevron-right-dJalVa8B.js";import"./Input-Bj4aWrFM.js";import"./search-DnKtf28R.js";import"./spin-DQ7sxoHp.js";import"./error-B8hmh_oU.js";import"./withOsdkMetrics-BXqTPon6.js";import"./makeExternalStore-BBVbVeXR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
