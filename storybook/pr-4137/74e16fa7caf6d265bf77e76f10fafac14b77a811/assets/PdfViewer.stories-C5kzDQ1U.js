import{j as r,M as s}from"./iframe-hU9JLApV.js";import{P as p}from"./pdf-viewer-DRoXBJ_E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CS_qIXun.js";import"./preload-helper-AOIAtsF4.js";import"./PdfViewer-D8hjTmOp.js";import"./index-hWpPzCns.js";import"./BasePdfViewer-DlMgAcfW.js";import"./BasePdfViewer.module.css-DPlVy2VX.js";import"./PdfViewerAnnotationLayer-Dzjl8T_l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B96Z0p_f.js";import"./PdfViewerOutlineSidebar-B06XdwdH.js";import"./PdfViewerSidebarHeader-CM9eCSi5.js";import"./useBaseUiId-D4EPdJVo.js";import"./useControlled-Ee3F40Eh.js";import"./CompositeRoot-BkcZDV_2.js";import"./CompositeItem-D6B-PBPX.js";import"./ToolbarRootContext-CBnaAJo0.js";import"./composite-CG9ZuuKA.js";import"./svgIconContainer-C2qhBo7T.js";import"./PdfViewerSearchBar-CcXW7m5Q.js";import"./chevron-up-D0o9u8ZK.js";import"./chevron-down--KZfqGJl.js";import"./cross-B2QeVIfm.js";import"./PdfViewerSidebar-CLl6W5dm.js";import"./index-DcEtsm11.js";import"./index-B1eIq1Hb.js";import"./index-DQGyJzH9.js";import"./PdfViewerToolbar-C49HZ1_S.js";import"./Button-DajEVgZJ.js";import"./chevron-right-eUo-XoOk.js";import"./Input-BRXbodNm.js";import"./search-B_1m1rLM.js";import"./spin-CJnOlVzn.js";import"./error-C7_JEIae.js";import"./withOsdkMetrics-D81YUmhb.js";import"./makeExternalStore-DI5XEFVo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
