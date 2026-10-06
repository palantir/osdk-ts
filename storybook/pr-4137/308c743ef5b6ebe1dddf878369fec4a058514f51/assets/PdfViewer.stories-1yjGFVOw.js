import{j as r,M as s}from"./iframe-C-FIv6o_.js";import{P as p}from"./pdf-viewer-DABpj--Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DcScU7z4.js";import"./preload-helper-BlbsPBXS.js";import"./PdfViewer-DHuIn1xO.js";import"./index-DiYvs7cZ.js";import"./BasePdfViewer-ZzRYhGP3.js";import"./BasePdfViewer.module.css-BlYRtUaQ.js";import"./PdfViewerAnnotationLayer-BONd7mhu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Vzrmu4y7.js";import"./PdfViewerOutlineSidebar-CAHuJrng.js";import"./PdfViewerSidebarHeader-ubc2TtMC.js";import"./useBaseUiId-8fHz63fW.js";import"./useControlled-CSYe1hyF.js";import"./CompositeRoot-CAnEnr_v.js";import"./CompositeItem-C0WJbRI5.js";import"./ToolbarRootContext-Kc9KsJC5.js";import"./composite-DY-2h9J_.js";import"./svgIconContainer-CH0vCO_z.js";import"./PdfViewerSearchBar-ByTpOUGb.js";import"./chevron-up-BC2QNaDC.js";import"./chevron-down-CGWHDi30.js";import"./cross-D6R41ZsP.js";import"./PdfViewerSidebar-Bc_7MLTA.js";import"./index-CqnCJeYa.js";import"./index-B0FBWnJm.js";import"./index-Bbgv3w0b.js";import"./PdfViewerToolbar-DagDWPDx.js";import"./Button-CDwEbwO9.js";import"./chevron-right-9WYZwqVr.js";import"./Input-BU1-9D_8.js";import"./search-kQP18GK_.js";import"./spin-CHQCS0a3.js";import"./error-BRmo5GmE.js";import"./withOsdkMetrics-CUO4ZO-M.js";import"./makeExternalStore-DtEBDbfK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
