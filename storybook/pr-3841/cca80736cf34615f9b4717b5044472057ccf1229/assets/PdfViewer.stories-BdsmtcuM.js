import{j as r,M as s}from"./iframe-CHAjmeRW.js";import{P as p}from"./pdf-viewer-kn-VcW4L.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8SYWyAfp.js";import"./preload-helper-Bnd8YX8b.js";import"./PdfViewer-DJY_ZCiP.js";import"./index-uehY9gxK.js";import"./BasePdfViewer-B4ftRD0-.js";import"./BasePdfViewer.module.css-CREP_AM-.js";import"./PdfViewerAnnotationLayer-BpWOjxMr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mreAOi14.js";import"./PdfViewerOutlineSidebar-CHOS_-_6.js";import"./PdfViewerSidebarHeader-ChrLAJ5a.js";import"./useBaseUiId-CrKq0iow.js";import"./useControlled-DIGLnSxk.js";import"./CompositeRoot-HR3mJi7N.js";import"./CompositeItem-C3TCOkoR.js";import"./ToolbarRootContext-DT7PezqV.js";import"./composite-DrWVaKH_.js";import"./svgIconContainer-C6bTix-V.js";import"./PdfViewerSearchBar-BwBll1XZ.js";import"./chevron-up-DIqZHR-j.js";import"./chevron-down-BhaNHOdV.js";import"./cross-21maCkVo.js";import"./PdfViewerSidebar-f3tI2Kuf.js";import"./index-BX5VsLRX.js";import"./index-0JEFRERF.js";import"./index-DItNlf6T.js";import"./PdfViewerToolbar-C3hl0j4N.js";import"./Button-BrV62231.js";import"./chevron-right-DYwe1xf_.js";import"./Input-CEDKmeIa.js";import"./search-C-PuNkbt.js";import"./spin-CrdGFiTO.js";import"./error-D546O215.js";import"./withOsdkMetrics-BAwWDEWh.js";import"./makeExternalStore-DZYGiDNi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
