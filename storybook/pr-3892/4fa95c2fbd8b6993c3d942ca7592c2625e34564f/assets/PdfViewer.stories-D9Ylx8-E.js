import{j as r,M as s}from"./iframe-ClI_suoI.js";import{P as p}from"./pdf-viewer-DMdmpvHX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D5kEisI0.js";import"./preload-helper-D0Vsi6i3.js";import"./PdfViewer-Bru4dPEJ.js";import"./index-BOKiLQxP.js";import"./BasePdfViewer-CBKJ1Vnx.js";import"./BasePdfViewer.module.css-CPj1Avcp.js";import"./PdfViewerAnnotationLayer-DX47H8D1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DDDqobnS.js";import"./PdfViewerOutlineSidebar-B3flDTDO.js";import"./PdfViewerSidebarHeader-BYMGgQtV.js";import"./useBaseUiId-Dc6nwPYL.js";import"./useControlled-Blt5oj3t.js";import"./CompositeRoot-ClnmRL1w.js";import"./CompositeItem-BOlADeZN.js";import"./ToolbarRootContext-BRzHaDW7.js";import"./composite-BJOTlA1D.js";import"./svgIconContainer-CUHjWuFL.js";import"./PdfViewerSearchBar-CmLHSemo.js";import"./chevron-up-CXiJHLOa.js";import"./chevron-down-BZBtwvY3.js";import"./cross-BQ8MM7XW.js";import"./PdfViewerSidebar-BRuyRs3j.js";import"./index-iFSHL4p3.js";import"./index-l7ila5kK.js";import"./index-BM0PuGji.js";import"./PdfViewerToolbar-B0ZFLvGr.js";import"./Button-COPur_kS.js";import"./chevron-right-CJ1ZJtsS.js";import"./Input-DBdXXl4r.js";import"./search-DE3wrgSm.js";import"./spin-kl08EjXC.js";import"./error-p2VRCnQK.js";import"./withOsdkMetrics-DG46gbmI.js";import"./makeExternalStore-BDP9Ow_W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
