import{j as r,M as s}from"./iframe-CNCsodpO.js";import{P as p}from"./pdf-viewer-CP4W69un.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CUAB5G4u.js";import"./preload-helper-BcSdXRr8.js";import"./PdfViewer-DXTPuiJd.js";import"./index-DZaiIimE.js";import"./BasePdfViewer-CNPC3sC-.js";import"./BasePdfViewer.module.css-DgYeTSWi.js";import"./PdfViewerAnnotationLayer-oUw0ujTF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7o_VOOb.js";import"./PdfViewerOutlineSidebar-Bzb2GQrZ.js";import"./PdfViewerSidebarHeader-CsWaK96S.js";import"./useBaseUiId-BM8If8HJ.js";import"./useControlled-jyzXrKzG.js";import"./CompositeRoot-oaJcIeV8.js";import"./CompositeItem-CznsiIYk.js";import"./ToolbarRootContext-D2snF5qH.js";import"./composite-D-lHYX2y.js";import"./svgIconContainer-D0BYcghd.js";import"./PdfViewerSearchBar-D-Jd4nCl.js";import"./chevron-up-CRWaAUiT.js";import"./chevron-down-QtQgwZHW.js";import"./cross-ByI78NKq.js";import"./PdfViewerSidebar-CbpVpZsd.js";import"./index-ikLawp9H.js";import"./index-JERw882y.js";import"./index-BiV4_PIL.js";import"./PdfViewerToolbar-CLIOYcMj.js";import"./Button-DdjGWYgj.js";import"./chevron-right-DeUEv22w.js";import"./Input-DEq1aCXP.js";import"./search-BLGSqUK3.js";import"./spin-bjIFYNBy.js";import"./error-vSyclIj9.js";import"./withOsdkMetrics-DJIl7LC3.js";import"./makeExternalStore-MQ-cLLpt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
