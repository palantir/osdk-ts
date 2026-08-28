import{j as r,M as s}from"./iframe-Cksi0ItS.js";import{P as p}from"./pdf-viewer-BK2jWpGA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C1-W6i1b.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CHOxNUE9.js";import"./index-4Cg-nFaV.js";import"./BasePdfViewer-x0CLMbgW.js";import"./BasePdfViewer.module.css-CWBvDt1a.js";import"./PdfViewerAnnotationLayer-DHKodFnQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1lSg3Mb.js";import"./PdfViewerOutlineSidebar-D6GYJQQA.js";import"./PdfViewerSidebarHeader-KhE4NCmC.js";import"./useBaseUiId-CkaYEHZt.js";import"./useControlled-DgHn0JqS.js";import"./CompositeRoot-BbRbLlfP.js";import"./CompositeItem-DGPROoar.js";import"./ToolbarRootContext-Br_vAgTK.js";import"./composite-9gDjU4W9.js";import"./svgIconContainer-ugyIC0ZV.js";import"./PdfViewerSearchBar-CyD-Fr9-.js";import"./chevron-up-DY9Bj_-D.js";import"./chevron-down-BSLIpQnp.js";import"./cross-KCH3fUDA.js";import"./PdfViewerSidebar-DSjYcS65.js";import"./index-Cya7fJ6D.js";import"./index-BLXqe3dF.js";import"./index-BGUbSh7o.js";import"./PdfViewerToolbar-DEBrNGyh.js";import"./Button-tLjrLZry.js";import"./chevron-right-ByIEDOMd.js";import"./Input-B1lOZjYh.js";import"./search-CAR5_cMX.js";import"./spin-B71LEudH.js";import"./error-C-0hAT3N.js";import"./withOsdkMetrics-tZacdIUn.js";import"./makeExternalStore-DUwh_7mZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
