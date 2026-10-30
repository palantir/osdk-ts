import{j as r,M as s}from"./iframe-Hh4e2kUx.js";import{P as p}from"./pdf-viewer-JP9XJ-1_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D2fp09SV.js";import"./preload-helper-TOQk18-t.js";import"./PdfViewer-MuWJbizr.js";import"./index-FPZnvji7.js";import"./BasePdfViewer-Dauu0ksW.js";import"./BasePdfViewer.module.css-EOTw3fZU.js";import"./PdfViewerAnnotationLayer-sheYcs26.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BgmlWfhN.js";import"./PdfViewerOutlineSidebar-D5Js1YXO.js";import"./PdfViewerSidebarHeader-B7dBUvl_.js";import"./useBaseUiId-DjrC8msS.js";import"./useControlled-DdhVK8TG.js";import"./CompositeRoot-C3QN_l9C.js";import"./CompositeItem-Cklqv3Ob.js";import"./ToolbarRootContext-C2gF6pit.js";import"./composite-Cp4pW4Qp.js";import"./svgIconContainer-Cz0JOvaj.js";import"./PdfViewerSearchBar-YKgDL3vU.js";import"./chevron-up--D5KI_17.js";import"./chevron-down-CYKjDF1m.js";import"./cross-B1QiScfw.js";import"./PdfViewerSidebar-Brv1W0rR.js";import"./index-DrBWrzmN.js";import"./index-B-WuXzkU.js";import"./index-DvHaYOI0.js";import"./PdfViewerToolbar-mwzQOEDV.js";import"./Button-BeEw7oZA.js";import"./chevron-right-BfwhOtHw.js";import"./Input-C0NV1hD9.js";import"./search-BdChkyLR.js";import"./spin-7fn8Ao_l.js";import"./error-B0H5FIAQ.js";import"./withOsdkMetrics-Da4KZg1t.js";import"./makeExternalStore-CPyLrlbT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
