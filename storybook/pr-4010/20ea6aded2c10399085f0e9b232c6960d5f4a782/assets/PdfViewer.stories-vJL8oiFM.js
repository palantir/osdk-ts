import{j as r,M as s}from"./iframe-CMVepAJE.js";import{P as p}from"./pdf-viewer-5Q8HhQxr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2xeD7-T.js";import"./preload-helper-B-pat0t1.js";import"./PdfViewer-yGAZHq-d.js";import"./index-DjkhfCfT.js";import"./BasePdfViewer-BFH73XKt.js";import"./BasePdfViewer.module.css-DhPZhX15.js";import"./PdfViewerAnnotationLayer-pbmfdc15.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKcmITCA.js";import"./PdfViewerOutlineSidebar-D3cx-CvZ.js";import"./PdfViewerSidebarHeader-Dm92U8UJ.js";import"./useBaseUiId-DzJi2twx.js";import"./useControlled-BNdmAelW.js";import"./CompositeRoot-DelFyLZl.js";import"./CompositeItem-DR4WY-BM.js";import"./ToolbarRootContext-qvOmnhBt.js";import"./composite-BNbUAYfg.js";import"./svgIconContainer-Bbnic8gm.js";import"./PdfViewerSearchBar-Crg7tZjA.js";import"./chevron-up-CkEC6eU2.js";import"./chevron-down-DvYjBW4w.js";import"./cross-Bt6SdNHm.js";import"./PdfViewerSidebar-DHlTKQm-.js";import"./index-18i-4mqz.js";import"./index-DFWQdO8O.js";import"./index-D8Snt0rf.js";import"./PdfViewerToolbar-BHs5alaA.js";import"./Button-Rom60jiD.js";import"./chevron-right-CiGx1oCI.js";import"./Input-BrboKIWX.js";import"./search-ByupdJIi.js";import"./spin-n2QZLmOa.js";import"./error-BP38p0Wz.js";import"./withOsdkMetrics-fhlMSJmK.js";import"./makeExternalStore-CylZcwCT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
