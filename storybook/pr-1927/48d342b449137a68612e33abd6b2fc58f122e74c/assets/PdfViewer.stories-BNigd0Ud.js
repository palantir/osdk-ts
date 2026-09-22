import{j as r,M as s}from"./iframe-DbFL1YKD.js";import{P as p}from"./pdf-viewer-AYa7Ygln.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LBWyKnBI.js";import"./preload-helper-DPeLqFG0.js";import"./PdfViewer-BmVW7aSa.js";import"./index-BpVl4HIU.js";import"./BasePdfViewer-D63yYM0R.js";import"./BasePdfViewer.module.css-B3qBL9Nf.js";import"./PdfViewerAnnotationLayer-DLl5YfUz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UUJNnqY5.js";import"./PdfViewerOutlineSidebar-vCSH1gYN.js";import"./PdfViewerSidebarHeader-C1CJB4Nz.js";import"./useBaseUiId-DpJu2OQl.js";import"./useControlled-CC7pAFD9.js";import"./CompositeRoot-ArC1Ef0t.js";import"./CompositeItem-BFMnxKL4.js";import"./ToolbarRootContext-BGVeLiJB.js";import"./composite-DUwAvhnX.js";import"./svgIconContainer-DmqA5_t8.js";import"./PdfViewerSearchBar-fc527dc9.js";import"./chevron-up-BCN50pBM.js";import"./chevron-down-BFigfpWF.js";import"./cross-BbsbdKVz.js";import"./PdfViewerSidebar-CRY4Br7P.js";import"./index-Dqpnei48.js";import"./index-Dqg20C0A.js";import"./index-BusxuARM.js";import"./PdfViewerToolbar-Bq2rPuPX.js";import"./Button-DsQQlkgI.js";import"./chevron-right-6srWU77j.js";import"./Input-Z3iSNu5L.js";import"./search-DfBNorlD.js";import"./spin-CoVf60w7.js";import"./error-B_or4gbN.js";import"./withOsdkMetrics-CCBEdesf.js";import"./makeExternalStore-DCuWZO1g.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
