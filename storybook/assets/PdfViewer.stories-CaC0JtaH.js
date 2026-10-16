import{j as r,M as s}from"./iframe-CE0i8pTB.js";import{P as p}from"./pdf-viewer-xfarlBq5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DecfdZUP.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-Dq-qXv1h.js";import"./index-B12pLj4f.js";import"./BasePdfViewer-ClpTTSa4.js";import"./BasePdfViewer.module.css-CZISBuQu.js";import"./PdfViewerAnnotationLayer-Bvm9IifC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIGdtS-D.js";import"./PdfViewerOutlineSidebar-CcYsxbA2.js";import"./PdfViewerSidebarHeader-BY0hdHgG.js";import"./useBaseUiId-DyVtWBOW.js";import"./useControlled-CDXR85QA.js";import"./CompositeRoot-BxThsILO.js";import"./CompositeItem-Ei3HHm0y.js";import"./ToolbarRootContext-DUj8Vy75.js";import"./composite-C3AQHTlr.js";import"./svgIconContainer-B8VYHmcD.js";import"./PdfViewerSearchBar-x1B2ni9U.js";import"./chevron-up-ChqwJ-qy.js";import"./chevron-down-D2N1M9YY.js";import"./cross-B7SwfS_M.js";import"./PdfViewerSidebar-sLONqAXk.js";import"./index-DaY6cbYZ.js";import"./index-D0yQsmtH.js";import"./index-BxLsqAz-.js";import"./PdfViewerToolbar-LHNMHoHH.js";import"./Button-CEwAliaC.js";import"./chevron-right-BSL0meFD.js";import"./Input-Bhr3RBZS.js";import"./search-B_4eoJVo.js";import"./spin-CSmDxVIi.js";import"./error-WOehnpts.js";import"./withOsdkMetrics-DRff-iWr.js";import"./makeExternalStore-CD97K3xm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
