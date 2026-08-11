import{j as r,M as s}from"./iframe-Cl70dWji.js";import{P as p}from"./pdf-viewer-Dx71Jt5x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BHUc57bU.js";import"./preload-helper-QiZ_zLcF.js";import"./PdfRenderer-CnqTkGqg.js";import"./index-Ds00pONi.js";import"./PdfViewer-C3SSWUBJ.js";import"./PdfViewer.module.css-Ca8fwi0H.js";import"./PdfViewerAnnotationLayer-BCdLhkx6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DP7RWI1t.js";import"./PdfViewerOutlineSidebar-OdxCDIVz.js";import"./PdfViewerSidebarHeader-DN_f7TpK.js";import"./useBaseUiId-DOyYal5B.js";import"./useControlled-Q9tFcpq6.js";import"./CompositeRoot-DGPktDHT.js";import"./CompositeItem-BomeUMbI.js";import"./ToolbarRootContext-DqYG79A3.js";import"./composite-C748PZ0N.js";import"./svgIconContainer-BTNEBHys.js";import"./PdfViewerSearchBar-CODCy8_c.js";import"./chevron-up-dcjeVbRf.js";import"./chevron-down-CVLu7rIR.js";import"./cross-BB7Pc46-.js";import"./PdfViewerSidebar-BA3p3D2r.js";import"./index-CoYvOkpA.js";import"./index-C3QZTmM_.js";import"./index-CafCqYhX.js";import"./PdfViewerToolbar-DVhJEL98.js";import"./Button-D15y4J1a.js";import"./chevron-right-ehTabD9r.js";import"./Input-BXSbXZmI.js";import"./search-DF6sLdtJ.js";import"./spin-BXAzwGOb.js";import"./error-BlBC8OXl.js";import"./withOsdkMetrics-DW3ouCxC.js";import"./makeExternalStore-BMmPmQBR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
