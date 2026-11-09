import{j as r,M as s}from"./iframe-CQjpYJVQ.js";import{P as p}from"./pdf-viewer-B49Ucsfi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCey0BKs.js";import"./preload-helper-5bhpmr97.js";import"./PdfViewer-Y5AqOlOM.js";import"./index-zd6HXz9_.js";import"./BasePdfViewer-Dzt8JmkW.js";import"./BasePdfViewer.module.css-BAZb3ZGo.js";import"./PdfViewerAnnotationLayer-CfuKVAPa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-TQDgLN3g.js";import"./PdfViewerOutlineSidebar-BX_TIPZA.js";import"./PdfViewerSidebarHeader-df_QiszC.js";import"./useBaseUiId-jFZ68_bH.js";import"./useControlled-Ft9yJ31_.js";import"./CompositeRoot-Xf_FKSS4.js";import"./CompositeItem-C0zU83Hu.js";import"./ToolbarRootContext-DqJWDTyy.js";import"./composite-D-zcsHj1.js";import"./svgIconContainer-CE1ZQVk8.js";import"./PdfViewerSearchBar-B24TTkYD.js";import"./chevron-up-BiXb6AmR.js";import"./chevron-down-BDQkglqC.js";import"./cross-Deh5uDpB.js";import"./PdfViewerSidebar-s3rPb8ny.js";import"./index-RDlQB4dD.js";import"./index-CULyv4a8.js";import"./index-plWBun5g.js";import"./PdfViewerToolbar-De-MJMqU.js";import"./Button-fOyW8XxT.js";import"./chevron-right-DiAwko6H.js";import"./Input-BiPNpz_C.js";import"./search-DStplL8v.js";import"./spin-DVbuDSFr.js";import"./error-BRCQmACx.js";import"./withOsdkMetrics-By-ZCu6K.js";import"./makeExternalStore-Cn0Nj4g1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
