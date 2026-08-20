import{j as r,M as s}from"./iframe-DXxQjXBv.js";import{P as p}from"./pdf-viewer-DTJjbM3G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DjanML47.js";import"./preload-helper-B3x_8eTM.js";import"./PdfViewer-BfGZmwN2.js";import"./index-DXdDs4lB.js";import"./BasePdfViewer-BkeHjXUs.js";import"./BasePdfViewer.module.css-Bc_Z-BII.js";import"./PdfViewerAnnotationLayer-Cva_CKQY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJKnO86q.js";import"./PdfViewerOutlineSidebar-BEFQF16X.js";import"./PdfViewerSidebarHeader-X7VxiI_B.js";import"./useBaseUiId-sMJwHuF9.js";import"./useControlled-DX08P2U0.js";import"./CompositeRoot-DFh4VS7p.js";import"./CompositeItem-DpkHDNf0.js";import"./ToolbarRootContext-CWTmo3ib.js";import"./composite-DyOcb01D.js";import"./svgIconContainer-Djvq0Ea-.js";import"./PdfViewerSearchBar-C0YJ-F39.js";import"./chevron-up-Bw4-NOnq.js";import"./chevron-down-BbVf5MXz.js";import"./cross-DBGO2VVp.js";import"./PdfViewerSidebar-D7kNr19r.js";import"./index-WfGPsqa3.js";import"./index-D2ThU2H1.js";import"./index-BACG9pJt.js";import"./PdfViewerToolbar-BCGu-o-l.js";import"./Button-Ci_FRPTV.js";import"./chevron-right-BkfjktpB.js";import"./Input-D27Qregm.js";import"./search-AXE8JxuE.js";import"./spin-Dv18iDgm.js";import"./error-C3iIo7m3.js";import"./withOsdkMetrics-DszGj25-.js";import"./makeExternalStore-B_fb5bX2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
