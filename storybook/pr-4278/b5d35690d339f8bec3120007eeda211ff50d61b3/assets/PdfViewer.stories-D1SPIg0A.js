import{j as r,M as s}from"./iframe-B5ExBQzJ.js";import{P as p}from"./pdf-viewer-DDYWWgsQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGs3j7Iz.js";import"./preload-helper-BKpiLxff.js";import"./PdfViewer-D5U-g9hD.js";import"./index-CitCcLFV.js";import"./BasePdfViewer-Krc_y_Bd.js";import"./BasePdfViewer.module.css-Dnoxb04c.js";import"./PdfViewerAnnotationLayer-DN0sC5LZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChOZErSk.js";import"./PdfViewerOutlineSidebar-B1SXwAar.js";import"./PdfViewerSidebarHeader-YVjTP0Yd.js";import"./useBaseUiId-DRK3uSj0.js";import"./useControlled-CcsA4hDD.js";import"./CompositeRoot-CvbqH8vD.js";import"./CompositeItem-BnzcVROn.js";import"./ToolbarRootContext-Cs8zUWV2.js";import"./composite-DB1LtyAr.js";import"./svgIconContainer-BLHh5YtK.js";import"./PdfViewerSearchBar-C6XsQHXl.js";import"./chevron-up-BSqx_FSm.js";import"./chevron-down-DY2jF6xe.js";import"./cross-DAA3CpVw.js";import"./PdfViewerSidebar-ByDSPyII.js";import"./index-DaOoM8bo.js";import"./index-BTZGq7CS.js";import"./index-Kx0JXijT.js";import"./PdfViewerToolbar-BssttpTO.js";import"./Button-Dzl2Qrvs.js";import"./chevron-right-CSkgPqnO.js";import"./Input-CsmEMiLS.js";import"./search-l8XKRmqF.js";import"./spin-BfShuIHY.js";import"./error-HO3Aksfc.js";import"./withOsdkMetrics-CwxP9zXD.js";import"./makeExternalStore-B8gDjOBd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
