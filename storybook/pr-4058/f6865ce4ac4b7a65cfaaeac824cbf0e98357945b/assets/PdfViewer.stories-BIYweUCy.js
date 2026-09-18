import{j as r,M as s}from"./iframe-D4YDcgkV.js";import{P as p}from"./pdf-viewer-1HrO2Sk1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Qr71AyL7.js";import"./preload-helper-DCpW9ncL.js";import"./PdfViewer-b9PaSuCE.js";import"./index-8cY8PtKc.js";import"./BasePdfViewer-BH9N0X8c.js";import"./BasePdfViewer.module.css-BrvlBFtM.js";import"./PdfViewerAnnotationLayer-wySpKKjR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hD77BUY9.js";import"./PdfViewerOutlineSidebar-D6UfSJzy.js";import"./PdfViewerSidebarHeader-Cb1SRH4m.js";import"./useBaseUiId-Ce1LHnbR.js";import"./useControlled-Bj0_koJm.js";import"./CompositeRoot-BeFBVw78.js";import"./CompositeItem-CnYlQOQU.js";import"./ToolbarRootContext-BCQVnjEL.js";import"./composite-B2mz0pd-.js";import"./svgIconContainer-COB7RfBn.js";import"./PdfViewerSearchBar-DVXzxh_G.js";import"./chevron-up-ClZcIOpV.js";import"./chevron-down-BuYLfoea.js";import"./cross-Behni1B5.js";import"./PdfViewerSidebar-Bhk4j4nQ.js";import"./index-DFYfgBX1.js";import"./index-BDXEDFqG.js";import"./index-D59BFBqo.js";import"./PdfViewerToolbar-DgiHP4qo.js";import"./Button--v4W1QZO.js";import"./chevron-right-ClYBr9ue.js";import"./Input-Ddw8KtcR.js";import"./search-DK0Hi7mb.js";import"./spin-BdvIRdyG.js";import"./error-CiQk9egS.js";import"./withOsdkMetrics-BfFmFbhV.js";import"./makeExternalStore-CBSa4JL4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
