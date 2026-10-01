import{j as r,M as s}from"./iframe-youlX2De.js";import{P as p}from"./pdf-viewer-CJNsCLNS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-cbp1jxyq.js";import"./preload-helper-DMj5aBc5.js";import"./PdfViewer-CLxy3OKW.js";import"./index-Dyy6V7kE.js";import"./BasePdfViewer-CDFO6J6V.js";import"./BasePdfViewer.module.css-Cn3pPDxm.js";import"./PdfViewerAnnotationLayer-DvOtTKDn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6oTlLCS.js";import"./PdfViewerOutlineSidebar-HxT9548g.js";import"./PdfViewerSidebarHeader-DSUL3iTa.js";import"./useBaseUiId-CNEu6f9Y.js";import"./useControlled-DaSybbDg.js";import"./CompositeRoot-cn2zaCMy.js";import"./CompositeItem-Cml7HDGs.js";import"./ToolbarRootContext-CA4yJOZ7.js";import"./composite-DF73ZPcS.js";import"./svgIconContainer-jpw1hIcy.js";import"./PdfViewerSearchBar-CGb01eQl.js";import"./chevron-up-z9XUttTL.js";import"./chevron-down-CmXpC65B.js";import"./cross-JeqqL3a9.js";import"./PdfViewerSidebar-BxXPlATP.js";import"./index-wc1nMvwS.js";import"./index-rZeAfKdB.js";import"./index-DQbJRRPB.js";import"./PdfViewerToolbar-NBLV1BP6.js";import"./Button-CbOY6Chn.js";import"./chevron-right-BYam4PtZ.js";import"./Input-B5YU-z1C.js";import"./search-D5ZZMY1l.js";import"./spin-CqgqtFlS.js";import"./error-BHWsO3Au.js";import"./withOsdkMetrics-BqmpDAQp.js";import"./makeExternalStore-qhtMEBHa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
