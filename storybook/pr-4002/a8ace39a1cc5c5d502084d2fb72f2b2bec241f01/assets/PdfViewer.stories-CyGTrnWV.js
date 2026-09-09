import{j as r,M as s}from"./iframe-Dhq7AaUP.js";import{P as p}from"./pdf-viewer-Da6cJiTr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjHzrjmY.js";import"./preload-helper-B5t1nGT4.js";import"./PdfViewer-Cbcw-SH-.js";import"./index-505BPbMk.js";import"./BasePdfViewer-CNDFHPYT.js";import"./BasePdfViewer.module.css-CtYVN7lp.js";import"./PdfViewerAnnotationLayer-CrSZuqqq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTSpGMik.js";import"./PdfViewerOutlineSidebar-DYh6P9R5.js";import"./PdfViewerSidebarHeader-B7uHzjlW.js";import"./useBaseUiId-8_wbyGGA.js";import"./useControlled-CWg50-5h.js";import"./CompositeRoot-m8DgL1Mk.js";import"./CompositeItem-CmAuNbAQ.js";import"./ToolbarRootContext-BPtqJH5V.js";import"./composite-m_TTOmrH.js";import"./svgIconContainer-D5rjHQJh.js";import"./PdfViewerSearchBar-rOpFAqeA.js";import"./chevron-up-Bck8wAdS.js";import"./chevron-down-D4blBvUy.js";import"./cross-BTExjjDl.js";import"./PdfViewerSidebar-HBeMxnb3.js";import"./index-MT3wqTUP.js";import"./index-5i4D4FjR.js";import"./index-Cn7LZsiB.js";import"./PdfViewerToolbar-4aB5UJaV.js";import"./Button-DHokje8p.js";import"./chevron-right-pCXL_qTH.js";import"./Input-BLnXCCTA.js";import"./search-D9UNy25Q.js";import"./spin-Ce3vFHyN.js";import"./error-_SQQqIaC.js";import"./withOsdkMetrics-CQGMBuHv.js";import"./makeExternalStore-v3dRS4Sg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
