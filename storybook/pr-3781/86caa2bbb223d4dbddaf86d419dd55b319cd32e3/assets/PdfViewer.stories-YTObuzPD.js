import{j as r,M as s}from"./iframe-BzTrYIGj.js";import{P as p}from"./pdf-viewer-BlwK091g.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyWHJFBO.js";import"./preload-helper-DN18uj2q.js";import"./PdfViewer-DoKR25Xl.js";import"./index-BrLV4dFb.js";import"./BasePdfViewer-BgQwAzLb.js";import"./BasePdfViewer.module.css-B0BmM_Yg.js";import"./PdfViewerAnnotationLayer-Dk5pZv0A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ddu6Hr9f.js";import"./PdfViewerOutlineSidebar-mlbG0SMI.js";import"./PdfViewerSidebarHeader-DFCl0UHH.js";import"./useBaseUiId-BnkVlZO6.js";import"./useControlled-DOebwg81.js";import"./CompositeRoot-B-Qg5FF9.js";import"./CompositeItem-BftnSL_x.js";import"./ToolbarRootContext-BxcZ8iGZ.js";import"./composite-BD8s54zP.js";import"./svgIconContainer-BZmpt804.js";import"./PdfViewerSearchBar-Dpa1Mxs4.js";import"./chevron-up-CT3au2HY.js";import"./chevron-down-BgrpuhFy.js";import"./cross-C6h0gf3C.js";import"./PdfViewerSidebar-6ZsuIBY5.js";import"./index-Cetl04Gl.js";import"./index-BwQpmBgV.js";import"./index-Cb5QJVzG.js";import"./PdfViewerToolbar-DCJItBQx.js";import"./Button-iX8EOfC8.js";import"./chevron-right-C77kwETO.js";import"./Input-DYoLRy9q.js";import"./search-C0_wSRgh.js";import"./spin-CADiH_S1.js";import"./error-gmpJmGSg.js";import"./withOsdkMetrics-B4hlBqzl.js";import"./makeExternalStore-TyTg8pnL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
