import{j as r,M as s}from"./iframe-0PZo-oAP.js";import{P as p}from"./pdf-viewer-BWLJGoqt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AWAZxh1d.js";import"./preload-helper-rwVKc8sx.js";import"./PdfRenderer-BdMdeNQL.js";import"./index-DoYgLsnC.js";import"./PdfViewer-Cdpq79Kz.js";import"./PdfViewer.module.css-B7AZRX4V.js";import"./PdfViewerAnnotationLayer-g-_6Ppdr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWDaja0r.js";import"./PdfViewerOutlineSidebar-Dk8HoHHj.js";import"./PdfViewerSidebarHeader-BRCnywzG.js";import"./useBaseUiId-BqeEgC4C.js";import"./useControlled-CZvu974P.js";import"./CompositeRoot-hC4gZ7Ue.js";import"./CompositeItem-TFaLn5I1.js";import"./ToolbarRootContext-HlHBpyAJ.js";import"./composite-D1jNYFUF.js";import"./svgIconContainer-eNzDG0SR.js";import"./PdfViewerSearchBar-DF6wTFOf.js";import"./chevron-up-Hy3qot4b.js";import"./chevron-down-BNE_hdr-.js";import"./cross-BuXenLOv.js";import"./PdfViewerSidebar-DFGtONfH.js";import"./index-DJ9gJd6E.js";import"./index-hhz9HxKB.js";import"./index-BYQWYbBn.js";import"./PdfViewerToolbar-C8kw-XxW.js";import"./Button--90QuVpV.js";import"./chevron-right-B-EOXEmu.js";import"./Input-DoxpwNaD.js";import"./search-BUeuR5YZ.js";import"./spin-BfgBfpId.js";import"./error-C-sMJ0No.js";import"./withOsdkMetrics-HhY0bTfQ.js";import"./makeExternalStore-AeGc76gb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
