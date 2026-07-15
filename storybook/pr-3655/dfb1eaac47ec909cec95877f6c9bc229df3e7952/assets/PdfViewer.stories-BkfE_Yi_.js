import{j as r,M as s}from"./iframe-x-EkXKwC.js";import{P as p}from"./pdf-viewer-YvahlzY6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7TIvhkY.js";import"./preload-helper-DkSTjVgo.js";import"./PdfRenderer-BTZNkQNk.js";import"./index-B2dWK80O.js";import"./PdfViewer-CVTcb2DA.js";import"./PdfViewer.module.css-CTMUjoVE.js";import"./PdfViewerAnnotationLayer-C91WSlrX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C62XCCGj.js";import"./PdfViewerOutlineSidebar-CZq7_7-r.js";import"./PdfViewerSidebarHeader-BMNEVibn.js";import"./useBaseUiId-DKZfTFRk.js";import"./useControlled-Fylp3L4L.js";import"./CompositeRoot-Bf10OKLQ.js";import"./CompositeItem-8uZrMEeY.js";import"./ToolbarRootContext-BOYe-MJ6.js";import"./composite-CWs4svrB.js";import"./svgIconContainer-Cx0ByDhV.js";import"./PdfViewerSearchBar-0WPvMiDy.js";import"./chevron-up-BcACZuvy.js";import"./chevron-down-DwQqn4mC.js";import"./cross-HOK30F7Y.js";import"./PdfViewerSidebar-CEGMfP_S.js";import"./index-C9TLjHrB.js";import"./index-BZNo1s6y.js";import"./index-fnlWMt0W.js";import"./PdfViewerToolbar-NDA0xo1z.js";import"./Button-NTh2X_Ck.js";import"./chevron-right-BFwMCWmE.js";import"./Input-DUn2lO0X.js";import"./search-BbuzKBph.js";import"./spin-ChAc7dJa.js";import"./error-DBG3Fpck.js";import"./withOsdkMetrics-D9Ylyz18.js";import"./makeExternalStore-C1jkQbmp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
