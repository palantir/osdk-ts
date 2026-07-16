import{j as r,M as s}from"./iframe-DmanCMEI.js";import{P as p}from"./pdf-viewer-CnqsIv7E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4TxAwH6.js";import"./preload-helper-doTXSS6w.js";import"./PdfRenderer-mRRiQB8P.js";import"./index-BC1LLXL5.js";import"./PdfViewer-B6fFaRqj.js";import"./PdfViewer.module.css-BBoQqW3l.js";import"./PdfViewerAnnotationLayer-BOnScySy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DhUHivgM.js";import"./PdfViewerOutlineSidebar-qi6lolGp.js";import"./PdfViewerSidebarHeader-Cy-AMEFS.js";import"./useBaseUiId-D1zBL0DS.js";import"./useControlled-ACJqipIm.js";import"./CompositeRoot-Ba2SVAYD.js";import"./CompositeItem-ZWcQiJwA.js";import"./ToolbarRootContext-BAUHoLHk.js";import"./composite-CxTPo-Sh.js";import"./svgIconContainer-Cvoi4_Sl.js";import"./PdfViewerSearchBar-Dg1QtHfx.js";import"./chevron-up-DYiuqGVd.js";import"./chevron-down-DR3bdEe4.js";import"./cross-gbzL7JWR.js";import"./PdfViewerSidebar-CHrrvPSQ.js";import"./index-IbUXuY6k.js";import"./index-CcBFqiWq.js";import"./index-CfJBzqcM.js";import"./PdfViewerToolbar-D665Wy3L.js";import"./Button-4qJso63q.js";import"./chevron-right-C094ks8h.js";import"./Input-BJ05cG_c.js";import"./search-DuDCg1Pk.js";import"./spin-CnV7evJN.js";import"./error-Bw-mjGsQ.js";import"./withOsdkMetrics-CTv8KbCs.js";import"./makeExternalStore-34eYA6eS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
