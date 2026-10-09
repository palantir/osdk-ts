import{j as r,M as s}from"./iframe-BJzVVo3C.js";import{P as p}from"./pdf-viewer-DmHbilQF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BY6op9Fs.js";import"./preload-helper-BGo6yCWR.js";import"./PdfViewer-vNMtrdrx.js";import"./index-jYeXRVJt.js";import"./BasePdfViewer-C5waU2wQ.js";import"./BasePdfViewer.module.css-CiigKq_Y.js";import"./PdfViewerAnnotationLayer-hMJ6YIh6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COIBRS_T.js";import"./PdfViewerOutlineSidebar-DN0NAXdE.js";import"./PdfViewerSidebarHeader-DG51trGD.js";import"./useBaseUiId-aWvq-Ojy.js";import"./useControlled-BU_ZAQ-v.js";import"./CompositeRoot-Ciu_bIcY.js";import"./CompositeItem-UocH3YCc.js";import"./ToolbarRootContext-BS8U1N_y.js";import"./composite-DVXx00LN.js";import"./svgIconContainer-BafRnCSe.js";import"./PdfViewerSearchBar-ueEes88t.js";import"./chevron-up-nb-c8NGW.js";import"./chevron-down-GN6eodao.js";import"./cross-BODoIHG7.js";import"./PdfViewerSidebar-BEsd3u5K.js";import"./index-C038wilx.js";import"./index-Cu3TSrS7.js";import"./index-DY-H4zuh.js";import"./PdfViewerToolbar-B5JMdwY9.js";import"./Button-CtA29Am0.js";import"./chevron-right-D0PfcZbb.js";import"./Input-D8VZz3qg.js";import"./search-CNzRQSLi.js";import"./spin-BgWiltgU.js";import"./error-B0Rx4D9Q.js";import"./withOsdkMetrics-BD3BFsPk.js";import"./makeExternalStore-c77j8ZZC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
