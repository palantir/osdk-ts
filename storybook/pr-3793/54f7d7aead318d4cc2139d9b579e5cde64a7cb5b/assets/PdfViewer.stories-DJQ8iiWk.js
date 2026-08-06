import{j as r,M as s}from"./iframe-DHvAViPR.js";import{P as p}from"./pdf-viewer-89iIaMg-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ChgCZRmL.js";import"./preload-helper-Dr0qt1Io.js";import"./PdfRenderer-C9LTURaj.js";import"./index-Bu8HbTmD.js";import"./PdfViewer-D4Lde5LN.js";import"./PdfViewer.module.css-B09QIlds.js";import"./PdfViewerAnnotationLayer-Bbkw8Rra.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6gftzxP.js";import"./PdfViewerOutlineSidebar-CXo1PITD.js";import"./PdfViewerSidebarHeader-D80FA5f5.js";import"./useBaseUiId-DC8JngT2.js";import"./useControlled-DhJY5-ob.js";import"./CompositeRoot-pvx7O-Lf.js";import"./CompositeItem-DFHh1YHK.js";import"./ToolbarRootContext-D6av5NKs.js";import"./composite-BqPomtbs.js";import"./svgIconContainer-DlMS91CX.js";import"./PdfViewerSearchBar-Bt_Qzzbb.js";import"./chevron-up-CJow_0R-.js";import"./chevron-down-m5ZtkVRt.js";import"./cross-jMdHsiQa.js";import"./PdfViewerSidebar-yDRMmFaR.js";import"./index-CFJ8T4c9.js";import"./index-C-uf0j7T.js";import"./index-BK9f1euG.js";import"./PdfViewerToolbar-B0ugkV5T.js";import"./Button-CRVZcrRv.js";import"./chevron-right-PbSOdkvs.js";import"./Input-BahMzRfS.js";import"./search-CslhogKf.js";import"./spin-Dgjg05Ca.js";import"./error-ChBbUgez.js";import"./withOsdkMetrics-CU3cEKz5.js";import"./makeExternalStore-hiekBPtY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
