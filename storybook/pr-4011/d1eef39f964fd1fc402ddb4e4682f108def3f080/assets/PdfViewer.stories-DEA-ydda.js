import{j as r,M as s}from"./iframe-CTo_Vzji.js";import{P as p}from"./pdf-viewer-Br3_5CSY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClBOuDiD.js";import"./preload-helper-DdmOa013.js";import"./PdfViewer-lyY1lQSi.js";import"./index-Db0bQB9_.js";import"./BasePdfViewer-Dn0ZOBDN.js";import"./BasePdfViewer.module.css-DiiGfMB0.js";import"./PdfViewerAnnotationLayer-BV78R26M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKveZztW.js";import"./PdfViewerOutlineSidebar-Ba8x1LiI.js";import"./PdfViewerSidebarHeader-BzqC6DQH.js";import"./useBaseUiId-DRC8ORV_.js";import"./useControlled-BoNXrNA6.js";import"./CompositeRoot-BQ2lIX7u.js";import"./CompositeItem-DzuUOttU.js";import"./ToolbarRootContext-Dbn3i0X6.js";import"./composite-hvvr6RcJ.js";import"./svgIconContainer-BrN7Rq3k.js";import"./PdfViewerSearchBar-C-CL0duF.js";import"./chevron-up-CrGOdmiH.js";import"./chevron-down-DsgPE9Kl.js";import"./cross-CFrNYW1-.js";import"./PdfViewerSidebar-BxvaMk2H.js";import"./index-q7czgvlb.js";import"./index-Dn1u0MHw.js";import"./index-BIdADT_u.js";import"./PdfViewerToolbar-3dCpR6GF.js";import"./Button-C3RHmX63.js";import"./chevron-right-hinqzXnI.js";import"./Input-EzzRC5FT.js";import"./search-DYJawdx1.js";import"./spin-BVXuDuhq.js";import"./error-CDiUdq4p.js";import"./withOsdkMetrics-CosmvfGt.js";import"./makeExternalStore-MWbMkrip.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
