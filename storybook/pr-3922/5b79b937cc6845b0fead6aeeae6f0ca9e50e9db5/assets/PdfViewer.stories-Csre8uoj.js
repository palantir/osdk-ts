import{j as r,M as s}from"./iframe-j16wUfsG.js";import{P as p}from"./pdf-viewer-CKQuHaid.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-cakxvYsh.js";import"./preload-helper-B5KNJanK.js";import"./PdfViewer-DV6UBGcI.js";import"./index-PZXuwR22.js";import"./BasePdfViewer-aYSouguJ.js";import"./BasePdfViewer.module.css-7mlomYyi.js";import"./PdfViewerAnnotationLayer-6ynz_EtH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-xKqRFWru.js";import"./PdfViewerOutlineSidebar-CUPEyjNQ.js";import"./PdfViewerSidebarHeader-EBM4nm1T.js";import"./useBaseUiId-BT4BDOeF.js";import"./useControlled-DFdkoakd.js";import"./CompositeRoot-B7cQ_BOJ.js";import"./CompositeItem-BYEj7bp3.js";import"./ToolbarRootContext-DOjYoz5M.js";import"./composite-B2eetiSQ.js";import"./svgIconContainer-DyYG3yIN.js";import"./PdfViewerSearchBar-BY6DJ74t.js";import"./chevron-up-ZnL8s0ki.js";import"./chevron-down-CPDFF9dW.js";import"./cross-hlLbslg_.js";import"./PdfViewerSidebar-p8YGyrNT.js";import"./index-Soy9Caj3.js";import"./index-BBXEyrHX.js";import"./index-BKBAw2oy.js";import"./PdfViewerToolbar-BdBmV4ej.js";import"./Button-BsHl7luh.js";import"./chevron-right-z7SFRyhG.js";import"./Input-ChvjdPlR.js";import"./search-BeO1HXe9.js";import"./spin-CdTmJ02h.js";import"./error-DyJKKGYF.js";import"./withOsdkMetrics-DopDBPQL.js";import"./makeExternalStore-CIGBfPKm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
