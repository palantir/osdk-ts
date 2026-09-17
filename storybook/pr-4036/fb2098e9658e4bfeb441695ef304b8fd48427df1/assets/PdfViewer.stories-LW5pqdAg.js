import{j as r,M as s}from"./iframe-D_qRpeHj.js";import{P as p}from"./pdf-viewer-B5RE7yFD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BbaM5b51.js";import"./preload-helper-D_9N_6Hv.js";import"./PdfViewer-CJoB4al1.js";import"./index-ze-4_PID.js";import"./BasePdfViewer-DqDIcAwx.js";import"./BasePdfViewer.module.css-DU_w5OOF.js";import"./PdfViewerAnnotationLayer-ChSLzi6F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-a_j1hX14.js";import"./PdfViewerOutlineSidebar-DWT6PJBQ.js";import"./PdfViewerSidebarHeader-Cc-0o0NJ.js";import"./useBaseUiId-By5i2rdz.js";import"./useControlled-Y53AopBQ.js";import"./CompositeRoot-smJwtwn7.js";import"./CompositeItem-B_Ho19nn.js";import"./ToolbarRootContext-Dkj0BbLv.js";import"./composite-C0V0hw5E.js";import"./svgIconContainer-CoeSRgcf.js";import"./PdfViewerSearchBar-CIVhohT2.js";import"./chevron-up-DYjXMRo1.js";import"./chevron-down-4vjSc27s.js";import"./cross-BxS6mKVf.js";import"./PdfViewerSidebar-Cmib9aBE.js";import"./index-DMf8On8K.js";import"./index-CZLowYbM.js";import"./index-DfyhkSOl.js";import"./PdfViewerToolbar-DF_-bahA.js";import"./Button-BV5h0__V.js";import"./chevron-right-t_giMafv.js";import"./Input-BNbV4MTG.js";import"./search-BGYV6IKj.js";import"./spin-BtKXsbAA.js";import"./error-CushKjuF.js";import"./withOsdkMetrics-B7kRIAyY.js";import"./makeExternalStore-Cgf26SsV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
