import{j as r,M as s}from"./iframe-Dwa8kb-W.js";import{P as p}from"./pdf-viewer-B4DWbDC3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C3fCdX3c.js";import"./preload-helper-D2z1vNrl.js";import"./PdfViewer-DToSyeEw.js";import"./index-DKKHqoz1.js";import"./BasePdfViewer-CTJQO22v.js";import"./BasePdfViewer.module.css-BDQgnvvB.js";import"./PdfViewerAnnotationLayer-Sjx_vuO3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DBEZqZHD.js";import"./PdfViewerOutlineSidebar-Vkhl_r2P.js";import"./PdfViewerSidebarHeader-CAnN2JM2.js";import"./useBaseUiId-Cogt136Y.js";import"./useControlled-BPd0y_Yh.js";import"./CompositeRoot-DzlS6jXR.js";import"./CompositeItem-CAP2WO9N.js";import"./ToolbarRootContext-CiNKODrc.js";import"./composite-BMbUWovQ.js";import"./svgIconContainer-C5FqMMES.js";import"./PdfViewerSearchBar-7orWvv7i.js";import"./chevron-up-Bfwc08Bk.js";import"./chevron-down-DohnCY6J.js";import"./cross-CIVjhjpG.js";import"./PdfViewerSidebar-Bo0G6J75.js";import"./index-CONAeC1u.js";import"./index-D80Qi5t9.js";import"./index-tbTC1PtM.js";import"./PdfViewerToolbar-BAKBNlqp.js";import"./Button-DiDAQlp3.js";import"./chevron-right-DFd5DMTg.js";import"./Input-CTkf375J.js";import"./search-DYLtDscA.js";import"./spin-6RvfI-Qp.js";import"./error-BCJLeCtt.js";import"./withOsdkMetrics-C1tOk5Js.js";import"./makeExternalStore-CbJLTcnS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
