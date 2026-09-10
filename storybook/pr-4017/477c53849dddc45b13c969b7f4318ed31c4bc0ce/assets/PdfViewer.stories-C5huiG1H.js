import{j as r,M as s}from"./iframe-vnKEgnca.js";import{P as p}from"./pdf-viewer-CsSfQTJU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BVpDjA2H.js";import"./preload-helper-sQW1CADx.js";import"./PdfViewer-Yy6J8SN9.js";import"./index-BeGfthlJ.js";import"./BasePdfViewer-DuNZI3oL.js";import"./BasePdfViewer.module.css-Be5Z8CHC.js";import"./PdfViewerAnnotationLayer-BZi7m-tA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-djqI1R9T.js";import"./PdfViewerOutlineSidebar-vunpV7H8.js";import"./PdfViewerSidebarHeader-BcgCx9TS.js";import"./useBaseUiId-CgxqfjcM.js";import"./useControlled-Bxc3bdV1.js";import"./CompositeRoot-C3fvDz1z.js";import"./CompositeItem-1_Yzr1XW.js";import"./ToolbarRootContext-CwAo2bG9.js";import"./composite-C9k3QAIL.js";import"./svgIconContainer-NsUuck07.js";import"./PdfViewerSearchBar-DYLouFGR.js";import"./chevron-up-DKN-imNl.js";import"./chevron-down-DEu7XuhT.js";import"./cross-_8csVoP1.js";import"./PdfViewerSidebar-Ca6aB1Ny.js";import"./index-BvRjSpJH.js";import"./index-fmSw06oW.js";import"./index-CFCh4JjT.js";import"./PdfViewerToolbar-D4WIlVzP.js";import"./Button-28NdSEt3.js";import"./chevron-right-BwhMVZZd.js";import"./Input-CWIjEhtY.js";import"./search-DSYVPSfx.js";import"./spin-NblOk9of.js";import"./error-BV36DzgX.js";import"./withOsdkMetrics-Dh0bq2dQ.js";import"./makeExternalStore-CcMSZMO7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
