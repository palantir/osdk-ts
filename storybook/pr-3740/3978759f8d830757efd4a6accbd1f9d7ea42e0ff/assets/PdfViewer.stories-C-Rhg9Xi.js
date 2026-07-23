import{j as r,M as s}from"./iframe-C9l55MfW.js";import{P as p}from"./pdf-viewer-DXRUsHjZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBhsLpB_.js";import"./preload-helper-BaR7j1qy.js";import"./PdfRenderer-9zIC9cHb.js";import"./index-B8sSDI6e.js";import"./PdfViewer-C8alqCgD.js";import"./PdfViewer.module.css-BDWH1RlN.js";import"./PdfViewerAnnotationLayer-DxbT6ftX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CkNkyN8Q.js";import"./PdfViewerOutlineSidebar-CkCEgEKl.js";import"./PdfViewerSidebarHeader--Au_Lj8w.js";import"./useBaseUiId-ChnMimVR.js";import"./useControlled-D2BKU9rQ.js";import"./CompositeRoot-CIIkvTki.js";import"./CompositeItem-DE8DbRAW.js";import"./ToolbarRootContext-CKqEQDfC.js";import"./composite-BIs1fDYc.js";import"./svgIconContainer-B36bqId8.js";import"./PdfViewerSearchBar-Dqa_kaoh.js";import"./chevron-up-k7D1QFgA.js";import"./chevron-down-eHbfMIJ5.js";import"./cross-BiQ3YqUJ.js";import"./PdfViewerSidebar-CEQDmf1o.js";import"./index-CjA4akcY.js";import"./index-DO7KJbr1.js";import"./index-DgjXWxOU.js";import"./PdfViewerToolbar-B3OEnH8n.js";import"./Button-CoqVnaSH.js";import"./chevron-right-BnCWQE__.js";import"./Input-Bv6ABtkM.js";import"./search-CxxUnvng.js";import"./spin-DSKBxJFW.js";import"./error-DWli6fEA.js";import"./withOsdkMetrics-DMdezYaS.js";import"./makeExternalStore-grWifcgC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
