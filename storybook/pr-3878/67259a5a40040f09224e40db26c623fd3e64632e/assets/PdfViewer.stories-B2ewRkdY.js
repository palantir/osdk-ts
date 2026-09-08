import{j as r,M as s}from"./iframe-BpAf1-YV.js";import{P as p}from"./pdf-viewer-IJtekp0L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CI_WPbyj.js";import"./preload-helper-C7Ebqy80.js";import"./PdfViewer-BnaegUMp.js";import"./index-DyADrv6I.js";import"./BasePdfViewer-DtgKRq2g.js";import"./BasePdfViewer.module.css-BMuXCLAS.js";import"./PdfViewerAnnotationLayer-DTlSUo0G.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAN9cKx7.js";import"./PdfViewerOutlineSidebar-CHgy7ij7.js";import"./PdfViewerSidebarHeader-wfMULiRa.js";import"./useBaseUiId-C9xAI1lW.js";import"./useControlled-Bq45AK2p.js";import"./CompositeRoot-D8XvqRVW.js";import"./CompositeItem-DZ-wY7w2.js";import"./ToolbarRootContext-DFWsSTVD.js";import"./composite-mAbXNXR7.js";import"./svgIconContainer-CFecCBjJ.js";import"./PdfViewerSearchBar-DTQO4SD4.js";import"./chevron-up-CCLFQO0o.js";import"./chevron-down-Bp5YSXdo.js";import"./cross-DslNwA_6.js";import"./PdfViewerSidebar-BaheRKZm.js";import"./index-CiUfMed7.js";import"./index-Cxw2yzFX.js";import"./index-DS78ICiY.js";import"./PdfViewerToolbar-BEG3rNyc.js";import"./Button-VTVCzMYN.js";import"./chevron-right-cgAeOaTc.js";import"./Input-DIA1NCyo.js";import"./search-DkdRXT-s.js";import"./spin-BEnMOD1i.js";import"./error-DZIXNDEl.js";import"./withOsdkMetrics-6mq6wlfJ.js";import"./makeExternalStore-B3qv40Vp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
