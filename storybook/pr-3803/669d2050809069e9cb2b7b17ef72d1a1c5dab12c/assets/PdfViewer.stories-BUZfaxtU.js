import{j as r,M as s}from"./iframe-Brj9Sbid.js";import{P as p}from"./pdf-viewer-POyaQG2N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ccwEr1zj.js";import"./preload-helper-oLILJVBL.js";import"./PdfRenderer-Cp1UqRma.js";import"./index-DvGT_2Rb.js";import"./PdfViewer-6LJeHF42.js";import"./PdfViewer.module.css-B0TrUxgl.js";import"./PdfViewerAnnotationLayer-BEICf1gt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtwqMriD.js";import"./PdfViewerOutlineSidebar-CNZEiSgK.js";import"./PdfViewerSidebarHeader-Bledqidz.js";import"./useBaseUiId-DtogBb13.js";import"./useControlled-DBZzTWcr.js";import"./CompositeRoot-CCoI4SK6.js";import"./CompositeItem-nP0KtzgK.js";import"./ToolbarRootContext-2sbonX9x.js";import"./composite-DqYqntwB.js";import"./svgIconContainer-BlZrGf5w.js";import"./PdfViewerSearchBar-CcNuMyk6.js";import"./chevron-up-Dzwu-Abk.js";import"./chevron-down-Bd6yaiTi.js";import"./cross-DGEDR-iR.js";import"./PdfViewerSidebar-CbYHgsFy.js";import"./index-BtFlrDNb.js";import"./index-BpZgmo5w.js";import"./index-CwFbsAXM.js";import"./PdfViewerToolbar-Bg8FgYKz.js";import"./Button-S6siwBTp.js";import"./chevron-right-iz8uPBEj.js";import"./Input-B_oVxWvi.js";import"./search-Bft1Biki.js";import"./spin-CwzAVN8X.js";import"./error-C5CNb-QP.js";import"./withOsdkMetrics-Cz2Nq3As.js";import"./makeExternalStore-JCpwxwwp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
