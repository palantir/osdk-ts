import{j as r,M as s}from"./iframe-CwsgVFCh.js";import{P as p}from"./pdf-viewer-C4DKsbzD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B3oRe3au.js";import"./preload-helper-CFSh68y9.js";import"./PdfViewer-8v1qqYIK.js";import"./index-5CttHDeo.js";import"./BasePdfViewer-BbKAT4yN.js";import"./BasePdfViewer.module.css-BZdUbRQD.js";import"./PdfViewerAnnotationLayer-DFOVZQJ8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CamUEvWt.js";import"./PdfViewerOutlineSidebar-BUCVKWbQ.js";import"./PdfViewerSidebarHeader-CIr3t5nV.js";import"./useBaseUiId-D1XXa7jM.js";import"./useControlled-CqLyQtsI.js";import"./CompositeRoot-Bkh8EgjV.js";import"./CompositeItem-DIa4PUtj.js";import"./ToolbarRootContext-Dw0uD7co.js";import"./composite-Db_ix37N.js";import"./svgIconContainer--s4psY3b.js";import"./PdfViewerSearchBar-BCrtimlY.js";import"./chevron-up-CWiCVa1C.js";import"./chevron-down-BMdcdoDb.js";import"./cross-BQFX_VX8.js";import"./PdfViewerSidebar-guRdCkUO.js";import"./index-qogJWmY0.js";import"./index-a2I8F2uY.js";import"./index-D0vP1fQ0.js";import"./PdfViewerToolbar-DBH0FNfI.js";import"./Button-BSlSVUqe.js";import"./chevron-right-C44RhOVD.js";import"./Input-B-wPEXqD.js";import"./search-DAKGrLou.js";import"./spin-Cbxb11X3.js";import"./error-CmS0UiVl.js";import"./withOsdkMetrics-aGd8eMoT.js";import"./makeExternalStore-Dc3Ewax5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
