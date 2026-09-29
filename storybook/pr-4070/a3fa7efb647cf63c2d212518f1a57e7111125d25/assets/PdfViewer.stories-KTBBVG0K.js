import{j as r,M as s}from"./iframe-l_8eBvr6.js";import{P as p}from"./pdf-viewer-DmuG9F50.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQqf8H20.js";import"./preload-helper-CWo-haOY.js";import"./PdfViewer-CLObvWyi.js";import"./index-pTEOeQs1.js";import"./BasePdfViewer-CC42ZmYf.js";import"./BasePdfViewer.module.css-Dvr5Ic3r.js";import"./PdfViewerAnnotationLayer-CCYCgJff.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LeAfIYdG.js";import"./PdfViewerOutlineSidebar-CUovTnBX.js";import"./PdfViewerSidebarHeader-C5umMW64.js";import"./useBaseUiId-GR3xcgzw.js";import"./useControlled-_ZKeS4Zg.js";import"./CompositeRoot-C3hNuKPf.js";import"./CompositeItem-DVcnG8tP.js";import"./ToolbarRootContext-D8m03rR2.js";import"./composite-DKO9W0st.js";import"./svgIconContainer-BE3MMvAi.js";import"./PdfViewerSearchBar-RWiN_rpT.js";import"./chevron-up-CtU8XA-H.js";import"./chevron-down-Dr_zm-jW.js";import"./cross-AIldtqcf.js";import"./PdfViewerSidebar-BV9j61M5.js";import"./index-CTOamDEC.js";import"./index-rFITWboZ.js";import"./index-CsnFWtbo.js";import"./PdfViewerToolbar-D6jqfmqq.js";import"./Button-D_UBsIlq.js";import"./chevron-right-B9Kmtx2F.js";import"./Input-b3HEdj9w.js";import"./search-53j1pAYR.js";import"./spin-kkqSzRlt.js";import"./error-BjQYuyH5.js";import"./withOsdkMetrics-C36UZcw9.js";import"./makeExternalStore-DEwbFKap.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
