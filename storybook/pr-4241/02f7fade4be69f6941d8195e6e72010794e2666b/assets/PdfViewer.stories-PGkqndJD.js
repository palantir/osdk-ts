import{j as r,M as s}from"./iframe-Z5B59nHv.js";import{P as p}from"./pdf-viewer-DBn2BOlh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C4FPo9pH.js";import"./preload-helper-B3LVR9LX.js";import"./PdfViewer-Da8OTzaS.js";import"./index-cU0AVaQf.js";import"./BasePdfViewer-DfYi4F8R.js";import"./BasePdfViewer.module.css-O1SbYvlC.js";import"./PdfViewerAnnotationLayer-BsKPxiwu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bl58zjsK.js";import"./PdfViewerOutlineSidebar-Co81iFjV.js";import"./PdfViewerSidebarHeader-Cz8I8Eew.js";import"./useBaseUiId-DN7B2pea.js";import"./useControlled-BQV59h-A.js";import"./CompositeRoot-eyJrG7SY.js";import"./CompositeItem-jpYgtvmQ.js";import"./ToolbarRootContext-Bs124fL_.js";import"./composite-Dna_oWev.js";import"./svgIconContainer-B_Sf7Uoj.js";import"./PdfViewerSearchBar-CqvY-U_q.js";import"./chevron-up-BraaQmq6.js";import"./chevron-down-nfT9szK9.js";import"./cross-Cwrmhou9.js";import"./PdfViewerSidebar-iEefPql9.js";import"./index-DMp4QYwj.js";import"./index-Csf5-H5s.js";import"./index-CwXTPSTU.js";import"./PdfViewerToolbar-B1BVj7hc.js";import"./Button-C8Wmmv8l.js";import"./chevron-right-ChA26d_V.js";import"./Input-Bu230jB_.js";import"./search-CH0ng29D.js";import"./spin-zQEGouEK.js";import"./error-DocjYaCq.js";import"./withOsdkMetrics-DB3Tu-8Y.js";import"./makeExternalStore-rak7eNYQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
