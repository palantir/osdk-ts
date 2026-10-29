import{j as r,M as s}from"./iframe-CrBTuD2p.js";import{P as p}from"./pdf-viewer-gw5bD6oA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtTm9Bk2.js";import"./preload-helper-BjNyA4Tc.js";import"./PdfViewer-DPKKwNy5.js";import"./index-CFzUVYi2.js";import"./BasePdfViewer-mhBw8laP.js";import"./BasePdfViewer.module.css-LWFtlg4Z.js";import"./PdfViewerAnnotationLayer-DqSGWV8q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcGnQm96.js";import"./PdfViewerOutlineSidebar-C9Ys9QoJ.js";import"./PdfViewerSidebarHeader-D-SMAMcj.js";import"./useBaseUiId-BBTk7qb4.js";import"./useControlled-D0EXlvvG.js";import"./CompositeRoot-BIz-REx_.js";import"./CompositeItem-BE6iDbTy.js";import"./ToolbarRootContext-BXCYOJCq.js";import"./composite-BeVo3QMW.js";import"./svgIconContainer-DW2driag.js";import"./PdfViewerSearchBar-CZlBaXMJ.js";import"./chevron-up-CTqsFpY3.js";import"./chevron-down-BqX1E0HN.js";import"./cross-BBINy6sP.js";import"./PdfViewerSidebar-Dkl9U2-Q.js";import"./index-CEtkH-ta.js";import"./index-BqULJUvL.js";import"./index-Bnr4tUfA.js";import"./PdfViewerToolbar-DSLxDcxb.js";import"./Button-6cIUTGc1.js";import"./chevron-right-JfXxbN1s.js";import"./Input-7YuL0Mnz.js";import"./search-BDp0U2-N.js";import"./spin-CYlh11ir.js";import"./error-D-C4TtvX.js";import"./withOsdkMetrics-BvGvy0SD.js";import"./makeExternalStore-Dq8QV5--.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
