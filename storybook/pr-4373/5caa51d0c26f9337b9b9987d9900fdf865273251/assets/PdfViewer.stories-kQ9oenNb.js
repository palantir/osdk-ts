import{j as r,M as s}from"./iframe-DLzx97EJ.js";import{P as p}from"./pdf-viewer-DFRBZTsP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DT_NGrtt.js";import"./preload-helper-CmYTg0Pf.js";import"./PdfViewer-B3O1DHGY.js";import"./index-BEQknSG7.js";import"./BasePdfViewer-BmCpXvZ3.js";import"./BasePdfViewer.module.css-D9f4JZtL.js";import"./PdfViewerAnnotationLayer-CyItciQL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCrWYLCV.js";import"./PdfViewerOutlineSidebar-C12CcoRT.js";import"./PdfViewerSidebarHeader-BJpxg098.js";import"./useBaseUiId-CAg2kwlj.js";import"./useControlled-BbqDqbUq.js";import"./CompositeRoot-Ba8Rcn-3.js";import"./CompositeItem-zOuWTjc0.js";import"./ToolbarRootContext-N07wipSz.js";import"./composite-TVTsKD6c.js";import"./svgIconContainer-C-g24xF0.js";import"./PdfViewerSearchBar-Bcn7OsrB.js";import"./chevron-up-Ce58O9Gj.js";import"./chevron-down-C33gMPot.js";import"./cross-DRLacgjp.js";import"./PdfViewerSidebar-51YUJHEd.js";import"./index-D_0Hlfon.js";import"./index-CgT906ZM.js";import"./index-Cte0d9nS.js";import"./PdfViewerToolbar-CJ7FrLvA.js";import"./Button-CdJ05kOF.js";import"./chevron-right-Cqarwrtc.js";import"./Input-qCKZZo4z.js";import"./search-C5FqELUQ.js";import"./spin-CnMRGTI-.js";import"./error-DMQmvEXe.js";import"./withOsdkMetrics-iNTrmMm4.js";import"./makeExternalStore-BTZjjXmJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
