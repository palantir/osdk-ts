import{j as r,M as s}from"./iframe-YWHhVqip.js";import{P as p}from"./pdf-viewer-BgQYzXks.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CiWFwit-.js";import"./preload-helper-BHtSD99P.js";import"./PdfRenderer-Cuy2pdT-.js";import"./index-GgLF4yF5.js";import"./PdfViewer-j6C5wKU9.js";import"./PdfViewer.module.css-sw3inEOe.js";import"./PdfViewerAnnotationLayer-Cwiuai9P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-F7nbZC5j.js";import"./PdfViewerOutlineSidebar-CwO05k-_.js";import"./PdfViewerSidebarHeader-B-V6_kmd.js";import"./useBaseUiId-CkP9EQ1J.js";import"./useControlled-dlQKsuXD.js";import"./CompositeRoot-CoyMlizb.js";import"./CompositeItem-B_lMIbt7.js";import"./ToolbarRootContext-BQBnifgQ.js";import"./composite-4M80XY5p.js";import"./svgIconContainer-CfdkJ3B3.js";import"./PdfViewerSearchBar-DNYSEHtm.js";import"./chevron-up-By4UBauo.js";import"./chevron-down-B-GnPEb9.js";import"./cross-DSRpqlv8.js";import"./PdfViewerSidebar-CdMtkyUF.js";import"./index-D7j_oXTL.js";import"./index-CcnVjtCv.js";import"./index-4OqHM49Z.js";import"./PdfViewerToolbar-Cu7c_MBQ.js";import"./Button-D3XDSFGa.js";import"./chevron-right-D8Do0Asv.js";import"./Input-kjUO2leS.js";import"./search-DtnjsJj9.js";import"./spin-DAoDEPb7.js";import"./error-DOdbHP55.js";import"./withOsdkMetrics-BDeesX_p.js";import"./makeExternalStore-CPTwDqOW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
