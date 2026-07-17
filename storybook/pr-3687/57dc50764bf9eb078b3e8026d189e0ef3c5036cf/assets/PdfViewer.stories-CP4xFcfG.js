import{j as r,M as s}from"./iframe-dM1Kh9EX.js";import{P as p}from"./pdf-viewer-B6pJLwo_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CiNIY-lB.js";import"./preload-helper-7FMWkzZS.js";import"./PdfRenderer-CIDdm7PS.js";import"./index-B_KvKlce.js";import"./PdfViewer-CVgVHPPK.js";import"./PdfViewer.module.css-DheseezA.js";import"./PdfViewerAnnotationLayer-UjtB9YKi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbPTZy8L.js";import"./PdfViewerOutlineSidebar-Dk_MXuu6.js";import"./PdfViewerSidebarHeader-YttEnyxn.js";import"./useBaseUiId-CVUY4bty.js";import"./useControlled-BZAbwJqP.js";import"./CompositeRoot-CXFaaCk8.js";import"./CompositeItem-DEsFuTA4.js";import"./ToolbarRootContext-Dz7Y7U5D.js";import"./composite-DO-bqvDw.js";import"./svgIconContainer-Cx6Roc0W.js";import"./PdfViewerSearchBar-_H225XHp.js";import"./chevron-up-CICF6PGb.js";import"./chevron-down-VABUlAmo.js";import"./cross-7AVQJru9.js";import"./PdfViewerSidebar-DC0gp4PS.js";import"./index-C0EtQevH.js";import"./index-g4kvI24p.js";import"./index-hjB_ZAfP.js";import"./PdfViewerToolbar-D_2M6Ol8.js";import"./Button-CVLs3bjY.js";import"./chevron-right-BMZ-yPjq.js";import"./Input-DMcuRq9E.js";import"./search-Bnfq5zPQ.js";import"./spin-iugNYygR.js";import"./error-ByQ05fhN.js";import"./withOsdkMetrics-CXmu9d_h.js";import"./makeExternalStore-DOsKi0Pr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
