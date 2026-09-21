import{j as r,M as s}from"./iframe-BjF7QLhH.js";import{P as p}from"./pdf-viewer-DL2gexNJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CC6gp_Uj.js";import"./preload-helper-BjubRawJ.js";import"./PdfViewer-1jRtVZkT.js";import"./index-DjhpcMou.js";import"./BasePdfViewer-DKTqTaX4.js";import"./BasePdfViewer.module.css-DKWe7Z5u.js";import"./PdfViewerAnnotationLayer-BtouWBDq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6iISBJz4.js";import"./PdfViewerOutlineSidebar-d6Hz8JQ4.js";import"./PdfViewerSidebarHeader-No4iWxDa.js";import"./useBaseUiId-DsiyrTc5.js";import"./useControlled-k0Oisgsr.js";import"./CompositeRoot-Di820AC1.js";import"./CompositeItem-CJJAstdN.js";import"./ToolbarRootContext-160MLPLN.js";import"./composite-C3VIqVTD.js";import"./svgIconContainer-BOlpbv4R.js";import"./PdfViewerSearchBar-DFAcO3IR.js";import"./chevron-up-CmrGbNCr.js";import"./chevron-down-qzCHSoFz.js";import"./cross-H3gYztYg.js";import"./PdfViewerSidebar-DgQ-p_Du.js";import"./index-Zf4kiRn8.js";import"./index-dd7HiSC0.js";import"./index-D9CUEICi.js";import"./PdfViewerToolbar-uvm-NzZE.js";import"./Button-BaubE4M6.js";import"./chevron-right-CXgPRNlk.js";import"./Input-EpQSMSPb.js";import"./search-CfhozSoV.js";import"./spin-B6scQNNt.js";import"./error-DEWhTW9J.js";import"./withOsdkMetrics-BhtzFR1P.js";import"./makeExternalStore--bKLbn6H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
