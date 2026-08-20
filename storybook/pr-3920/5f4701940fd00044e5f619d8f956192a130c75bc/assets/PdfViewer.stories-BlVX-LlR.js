import{j as r,M as s}from"./iframe-CRdHGtB4.js";import{P as p}from"./pdf-viewer-B5W9WzU7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZNyulyh.js";import"./preload-helper-BEvuQzxo.js";import"./PdfViewer-96rpeLqV.js";import"./index-C2_3h1_n.js";import"./BasePdfViewer-_0J_Kajn.js";import"./BasePdfViewer.module.css-BmHYb3lF.js";import"./PdfViewerAnnotationLayer-BzPalvTS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGIYEg8w.js";import"./PdfViewerOutlineSidebar-5t7Xb4FG.js";import"./PdfViewerSidebarHeader-R36TxCvU.js";import"./useBaseUiId-B9FhtsvG.js";import"./useControlled-C8hCGxVV.js";import"./CompositeRoot-BB7uab_w.js";import"./CompositeItem-C0iz3cc9.js";import"./ToolbarRootContext-DLgn0q4p.js";import"./composite-CXxADE8V.js";import"./svgIconContainer-DTW3-j-b.js";import"./PdfViewerSearchBar-DknA_Fgd.js";import"./chevron-up-DgJZseHp.js";import"./chevron-down-kpc9MZer.js";import"./cross-DLEBSi7m.js";import"./PdfViewerSidebar-CWDprYPT.js";import"./index-BQoPBT-L.js";import"./index-Di6l4zyi.js";import"./index-BOTRrmgQ.js";import"./PdfViewerToolbar-BxRDAH3G.js";import"./Button-CGHFm1Mj.js";import"./chevron-right-0QqZXfmr.js";import"./Input-B6Z_q_CX.js";import"./search-D2VDLMat.js";import"./spin-D-EAsMgY.js";import"./error-04dUIx8L.js";import"./withOsdkMetrics-CxeMS1SD.js";import"./makeExternalStore-BCdf-sYW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
