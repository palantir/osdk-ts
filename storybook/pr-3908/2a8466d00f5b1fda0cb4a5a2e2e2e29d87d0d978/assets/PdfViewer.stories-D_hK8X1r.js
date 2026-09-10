import{j as r,M as s}from"./iframe-B-80Mkm7.js";import{P as p}from"./pdf-viewer-Dvkmh7aG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMDMCPf7.js";import"./preload-helper-CqWsSCnZ.js";import"./PdfViewer-BpV76yRt.js";import"./index-AUifcsh0.js";import"./BasePdfViewer-aJGHXL_A.js";import"./BasePdfViewer.module.css-BWh8LMqg.js";import"./PdfViewerAnnotationLayer-Dcn4Wk8o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-u8EEfK76.js";import"./PdfViewerOutlineSidebar-w3t5bsHz.js";import"./PdfViewerSidebarHeader-Ba-SXXdA.js";import"./useBaseUiId-7EkOsbTl.js";import"./useControlled-BL4sDI8Q.js";import"./CompositeRoot-ect_8gxa.js";import"./CompositeItem-tArM5MUt.js";import"./ToolbarRootContext-C019PK9Y.js";import"./composite-BvjfwejW.js";import"./svgIconContainer-CCfq-fpw.js";import"./PdfViewerSearchBar-30y3WNO2.js";import"./chevron-up-dfyt_-51.js";import"./chevron-down-D6ZF1kx7.js";import"./cross-BVjH4vnv.js";import"./PdfViewerSidebar-B75GUTCk.js";import"./index-Bh1jiVMQ.js";import"./index-C1oNvpYj.js";import"./index-CdT_AVM0.js";import"./PdfViewerToolbar-BvV1063g.js";import"./Button-BhiWz6E2.js";import"./chevron-right-B-DUxkzP.js";import"./Input-DSreAQ9Z.js";import"./search-B3LLLRfT.js";import"./spin-BwLoI7T7.js";import"./error-D-y1nCx5.js";import"./withOsdkMetrics-B8oz1zlb.js";import"./makeExternalStore-BgRq75tG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
