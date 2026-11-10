import{j as r,M as s}from"./iframe-n9hYnZ1k.js";import{P as p}from"./pdf-viewer-DiOM7Ulu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bw-7lupj.js";import"./preload-helper-BfllC993.js";import"./PdfViewer-L4HJ5azf.js";import"./index-jFXEL4dj.js";import"./BasePdfViewer-BKZUl87n.js";import"./BasePdfViewer.module.css-Cnm5VKr2.js";import"./PdfViewerAnnotationLayer-D65eoavv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYGWl51b.js";import"./PdfViewerOutlineSidebar-kNFxhUf7.js";import"./PdfViewerSidebarHeader-BaxN7BVN.js";import"./useBaseUiId--HQwG44S.js";import"./useControlled-DVMhLBcM.js";import"./CompositeRoot-DQOCmPRb.js";import"./CompositeItem-CR3Fp4HR.js";import"./ToolbarRootContext-D77_KmSZ.js";import"./composite-BHMqnRJI.js";import"./svgIconContainer-Ds9BUjSm.js";import"./PdfViewerSearchBar-B34V9PKJ.js";import"./chevron-up-4s-c7Z0m.js";import"./chevron-down-0IZaGxOE.js";import"./cross-B2c8g5Vb.js";import"./PdfViewerSidebar-CYNoP9se.js";import"./index-BM8zROYs.js";import"./index-CD83LihZ.js";import"./index-CsVpqo9H.js";import"./PdfViewerToolbar-CaD8e0zv.js";import"./Button-C1ReapeD.js";import"./chevron-right-PiT8SQ35.js";import"./Input-D9iybl22.js";import"./search-DNZ54Yxb.js";import"./spin-DEUhCvTq.js";import"./error-D9TzGXim.js";import"./withOsdkMetrics-3ldmX6a3.js";import"./makeExternalStore-C_HtZfof.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
