import{j as r,M as s}from"./iframe-CnChG_KN.js";import{P as p}from"./pdf-viewer-BYTebgol.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJd-JJiJ.js";import"./preload-helper-DADpY2Qt.js";import"./PdfRenderer-DcxOcOSB.js";import"./index-Bg4GYJhq.js";import"./PdfViewer-DRKoFL41.js";import"./PdfViewer.module.css-DLsOg2jY.js";import"./PdfViewerAnnotationLayer-DsBB9h8z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_qbvEwpS.js";import"./PdfViewerOutlineSidebar-vQ6jzYOz.js";import"./PdfViewerSidebarHeader-XFb2535P.js";import"./useBaseUiId-fvP1qVsp.js";import"./useControlled-CLyMaIUU.js";import"./CompositeRoot-BN1fCUuI.js";import"./CompositeItem-CeGPnv3s.js";import"./ToolbarRootContext-Dphe3vLY.js";import"./composite-n_wz1PVx.js";import"./svgIconContainer-k5XnGXOj.js";import"./PdfViewerSearchBar-D3aEwjRI.js";import"./chevron-up-CWebzE2Y.js";import"./chevron-down-SBdidObK.js";import"./cross-6yQQk7jt.js";import"./PdfViewerSidebar-CDXhj5Kv.js";import"./index-DijgnBDc.js";import"./index-C6n9HlVg.js";import"./index-CXAXnNpD.js";import"./PdfViewerToolbar-q1CLy1H9.js";import"./Button-BdsXel_V.js";import"./chevron-right-Ci69O5Ph.js";import"./Input-BukmAR63.js";import"./search-B9RbuUDO.js";import"./spin-BDtBLbaR.js";import"./error-YhItXnEf.js";import"./withOsdkMetrics-ChwVoFCz.js";import"./makeExternalStore-BBdsACO7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
