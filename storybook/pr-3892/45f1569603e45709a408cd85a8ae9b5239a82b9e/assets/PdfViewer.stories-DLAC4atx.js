import{j as r,M as s}from"./iframe-B_x9XvmG.js";import{P as p}from"./pdf-viewer-Cw-f7Kyy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlZz6oB8.js";import"./preload-helper-DITc7NUo.js";import"./PdfViewer-B389iwT_.js";import"./index-C3PElE5z.js";import"./BasePdfViewer-Cnnc6J6H.js";import"./BasePdfViewer.module.css-DcANpAVx.js";import"./PdfViewerAnnotationLayer-ZY81qDZ4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8p_42wq.js";import"./PdfViewerOutlineSidebar-cJGPXzfv.js";import"./PdfViewerSidebarHeader-Cb0x4K5R.js";import"./useBaseUiId-BiDC3o6s.js";import"./useControlled-CmgwpyDU.js";import"./CompositeRoot-DYHW1ACu.js";import"./CompositeItem-C9DYqB7p.js";import"./ToolbarRootContext-7JgjqYNy.js";import"./composite-BZvFUogL.js";import"./svgIconContainer-D4Odc14H.js";import"./PdfViewerSearchBar-Cx_8b1i4.js";import"./chevron-up-BgsPNpvb.js";import"./chevron-down-Cacce87-.js";import"./cross-CXaMbnSI.js";import"./PdfViewerSidebar-DqvFPod9.js";import"./index-wwXQ8xo5.js";import"./index-BLoCQL3a.js";import"./index-BBIYY3UR.js";import"./PdfViewerToolbar-CsmnpOdG.js";import"./Button-C6ny7jzS.js";import"./chevron-right-DqHpueF8.js";import"./Input-CrrumfsJ.js";import"./search-DnO_YLk6.js";import"./spin-Cz1eIM9J.js";import"./error-CpyC-KmL.js";import"./withOsdkMetrics-BwmTGSf3.js";import"./makeExternalStore-BY--bFis.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
