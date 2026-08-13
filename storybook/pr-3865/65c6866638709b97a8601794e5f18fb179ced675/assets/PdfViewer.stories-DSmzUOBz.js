import{j as r,M as s}from"./iframe-BJco-VOi.js";import{P as p}from"./pdf-viewer-Dv0biOPX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BqaTIBrP.js";import"./preload-helper-CC7TVMhJ.js";import"./PdfViewer-aP3PdVoa.js";import"./index-BYEPosP_.js";import"./BasePdfViewer-BbBN_qPH.js";import"./BasePdfViewer.module.css-D8GU8ITg.js";import"./PdfViewerAnnotationLayer-BulZuPAu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNAvA86V.js";import"./PdfViewerOutlineSidebar-DZw5X41V.js";import"./PdfViewerSidebarHeader-DRNYayRG.js";import"./useBaseUiId-BzzLXW_j.js";import"./useControlled-DiTzu7_L.js";import"./CompositeRoot-DFnlehW_.js";import"./CompositeItem-BmVC2FiX.js";import"./ToolbarRootContext-DIdO-EJM.js";import"./composite-CqNHvWIl.js";import"./svgIconContainer-C_CZzMkw.js";import"./PdfViewerSearchBar-DGtzZTXT.js";import"./chevron-up-UBonOROX.js";import"./chevron-down-CRLaJKXa.js";import"./cross-BlvAMq1L.js";import"./PdfViewerSidebar-tgcGtA4k.js";import"./index-W1FoFTA-.js";import"./index-BplUxlkc.js";import"./index-DDr5B_4i.js";import"./PdfViewerToolbar-DZ1b3H9M.js";import"./Button-DEa2BSVh.js";import"./chevron-right-DnymiOGD.js";import"./Input-DwjxDHpS.js";import"./search-DqesndjO.js";import"./spin-DpUXG-gz.js";import"./error-C3c_rdRU.js";import"./withOsdkMetrics-BU9iFrAf.js";import"./makeExternalStore-BcSmY_xV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
