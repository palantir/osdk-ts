import{j as r,M as s}from"./iframe-za2gFZm7.js";import{P as p}from"./pdf-viewer-Y0R0qYor.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-yQMegSAD.js";import"./preload-helper-B152vIQk.js";import"./PdfViewer-C-uzxAVZ.js";import"./index-C4E5Dk0R.js";import"./BasePdfViewer-0GoDwL-e.js";import"./BasePdfViewer.module.css-BwtYe9uL.js";import"./PdfViewerAnnotationLayer-Dik8i_fz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-eBqr6409.js";import"./PdfViewerOutlineSidebar-Bd_s1GAH.js";import"./PdfViewerSidebarHeader-DDP9qwlv.js";import"./useBaseUiId-BpIGGvmI.js";import"./useControlled-x2G49QSH.js";import"./CompositeRoot-BW21JtaS.js";import"./CompositeItem-BDB5_ay2.js";import"./ToolbarRootContext-BG5Gc4jy.js";import"./composite-D56jxQaX.js";import"./svgIconContainer-Dr6j7alJ.js";import"./PdfViewerSearchBar-DJIrV6o-.js";import"./chevron-up-DiK3LtJt.js";import"./chevron-down-DJF2R6Zo.js";import"./cross-TTEnlvkl.js";import"./PdfViewerSidebar-DyX2E61-.js";import"./index-CHACBaIH.js";import"./index-C4smQJ4G.js";import"./index-OBpStMAY.js";import"./PdfViewerToolbar-DYSRdde0.js";import"./Button-DwQfUaLn.js";import"./chevron-right-00mkW-E_.js";import"./Input-B_NAvwoc.js";import"./search-FcuyWSqL.js";import"./spin-DAiZjFdr.js";import"./error-Dk8fbBB5.js";import"./withOsdkMetrics-U5yEFT5F.js";import"./makeExternalStore-C8qXbmFn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
