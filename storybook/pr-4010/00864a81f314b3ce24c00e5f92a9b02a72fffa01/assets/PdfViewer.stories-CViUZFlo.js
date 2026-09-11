import{j as r,M as s}from"./iframe-CtRHQTYJ.js";import{P as p}from"./pdf-viewer-lwPimQcz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CG3Nta66.js";import"./preload-helper-fhfz86w0.js";import"./PdfViewer-nu2QLEbz.js";import"./index-riCZd5Ar.js";import"./BasePdfViewer-B36AnyPl.js";import"./BasePdfViewer.module.css-DXFkFUzO.js";import"./PdfViewerAnnotationLayer-Dcw64U-B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DbZgagGi.js";import"./PdfViewerOutlineSidebar-HnSN_oBM.js";import"./PdfViewerSidebarHeader-VGkeQGZ3.js";import"./useBaseUiId-qkDK2XTS.js";import"./useControlled-tah5fGcR.js";import"./CompositeRoot-Botqy45p.js";import"./CompositeItem-C6o3RrT-.js";import"./ToolbarRootContext-BObKP8Zm.js";import"./composite-DuXOIKmO.js";import"./svgIconContainer-CnTR-ACc.js";import"./PdfViewerSearchBar-C6LX9CwT.js";import"./chevron-up-Dhd4gFYv.js";import"./chevron-down-DdzT4R3d.js";import"./cross-DEABcOeY.js";import"./PdfViewerSidebar-Be2i9Xuy.js";import"./index-BEVcgcQr.js";import"./index-Fr7QusuU.js";import"./index-pqaS_ebL.js";import"./PdfViewerToolbar-1AgnWcBZ.js";import"./Button-BqinPFLf.js";import"./chevron-right-BcfW26Cu.js";import"./Input-Civ7Ghzz.js";import"./search-BsaMQbW0.js";import"./spin-cpZHcI4L.js";import"./error-7X7jIqwN.js";import"./withOsdkMetrics-C6vvxMqe.js";import"./makeExternalStore-C5B573Wo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
