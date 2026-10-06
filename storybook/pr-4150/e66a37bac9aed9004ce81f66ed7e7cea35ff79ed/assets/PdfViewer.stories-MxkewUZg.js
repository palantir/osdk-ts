import{j as r,M as s}from"./iframe-BZeHWWBM.js";import{P as p}from"./pdf-viewer-Bogo5QoB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-aDgGqjJc.js";import"./preload-helper-BMO_GDYl.js";import"./PdfViewer-xyQVSdrE.js";import"./index-BghiDG-K.js";import"./BasePdfViewer-iFyFTojy.js";import"./BasePdfViewer.module.css-CrB8Ywwn.js";import"./PdfViewerAnnotationLayer-CnRXz4o_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BGJkiKse.js";import"./PdfViewerOutlineSidebar-JWe6SlI5.js";import"./PdfViewerSidebarHeader-yxxM3bx5.js";import"./useBaseUiId-DiD1p4wn.js";import"./useControlled-BuZ3yaTV.js";import"./CompositeRoot-oRfK9LBg.js";import"./CompositeItem-DFk3jTw_.js";import"./ToolbarRootContext-Uoj_ihh4.js";import"./composite-BY8Pgpco.js";import"./svgIconContainer-P70a1ca6.js";import"./PdfViewerSearchBar-8k-BnM_3.js";import"./chevron-up-Dw1HlDJ8.js";import"./chevron-down-C-j3k1fh.js";import"./cross-DAs0FyHT.js";import"./PdfViewerSidebar-EcMUZewZ.js";import"./index-DA_WNnQg.js";import"./index-ssl2u5fL.js";import"./index-Demepb3A.js";import"./PdfViewerToolbar-XUZCj8W6.js";import"./Button-SYhaaomn.js";import"./chevron-right-D35qH4vr.js";import"./Input-d8OQBydu.js";import"./search-MR2i21ku.js";import"./spin-u2ZUch4c.js";import"./error-Bpqu1oQt.js";import"./withOsdkMetrics-BwLrqkyr.js";import"./makeExternalStore-COW8GNP_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
