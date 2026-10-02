import{j as r,M as s}from"./iframe-PECeEW3T.js";import{P as p}from"./pdf-viewer-CYvf4ZNc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-maQmSAwy.js";import"./preload-helper-C6A5QCy5.js";import"./PdfViewer-DVTi51Rn.js";import"./index-BjSahMIP.js";import"./BasePdfViewer-DkMpIXVK.js";import"./BasePdfViewer.module.css-BERhPMGu.js";import"./PdfViewerAnnotationLayer-BrN0b3vv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dwesw1hK.js";import"./PdfViewerOutlineSidebar-eJsxdMV9.js";import"./PdfViewerSidebarHeader-DiXpkJKM.js";import"./useBaseUiId-D-8DZjqe.js";import"./useControlled-rCZffMic.js";import"./CompositeRoot-BwnSttYY.js";import"./CompositeItem-CUJUUY83.js";import"./ToolbarRootContext-CpX9GNwO.js";import"./composite-Ce7Nqskp.js";import"./svgIconContainer-B-v0aTHG.js";import"./PdfViewerSearchBar-CeS0jbgU.js";import"./chevron-up-DtnaTWWl.js";import"./chevron-down-CxtRUuHx.js";import"./cross-jtAUAPzX.js";import"./PdfViewerSidebar-BAoD7iGt.js";import"./index-BKt47rIQ.js";import"./index-ieJWeIAg.js";import"./index-C9QXfA_d.js";import"./PdfViewerToolbar-Doa2YsHn.js";import"./Button-LcQP4ZCC.js";import"./chevron-right-Co8Ck9Wc.js";import"./Input-Dyun1iu7.js";import"./search-CpCpMqWp.js";import"./spin-BvuiarGB.js";import"./error-BJrA_-EN.js";import"./withOsdkMetrics-CQL6tA2X.js";import"./makeExternalStore-v3gjQsp8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
