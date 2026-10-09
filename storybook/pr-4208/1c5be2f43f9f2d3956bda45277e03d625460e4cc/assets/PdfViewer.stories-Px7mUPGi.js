import{j as r,M as s}from"./iframe-eOIbuNqJ.js";import{P as p}from"./pdf-viewer-sOqBeDOE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPMyeuRI.js";import"./preload-helper-CgIJPkyR.js";import"./PdfViewer-B7DAORW5.js";import"./index-Dk7CsQL8.js";import"./BasePdfViewer-CutWwqI_.js";import"./BasePdfViewer.module.css-Dn6szhV_.js";import"./PdfViewerAnnotationLayer-DWQlqkkv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ca1rvMU9.js";import"./PdfViewerOutlineSidebar-BlQ_usNE.js";import"./PdfViewerSidebarHeader-COhMTOW1.js";import"./useBaseUiId-BGt5np_k.js";import"./useControlled-D-af9sp-.js";import"./CompositeRoot-CC623icI.js";import"./CompositeItem-CilfwKya.js";import"./ToolbarRootContext-D7liU5HL.js";import"./composite-Bd6nPt4i.js";import"./svgIconContainer-rhD8_llD.js";import"./PdfViewerSearchBar-hAdQlzVQ.js";import"./chevron-up-BmqQWHaw.js";import"./chevron-down-BTesjy4Z.js";import"./cross-BcLTDviE.js";import"./PdfViewerSidebar-CIjf_eG9.js";import"./index-CCzJD3Mm.js";import"./index-DSnIaanU.js";import"./index-CFmwThG4.js";import"./PdfViewerToolbar-kAEQNgRN.js";import"./Button-mtLpgF2-.js";import"./chevron-right-BxLvN9Uu.js";import"./Input-Dseoi2Bs.js";import"./search-sJO-f4KO.js";import"./spin-DSRIad8l.js";import"./error-DBxXNUf_.js";import"./withOsdkMetrics-DMw3oRZ7.js";import"./makeExternalStore-DO8UH6Jn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
