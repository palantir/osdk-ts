import{j as r,M as s}from"./iframe-CBNXxCfo.js";import{P as p}from"./pdf-viewer-B3XibWQB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1T3nzCtc.js";import"./preload-helper-hNq2x0aF.js";import"./PdfViewer-D2uEXSX8.js";import"./index-tOjn3DuJ.js";import"./BasePdfViewer-CKxp5Rs2.js";import"./BasePdfViewer.module.css-DkKHFuhy.js";import"./PdfViewerAnnotationLayer-CzlGzKPY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmVr_JmI.js";import"./PdfViewerOutlineSidebar-HEj6bnlq.js";import"./PdfViewerSidebarHeader-D2ObZO4z.js";import"./useBaseUiId-DYvTCLZM.js";import"./useControlled-C7MVIRPF.js";import"./CompositeRoot-BIgxY0lU.js";import"./CompositeItem-CMo1LSw0.js";import"./ToolbarRootContext-BkEzRPqI.js";import"./composite-DK294pzn.js";import"./svgIconContainer-Aeg62PdB.js";import"./PdfViewerSearchBar-CM2HQfb5.js";import"./chevron-up-D5hUGuwy.js";import"./chevron-down-CDGLawXt.js";import"./cross-ByQeE0-e.js";import"./PdfViewerSidebar-xTZwnYDu.js";import"./index-D9bbJoJ6.js";import"./index-CWKiu_fE.js";import"./index-FTKj7eco.js";import"./PdfViewerToolbar-DQyzU6rK.js";import"./Button-DGZpthjp.js";import"./chevron-right-BcvNqrF2.js";import"./Input-B4HJdzdZ.js";import"./search-DDNU23bi.js";import"./spin-Db4Slf1r.js";import"./error-DX2juQ7l.js";import"./withOsdkMetrics-DJhX3-qL.js";import"./makeExternalStore-Bv9y4KPm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
