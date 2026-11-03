import{j as r,M as s}from"./iframe-DdFNuve9.js";import{P as p}from"./pdf-viewer-BwXJSAi2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BxgAdH8m.js";import"./preload-helper-BF0zHEQ9.js";import"./PdfViewer-D6u6QEm_.js";import"./index-COFBYoj0.js";import"./BasePdfViewer-70rdZ9vX.js";import"./BasePdfViewer.module.css-CI7jKls-.js";import"./PdfViewerAnnotationLayer-Bmz7V9Ie.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFPrKPt7.js";import"./PdfViewerOutlineSidebar-D3MN3p5y.js";import"./PdfViewerSidebarHeader-Bh4Sq7t-.js";import"./useBaseUiId-DrBZRYC3.js";import"./useControlled-S1lUya7y.js";import"./CompositeRoot-2utz8fnL.js";import"./CompositeItem-D3i9R6e9.js";import"./ToolbarRootContext-lq7yZP_w.js";import"./composite-C6KVf4LM.js";import"./svgIconContainer-BqEjzz1q.js";import"./PdfViewerSearchBar-DQzA03CA.js";import"./chevron-up-Cv6kqjc1.js";import"./chevron-down-BQgLyWBH.js";import"./cross-B7UPksVb.js";import"./PdfViewerSidebar-C78XO6wV.js";import"./index-CWvJ-sqM.js";import"./index-CoKG21UB.js";import"./index-LHJitHOy.js";import"./PdfViewerToolbar-BS4Uz9QE.js";import"./Button-iraM8Bjb.js";import"./chevron-right-DtmB02li.js";import"./Input-CnU8KDdl.js";import"./search-CL3Pgcnj.js";import"./spin-DSNh-lPi.js";import"./error-BFEjzhDR.js";import"./withOsdkMetrics-DBiHNDc8.js";import"./makeExternalStore-C_cS4qu3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
