import{j as r,M as s}from"./iframe-Bl9Agv3T.js";import{P as p}from"./pdf-viewer-B4_unXBS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ojqWtP7Z.js";import"./preload-helper-C2Q81Ac3.js";import"./PdfViewer-C31ByIfn.js";import"./index-DsMKsdV8.js";import"./BasePdfViewer-Do_hOGcW.js";import"./BasePdfViewer.module.css-BEo7Tpw1.js";import"./PdfViewerAnnotationLayer-DPEn_SM1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwE0bWea.js";import"./PdfViewerOutlineSidebar-CmsdfeIa.js";import"./PdfViewerSidebarHeader-DmYNCFjQ.js";import"./useBaseUiId-CxMJijpy.js";import"./useControlled-BFzsGkd0.js";import"./CompositeRoot-La5M5RJu.js";import"./CompositeItem-D_lixxrU.js";import"./ToolbarRootContext-DtF-FbA5.js";import"./composite-BXwJLY2p.js";import"./svgIconContainer-CYsYLgfA.js";import"./PdfViewerSearchBar-DGJ509Tq.js";import"./chevron-up-BZDHc_ym.js";import"./chevron-down-BpdWjY1P.js";import"./cross-DNHfVbpu.js";import"./PdfViewerSidebar-C_EnVx5m.js";import"./index-CzVK5CEn.js";import"./index-Bqfpj0Ej.js";import"./index-DTOWBSwW.js";import"./PdfViewerToolbar-CADaAnph.js";import"./Button-C9n-JPHB.js";import"./chevron-right-Cq8ETXwP.js";import"./Input-BPwTrKsb.js";import"./search-BMgb5_aJ.js";import"./spin-CH-mGOiT.js";import"./error-BNDEYQ-r.js";import"./withOsdkMetrics-Bn6nYcc2.js";import"./makeExternalStore-D9cq61Qp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
