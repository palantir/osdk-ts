import{j as r,M as s}from"./iframe-DqIzSpCg.js";import{P as p}from"./pdf-viewer-DsADPYsE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xDX52E8m.js";import"./preload-helper-R5GmqVN8.js";import"./PdfRenderer-BUTGXW5K.js";import"./index-BrnybYQf.js";import"./PdfViewer-BQ3dxb7j.js";import"./PdfViewer.module.css-C0QjIwsH.js";import"./PdfViewerAnnotationLayer-owAiMFXh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAzEXhQ6.js";import"./PdfViewerOutlineSidebar-Nh4pSlI7.js";import"./PdfViewerSidebarHeader-DgTd5IpC.js";import"./useBaseUiId-Cqtekamh.js";import"./useControlled-C3eA8reA.js";import"./CompositeRoot-ZG8LEHpP.js";import"./CompositeItem-DnElVRNo.js";import"./ToolbarRootContext-yHYhRp3F.js";import"./composite-Df5qJXaR.js";import"./svgIconContainer-Ob4Yg7Br.js";import"./PdfViewerSearchBar-Cyk-iwGj.js";import"./chevron-up-gRnh2AjC.js";import"./chevron-down-CAfWuvJU.js";import"./cross-Dc0LE15P.js";import"./PdfViewerSidebar-DRWP2Mng.js";import"./index-DXjCR0SH.js";import"./index-CH70aXwo.js";import"./index-DGMFLn0J.js";import"./PdfViewerToolbar-CdhUrWTT.js";import"./Button-BKX_91Hc.js";import"./chevron-right-D4gKguid.js";import"./Input-C954CXtm.js";import"./search-DOaKOXdE.js";import"./spin-C1LSsiNB.js";import"./error-DqiHWIhs.js";import"./withOsdkMetrics-toCmYVYF.js";import"./makeExternalStore-C1J_4LFW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
