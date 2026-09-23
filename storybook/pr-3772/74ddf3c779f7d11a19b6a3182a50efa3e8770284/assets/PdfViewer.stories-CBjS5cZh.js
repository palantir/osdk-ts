import{j as r,M as s}from"./iframe-4Ny8APPO.js";import{P as p}from"./pdf-viewer-Bo5fF9eM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZlR735n.js";import"./preload-helper-DHWrfsom.js";import"./PdfViewer-BNQ0Nu7_.js";import"./index-BDa5owMw.js";import"./BasePdfViewer-Bd3-s5ft.js";import"./BasePdfViewer.module.css-DOUKsOPF.js";import"./PdfViewerAnnotationLayer-Cs6EyhYq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI1PbGmF.js";import"./PdfViewerOutlineSidebar-CzlyGxnj.js";import"./PdfViewerSidebarHeader-qQsDZ2dV.js";import"./useBaseUiId-Cylkv8_6.js";import"./useControlled-CDmZbK63.js";import"./CompositeRoot-o5CDeCcX.js";import"./CompositeItem-BlU9UJGi.js";import"./ToolbarRootContext-4zNRwQbb.js";import"./composite-rxIlBuDW.js";import"./svgIconContainer-CI9V091I.js";import"./PdfViewerSearchBar-_2973HoL.js";import"./chevron-up-C5OFQAYY.js";import"./chevron-down-UQ0goxb7.js";import"./cross-CeVI-uk1.js";import"./PdfViewerSidebar-1oqjr32z.js";import"./index-BpN3FT8y.js";import"./index-DZ12fAcl.js";import"./index-C2QpJmDZ.js";import"./PdfViewerToolbar-CyR0dbsT.js";import"./Button-DLJHtyJi.js";import"./chevron-right-DsryW-B2.js";import"./Input-BJD6b5K7.js";import"./search-DqDmcAMp.js";import"./spin-BRJc8Pe-.js";import"./error-al8La3lG.js";import"./withOsdkMetrics-CwVVh_LX.js";import"./makeExternalStore-DpCV1D9e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
