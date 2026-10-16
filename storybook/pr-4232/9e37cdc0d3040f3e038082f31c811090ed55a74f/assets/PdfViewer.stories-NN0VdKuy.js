import{j as r,M as s}from"./iframe-p2YICxUI.js";import{P as p}from"./pdf-viewer-C6l5hyJB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BLKUqfvi.js";import"./preload-helper-C_d8LugS.js";import"./PdfViewer-CMMCgXsh.js";import"./index-CsAVedHf.js";import"./BasePdfViewer-C0zBv8C4.js";import"./BasePdfViewer.module.css-DCMl0Y2n.js";import"./PdfViewerAnnotationLayer-c6IimvEr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8nCOVCB.js";import"./PdfViewerOutlineSidebar-oh2FxX-G.js";import"./PdfViewerSidebarHeader-CDqQ6SNg.js";import"./useBaseUiId-CsBNKmu8.js";import"./useControlled-DfYpZvNd.js";import"./CompositeRoot-EfSmRFb2.js";import"./CompositeItem-BejJ0cXB.js";import"./ToolbarRootContext-DOpGxQlA.js";import"./composite-BPYrj6eG.js";import"./svgIconContainer-ByMgsc6W.js";import"./PdfViewerSearchBar-C5CW8zr8.js";import"./chevron-up-Cnpzjsni.js";import"./chevron-down-CvKzqnOZ.js";import"./cross-DphGr94_.js";import"./PdfViewerSidebar-9MiubIq5.js";import"./index-BO7UbGKj.js";import"./index-4ZagnSn6.js";import"./index-XAimxDaP.js";import"./PdfViewerToolbar-BJmZjixl.js";import"./Button-ByiY3lLu.js";import"./chevron-right-DvkW5DQ3.js";import"./Input-se4kwers.js";import"./search-h5TogDUF.js";import"./spin-DGJ2Tfzy.js";import"./error-LbvP5jG0.js";import"./withOsdkMetrics-DKcHZ6W6.js";import"./makeExternalStore-DCD_3Y1Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
