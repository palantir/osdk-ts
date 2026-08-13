import{j as r,M as s}from"./iframe-BYHcOnYC.js";import{P as p}from"./pdf-viewer-C6qdCX3M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B11yTVR7.js";import"./preload-helper-MS29zNf3.js";import"./PdfRenderer-DAPVP6DE.js";import"./index-CPW0YqJ1.js";import"./PdfViewer-DjJd9JDu.js";import"./PdfViewer.module.css-DSbXYNv5.js";import"./PdfViewerAnnotationLayer-Cqc5xsjZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BkJhr0u5.js";import"./PdfViewerOutlineSidebar-CF33bhWv.js";import"./PdfViewerSidebarHeader-B_GXNk7V.js";import"./useBaseUiId-RORmPNfM.js";import"./useControlled-BTIUHun_.js";import"./CompositeRoot-BlkqZ2uI.js";import"./CompositeItem-im0wuBUU.js";import"./ToolbarRootContext-BzowVjD3.js";import"./composite-CiXZG6Yk.js";import"./svgIconContainer-Cxrh5Db1.js";import"./PdfViewerSearchBar-CUeT2EjV.js";import"./chevron-up-D1WtDrGM.js";import"./chevron-down-VM28Feil.js";import"./cross-DcO4hFL4.js";import"./PdfViewerSidebar-BJLPrZSz.js";import"./index-CQfeV39g.js";import"./index-BlYuIQd_.js";import"./index-D704UY4m.js";import"./PdfViewerToolbar-SDJfESmw.js";import"./Button-9cPBIdv7.js";import"./chevron-right-BcLTp8sE.js";import"./Input-MJBSejsj.js";import"./search-DQmYjeD3.js";import"./spin-O-y1Qv2L.js";import"./error-DlU4geYq.js";import"./withOsdkMetrics-Bxe5ZrJW.js";import"./makeExternalStore-BJqA2WUa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
