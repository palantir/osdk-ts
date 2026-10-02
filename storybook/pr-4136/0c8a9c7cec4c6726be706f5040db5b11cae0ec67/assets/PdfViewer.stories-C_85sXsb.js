import{j as r,M as s}from"./iframe-CcC1m7dm.js";import{P as p}from"./pdf-viewer-D4xYcbFQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CqdAETN-.js";import"./preload-helper-DeCk53aw.js";import"./PdfViewer-CPUajHN8.js";import"./index-0gvTVOTK.js";import"./BasePdfViewer-FU2NV8Gi.js";import"./BasePdfViewer.module.css-C82u6fE0.js";import"./PdfViewerAnnotationLayer-HyW2zJ7R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIbN2Psj.js";import"./PdfViewerOutlineSidebar-q4llNbDZ.js";import"./PdfViewerSidebarHeader-B7qSk5YI.js";import"./useBaseUiId-CzCqcGop.js";import"./useControlled-SAzSAZAO.js";import"./CompositeRoot-CxTruRAJ.js";import"./CompositeItem-BC1QTYXK.js";import"./ToolbarRootContext-CjeMCr-E.js";import"./composite-tUxKNezP.js";import"./svgIconContainer-yjiCwwqK.js";import"./PdfViewerSearchBar-kfpKg_zJ.js";import"./chevron-up-DTWkSza1.js";import"./chevron-down-C2TUiN-F.js";import"./cross-DV51ECIz.js";import"./PdfViewerSidebar-DAJzKrBx.js";import"./index-CNWy2Wzu.js";import"./index-CEYaUBZr.js";import"./index-40ATCYrw.js";import"./PdfViewerToolbar-pCUWLmZG.js";import"./Button-D0RNeWLg.js";import"./chevron-right-CNYo2sTI.js";import"./Input-CPQRmcYd.js";import"./search-BXFqiFKZ.js";import"./spin-C0D5XsQi.js";import"./error-hsPgizh-.js";import"./withOsdkMetrics-Cqfc_v3H.js";import"./makeExternalStore-cat_cA42.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
