import{j as r,M as s}from"./iframe--UbMdiy2.js";import{P as p}from"./pdf-viewer-2Rqgwohg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dr7I5tMe.js";import"./preload-helper-CA7u7TiX.js";import"./PdfViewer-BVEGP0SW.js";import"./index-C1u9riy0.js";import"./BasePdfViewer-B29oFyjF.js";import"./BasePdfViewer.module.css-cEkG202W.js";import"./PdfViewerAnnotationLayer-BR3dTue4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9J6kiN3k.js";import"./PdfViewerOutlineSidebar-D0RT_XXm.js";import"./PdfViewerSidebarHeader-BelO9s6Z.js";import"./useBaseUiId-CjAg3d2x.js";import"./useControlled-Cd5fwv74.js";import"./CompositeRoot-BOV-l0B0.js";import"./CompositeItem-D1M30SFN.js";import"./ToolbarRootContext-D_n3oDJh.js";import"./composite-BtFR9AyU.js";import"./svgIconContainer-CK_06w6f.js";import"./PdfViewerSearchBar-Bv_wmby9.js";import"./chevron-up-D69Ef9lW.js";import"./chevron-down-C0FvWU53.js";import"./cross-CsZwFA4x.js";import"./PdfViewerSidebar-BQOIUbBn.js";import"./index-CpJmD0Ia.js";import"./index-BGAR2WV5.js";import"./index-CAvTI1eZ.js";import"./PdfViewerToolbar-CwsiW_2H.js";import"./Button-B02mKxKl.js";import"./chevron-right-BhSXpUSq.js";import"./Input-BN19GaFA.js";import"./search-DbUWdvo4.js";import"./spin-CqC7swTu.js";import"./error-DmofQ1mT.js";import"./withOsdkMetrics-C20Si_tx.js";import"./makeExternalStore-CU3_vIk-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
