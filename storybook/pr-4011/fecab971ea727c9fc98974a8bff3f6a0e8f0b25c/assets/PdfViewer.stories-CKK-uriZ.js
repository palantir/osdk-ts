import{j as r,M as s}from"./iframe-Cbv5zznp.js";import{P as p}from"./pdf-viewer-BVmSalo-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaOGHhBN.js";import"./preload-helper-DqfcifpH.js";import"./PdfViewer-BIC1Ci9a.js";import"./index-D2aFmDJC.js";import"./BasePdfViewer-xRi2yayD.js";import"./BasePdfViewer.module.css-KtH3kn5F.js";import"./PdfViewerAnnotationLayer-eNr8dX5u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0jf8GPR.js";import"./PdfViewerOutlineSidebar-uqwcmpyk.js";import"./PdfViewerSidebarHeader-CKv2wDUs.js";import"./useBaseUiId-CbroaXAW.js";import"./useControlled-BoBGM7g4.js";import"./CompositeRoot-DdtBOEpx.js";import"./CompositeItem-CWAeob4t.js";import"./ToolbarRootContext-CLkLs3Pj.js";import"./composite-DJiR_4ty.js";import"./svgIconContainer-BWSQzhSR.js";import"./PdfViewerSearchBar-CYksNUiR.js";import"./chevron-up-C98UExzO.js";import"./chevron-down-DHe7MR3-.js";import"./cross-C8I2PI6u.js";import"./PdfViewerSidebar-Ip1lAgvU.js";import"./index-B-Z3zT8c.js";import"./index-CCzNRBOI.js";import"./index-5hCgKDxn.js";import"./PdfViewerToolbar-XZYr--dk.js";import"./Button-Tfyx2Upy.js";import"./chevron-right-5ZkhHG70.js";import"./Input-DmJSS6xV.js";import"./search-CH6DBRTT.js";import"./spin-CwXaVdlZ.js";import"./error-DnP2O5g6.js";import"./withOsdkMetrics-ByXJuDkr.js";import"./makeExternalStore-BZhL-95P.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
