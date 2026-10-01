import{j as r,M as s}from"./iframe-BBS1bhxz.js";import{P as p}from"./pdf-viewer-D58M0q9i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B3nXxbWT.js";import"./preload-helper-DbqFABQK.js";import"./PdfViewer-B_kvi4IA.js";import"./index-BwzBBeai.js";import"./BasePdfViewer-D28XgY6j.js";import"./BasePdfViewer.module.css-DHkBc8No.js";import"./PdfViewerAnnotationLayer-8etYGOPX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C479zqIu.js";import"./PdfViewerOutlineSidebar-D0-V7evk.js";import"./PdfViewerSidebarHeader-B5qB1CC-.js";import"./useBaseUiId-CYB9Dsir.js";import"./useControlled-0gW62wDn.js";import"./CompositeRoot-reepbBt8.js";import"./CompositeItem-BGGFMuw6.js";import"./ToolbarRootContext-COBR2HeU.js";import"./composite-6tiSR5Xk.js";import"./svgIconContainer-DkabfjQp.js";import"./PdfViewerSearchBar-ChPuS643.js";import"./chevron-up-9Or_TKC1.js";import"./chevron-down-CHLXsa5V.js";import"./cross-CNiIBNRR.js";import"./PdfViewerSidebar-BQSuf96a.js";import"./index-DRQ9Ijyk.js";import"./index-8i8Pb6X4.js";import"./index-KEup_jqV.js";import"./PdfViewerToolbar-DpMQLvOK.js";import"./Button-BB3rVnV9.js";import"./chevron-right-CYiT-9cH.js";import"./Input-xVXK2Roi.js";import"./search-DcQmB7Y_.js";import"./spin-lOMfNxKt.js";import"./error-D-l7GhZN.js";import"./withOsdkMetrics-BcsPvRcs.js";import"./makeExternalStore-CzAndpId.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
