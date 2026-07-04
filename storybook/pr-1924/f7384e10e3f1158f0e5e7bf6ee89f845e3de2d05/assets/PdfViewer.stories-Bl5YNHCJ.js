import{j as r,M as s}from"./iframe-CnOefK-5.js";import{P as p}from"./pdf-viewer-Du38Zd4T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B1x46zoh.js";import"./preload-helper-BejuJ81E.js";import"./PdfRenderer-qcF_lpde.js";import"./index-E94A3ff2.js";import"./PdfViewer-CKch1yZ2.js";import"./PdfViewer.module.css-CG8fSjNF.js";import"./PdfViewerAnnotationLayer-ClE8d1Of.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9ecohxf.js";import"./PdfViewerOutlineSidebar-zjCCy9Y-.js";import"./PdfViewerSidebarHeader-alnqMKaH.js";import"./useBaseUiId-C2d4bE4n.js";import"./useControlled-CROLlR0c.js";import"./CompositeRoot-DHnYkxP6.js";import"./CompositeItem-Czvm_wmz.js";import"./ToolbarRootContext-DVRYRJ1i.js";import"./composite-DmzoJsxG.js";import"./svgIconContainer-DO8BkQTj.js";import"./PdfViewerSearchBar-BCtxWKUZ.js";import"./chevron-up-ErjswFFm.js";import"./chevron-down-Bad43Icm.js";import"./cross-DT0SMijZ.js";import"./PdfViewerSidebar-CNOvT0Lr.js";import"./index-CXUgI3x9.js";import"./index-Z_XwUXDu.js";import"./index-DnebXR8d.js";import"./PdfViewerToolbar-BaAqJRi5.js";import"./Button-HmiOJfM7.js";import"./chevron-right-fJwfNO_D.js";import"./Input-B_YvQWj6.js";import"./search-DHhMSbgK.js";import"./spin-04p3JIu1.js";import"./error-CyRWISwJ.js";import"./withOsdkMetrics-Ie5qsKmF.js";import"./makeExternalStore-GqYkByi5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
