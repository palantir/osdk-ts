import{j as r,M as s}from"./iframe-CYldCnGD.js";import{P as p}from"./pdf-viewer-D7H4WqxW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--vTbAQ3G.js";import"./preload-helper-D83jK9dp.js";import"./PdfRenderer-Jt5ev-AN.js";import"./index-Dk842-I6.js";import"./PdfViewer-C6PmpCrV.js";import"./PdfViewer.module.css-DugVeW6r.js";import"./PdfViewerAnnotationLayer-C-w9TI4m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cnz3zo5y.js";import"./PdfViewerOutlineSidebar-B1aB92Mb.js";import"./PdfViewerSidebarHeader-DwPw2Zug.js";import"./useBaseUiId-3gcUh3x_.js";import"./useControlled-_faCI7Qf.js";import"./CompositeRoot-3gcp4JK5.js";import"./CompositeItem-BCxD5w-u.js";import"./ToolbarRootContext-zgHJbPne.js";import"./composite-C8RXtb6D.js";import"./svgIconContainer-CIQly-CR.js";import"./PdfViewerSearchBar-CStf9InN.js";import"./chevron-up-D_o47xnC.js";import"./chevron-down-B4mO7Rnp.js";import"./cross-BSECteXn.js";import"./PdfViewerSidebar-xtNvHbPp.js";import"./index-wm6d9Hb7.js";import"./index-oSG7gC6J.js";import"./index-DKy92Rhg.js";import"./PdfViewerToolbar-DjXDlUQo.js";import"./Button-CN8pOJ9l.js";import"./chevron-right-ClrJMvpC.js";import"./Input-B40LOt8Z.js";import"./search-CTxjB9si.js";import"./spin-B6ZSDB-a.js";import"./error-ssch54vp.js";import"./withOsdkMetrics-KwpXosWm.js";import"./makeExternalStore-vFxxqEzr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
