import{j as r,M as s}from"./iframe-D_14QzXp.js";import{P as p}from"./pdf-viewer--GUOCIvc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ci3upq9w.js";import"./preload-helper-COqd9mn5.js";import"./PdfViewer-DzLG-KPA.js";import"./index-dgvA8TZ9.js";import"./BasePdfViewer-BwizMZv6.js";import"./BasePdfViewer.module.css-C2yfMUcr.js";import"./PdfViewerAnnotationLayer-BZbDb-ce.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXCdZwLz.js";import"./PdfViewerOutlineSidebar-K_8UTANm.js";import"./PdfViewerSidebarHeader-BlKhhd3p.js";import"./useBaseUiId-CG8eOpE9.js";import"./useControlled-DcIpQ5so.js";import"./CompositeRoot-BFjQMxRy.js";import"./CompositeItem-CEQFfLmp.js";import"./ToolbarRootContext-q675nIs9.js";import"./composite-DPicY4x_.js";import"./svgIconContainer-DLS8mbZw.js";import"./PdfViewerSearchBar-KdMPZYoF.js";import"./chevron-up-DdereFNN.js";import"./chevron-down-0GDoiAFe.js";import"./cross-CugZ9ecx.js";import"./PdfViewerSidebar-8GEYmgpu.js";import"./index-DY8cgXE9.js";import"./index-Df1oZaSN.js";import"./index-Ccw16ZEo.js";import"./PdfViewerToolbar-Bboq4rii.js";import"./Button-emDgWZB-.js";import"./chevron-right-DKCSd0uj.js";import"./Input-DorH3bhS.js";import"./search-kgDQ-7P8.js";import"./spin-CdEAizNu.js";import"./error-3iJhsGJG.js";import"./withOsdkMetrics-CCrpbMke.js";import"./makeExternalStore-C2nXARRC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
