import{j as r,M as s}from"./iframe-CmWe6Tkd.js";import{P as p}from"./pdf-viewer-S3cD7T9e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BSzxjh3M.js";import"./preload-helper-CZkXumnj.js";import"./PdfViewer-BKHk4Hpn.js";import"./index-B0FfbiTF.js";import"./BasePdfViewer-Uk6UJRpq.js";import"./BasePdfViewer.module.css-BTQ-C85P.js";import"./PdfViewerAnnotationLayer-CgrGZ-Ws.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yA6MDfnL.js";import"./PdfViewerOutlineSidebar-x3K_TJOC.js";import"./PdfViewerSidebarHeader-Dejjm9fg.js";import"./useBaseUiId-Bs3xq9h4.js";import"./useControlled-CuXXFPaU.js";import"./CompositeRoot-DS4s0XjV.js";import"./CompositeItem-X2tnD8zQ.js";import"./ToolbarRootContext-DXrMWEKA.js";import"./composite-BpFW5Zxj.js";import"./svgIconContainer-DT9zh-Vk.js";import"./PdfViewerSearchBar-ZgRWwl-M.js";import"./chevron-up-CUN-oB2X.js";import"./chevron-down-B1zAncDT.js";import"./cross-DOjQafmq.js";import"./PdfViewerSidebar-CCyPCbw0.js";import"./index-Ck62PufT.js";import"./index-CsFAVmPm.js";import"./index-BoUQWx-c.js";import"./PdfViewerToolbar-DMyQrP5c.js";import"./Button-DwrepdjR.js";import"./chevron-right-C1QeIVyP.js";import"./Input-CO62StGf.js";import"./search-BJsFf8Sf.js";import"./spin-hZVcd5W_.js";import"./error-C_AVzlpM.js";import"./withOsdkMetrics-CiiIaaP6.js";import"./makeExternalStore-CSTPATui.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
