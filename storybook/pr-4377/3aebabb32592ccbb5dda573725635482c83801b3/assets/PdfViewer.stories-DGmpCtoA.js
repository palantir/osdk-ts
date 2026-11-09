import{j as r,M as s}from"./iframe-DgulMOaF.js";import{P as p}from"./pdf-viewer-DzzeKaZk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fs6EN_NI.js";import"./preload-helper-Dl5VLDEn.js";import"./PdfViewer-j_bmypoJ.js";import"./index-dtvh1Mr6.js";import"./BasePdfViewer-C-XmqVLb.js";import"./BasePdfViewer.module.css-sR3MWgQM.js";import"./PdfViewerAnnotationLayer-CcK9GuJo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BBJljs9f.js";import"./PdfViewerOutlineSidebar-9aIM_emI.js";import"./PdfViewerSidebarHeader-CuR-4TK0.js";import"./useBaseUiId-BS6Gc1dg.js";import"./useControlled-CvnKakZJ.js";import"./CompositeRoot-LQXea6L4.js";import"./CompositeItem-D1z33XFc.js";import"./ToolbarRootContext-fgw45yYw.js";import"./composite-Cb3XgmrA.js";import"./svgIconContainer-Ba3T_jNO.js";import"./PdfViewerSearchBar-B65AURuD.js";import"./chevron-up-DhpaVvSH.js";import"./chevron-down-ClbU1eSU.js";import"./cross-y6EWAWli.js";import"./PdfViewerSidebar-DmPXNlC6.js";import"./index-qbkePvxR.js";import"./index-PgG1IVJP.js";import"./index-CNbeLsb0.js";import"./PdfViewerToolbar-D-BzxerE.js";import"./Button-DlQAkLGN.js";import"./chevron-right-DfGB_G2D.js";import"./Input-CtG2S7FH.js";import"./search-TtbfO7CA.js";import"./spin-BiS1V-DA.js";import"./error-ddwbLDxk.js";import"./withOsdkMetrics-Baexeub2.js";import"./makeExternalStore-DI6My3xA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
