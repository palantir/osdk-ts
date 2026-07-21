import{j as r,M as s}from"./iframe-4BKOAzHX.js";import{P as p}from"./pdf-viewer-DH70VMSe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dj76qiou.js";import"./preload-helper-BO4QJwpQ.js";import"./PdfRenderer-g8I4bGhH.js";import"./index-DJ53Sv_K.js";import"./PdfViewer-B35ZFb8q.js";import"./PdfViewer.module.css-DkweBFw8.js";import"./PdfViewerAnnotationLayer-ChpLluK5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DhTs0nzp.js";import"./PdfViewerOutlineSidebar-COypHft2.js";import"./PdfViewerSidebarHeader-CKBOccvz.js";import"./useBaseUiId-BYyHLbuZ.js";import"./useControlled-B7yq0oZo.js";import"./CompositeRoot-BDupjRqg.js";import"./CompositeItem-BHqnQa5y.js";import"./ToolbarRootContext-BcRvDpZg.js";import"./composite-KvIfntCm.js";import"./svgIconContainer-AOe-YNRh.js";import"./PdfViewerSearchBar-D1a47dCC.js";import"./chevron-up-CLD7qcKK.js";import"./chevron-down-CKliXFAW.js";import"./cross-CpJvS5n9.js";import"./PdfViewerSidebar-BDXOcJtR.js";import"./index-CCAGlBy6.js";import"./index-B6wYYUZ5.js";import"./index-CypjQWnn.js";import"./PdfViewerToolbar-2wsg0lTf.js";import"./Button-DlKA6KYJ.js";import"./chevron-right-Dg6JFpFY.js";import"./Input-D8FH1XsG.js";import"./search-CM3cO5Mi.js";import"./spin-BQBfQVdw.js";import"./error-CuEUY6i9.js";import"./withOsdkMetrics-BlEyaYx5.js";import"./makeExternalStore-lVt5fFow.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
