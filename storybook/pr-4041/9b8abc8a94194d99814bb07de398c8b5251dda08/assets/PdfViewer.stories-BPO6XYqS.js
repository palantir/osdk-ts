import{j as r,M as s}from"./iframe-C2aef3Jo.js";import{P as p}from"./pdf-viewer-BqqfLGBD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-c2SsH9zH.js";import"./preload-helper-B0E-WsIe.js";import"./PdfViewer-BReyDWjJ.js";import"./index-CsHYpv_s.js";import"./BasePdfViewer-Da3HCgct.js";import"./BasePdfViewer.module.css-5-VKa9ve.js";import"./PdfViewerAnnotationLayer-DbzgPHRc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwGSSlI0.js";import"./PdfViewerOutlineSidebar-CH7oHxRH.js";import"./PdfViewerSidebarHeader-DIXLEtTO.js";import"./useBaseUiId-BjYhZ9YY.js";import"./useControlled-D_x1ayHM.js";import"./CompositeRoot-B0A_RBGx.js";import"./CompositeItem-083J1aRu.js";import"./ToolbarRootContext-B7lRNTOm.js";import"./composite-B2RxptoP.js";import"./svgIconContainer-BXdP-ypI.js";import"./PdfViewerSearchBar-DbZpwHJq.js";import"./chevron-up-DQKJPKTK.js";import"./chevron-down-DQZukdfl.js";import"./cross-mqWCDQwu.js";import"./PdfViewerSidebar-C6PI33a0.js";import"./index-aIdw8oWM.js";import"./index-DQucsIw7.js";import"./index-Cp-EDvHL.js";import"./PdfViewerToolbar-Bvc8eSa4.js";import"./Button-Cg9SUJSs.js";import"./chevron-right-B5i248Cw.js";import"./Input-DZdZFiVD.js";import"./search-D59Jmp9F.js";import"./spin-CIgFfT57.js";import"./error-D0kSZtEZ.js";import"./withOsdkMetrics-DRjEcDDc.js";import"./makeExternalStore-Bm5e9_5-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
