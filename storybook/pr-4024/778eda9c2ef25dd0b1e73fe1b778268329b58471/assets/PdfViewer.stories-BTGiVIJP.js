import{j as r,M as s}from"./iframe-BCQQ5idH.js";import{P as p}from"./pdf-viewer-OPsq_1o3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-9Q24Xc4X.js";import"./preload-helper-coqosfEI.js";import"./PdfViewer-n7GXgZ0A.js";import"./index-nevoWaco.js";import"./BasePdfViewer-Dz6nXUlF.js";import"./BasePdfViewer.module.css-CB-gr2b1.js";import"./PdfViewerAnnotationLayer-Ctd6P5Sw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BN8eXjTh.js";import"./PdfViewerOutlineSidebar-CQScwAyC.js";import"./PdfViewerSidebarHeader-BpiBhWCN.js";import"./useBaseUiId-DiDvWzye.js";import"./useControlled-Cq_GfurO.js";import"./CompositeRoot-Cj-Ji0cN.js";import"./CompositeItem-ldRXr3Bh.js";import"./ToolbarRootContext-BXYKMrbO.js";import"./composite-D0UtEOtq.js";import"./svgIconContainer-CKj1NjbI.js";import"./PdfViewerSearchBar-C_CJOFU6.js";import"./chevron-up-Cb3oXQeW.js";import"./chevron-down-DUkETYvc.js";import"./cross-CEa64cbV.js";import"./PdfViewerSidebar-CdhE0UHB.js";import"./index-CLw5_nKq.js";import"./index-B3YRQCj_.js";import"./index-D04-iFGI.js";import"./PdfViewerToolbar-BqabudxB.js";import"./Button-CEig4mHb.js";import"./chevron-right-B316ZoQm.js";import"./Input-C6nfWZbz.js";import"./search-BBu7BPS5.js";import"./spin-DLmeto6z.js";import"./error-CJVmwm75.js";import"./withOsdkMetrics-SGz3lb0q.js";import"./makeExternalStore-DUkSZpJS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
