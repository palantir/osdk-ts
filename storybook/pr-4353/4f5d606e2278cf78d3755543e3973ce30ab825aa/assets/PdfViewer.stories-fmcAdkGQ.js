import{j as r,M as s}from"./iframe-DpQxl-G6.js";import{P as p}from"./pdf-viewer-CUq8qnQc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C817lgDW.js";import"./preload-helper-mRXziM39.js";import"./PdfViewer-DFJFb7_S.js";import"./index-Cujp3sVp.js";import"./BasePdfViewer-DQPzQ8UI.js";import"./BasePdfViewer.module.css-D_1bIFeZ.js";import"./PdfViewerAnnotationLayer-WoujEJ5o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnLg9pGW.js";import"./PdfViewerOutlineSidebar-BAYFUFgt.js";import"./PdfViewerSidebarHeader-BfvLYR_1.js";import"./useBaseUiId-Cl9-toeq.js";import"./useControlled-TG9q_V2m.js";import"./CompositeRoot-BNPHJOkP.js";import"./CompositeItem-DSQrNM-7.js";import"./ToolbarRootContext-D4KBNeKS.js";import"./composite-wCOpmCUF.js";import"./svgIconContainer-DamXBWaI.js";import"./PdfViewerSearchBar-BIqL7Yyq.js";import"./chevron-up-GtjXVGXQ.js";import"./chevron-down-D-RM0tZ4.js";import"./cross-dB1xiAz0.js";import"./PdfViewerSidebar-8Ir2oeMi.js";import"./index-DttXp8FH.js";import"./index-CrIwRE1J.js";import"./index-BGKSJQgI.js";import"./PdfViewerToolbar-DmsxPfiL.js";import"./Button-BpP7RQEd.js";import"./chevron-right-DPCUEpZ-.js";import"./Input-D2U-2W4H.js";import"./search-n4OQKLJh.js";import"./spin-CZ_pAoxv.js";import"./error-DzvIefMA.js";import"./withOsdkMetrics-C9oeFlqw.js";import"./makeExternalStore-BUiRNREx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
