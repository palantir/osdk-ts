import{j as r,M as s}from"./iframe-DlVDy023.js";import{P as p}from"./pdf-viewer-CqGqxuLn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-By2mmp4z.js";import"./preload-helper-DJFhMTqE.js";import"./PdfViewer-ClUR2slb.js";import"./index-B3fXiAQb.js";import"./BasePdfViewer-D9q_yTDd.js";import"./BasePdfViewer.module.css-D6z-JNTq.js";import"./PdfViewerAnnotationLayer-FiC-d1rw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKLwmsk_.js";import"./PdfViewerOutlineSidebar-BdltkWcm.js";import"./PdfViewerSidebarHeader-nsAF7Qgl.js";import"./useBaseUiId-BKw8YauT.js";import"./useControlled-Dii3KKCf.js";import"./CompositeRoot-D9bNowkf.js";import"./CompositeItem-CCYoAgW2.js";import"./ToolbarRootContext--DNvLQWo.js";import"./composite-BLhg11U-.js";import"./svgIconContainer-s-JQVLQ9.js";import"./PdfViewerSearchBar-C7PoJ6Lw.js";import"./chevron-up-6Kle_mZ0.js";import"./chevron-down-CjY3inSa.js";import"./cross-mcjuSBTc.js";import"./PdfViewerSidebar-DcNYA7Cg.js";import"./index-BzvLJ1CU.js";import"./index-LVqexgrH.js";import"./index-C3j1YyMW.js";import"./PdfViewerToolbar-CsCOTsbF.js";import"./Button-CPiBfc-M.js";import"./chevron-right-BNkey-4L.js";import"./Input-DaMbbLWO.js";import"./search-Dlo_g8mx.js";import"./spin-Bzxkfh7l.js";import"./error-DOacZup1.js";import"./withOsdkMetrics-zKe3req1.js";import"./makeExternalStore-DF_bocEY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
