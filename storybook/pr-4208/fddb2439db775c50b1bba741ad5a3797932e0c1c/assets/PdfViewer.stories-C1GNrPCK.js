import{j as r,M as s}from"./iframe-CDhHfbZk.js";import{P as p}from"./pdf-viewer-BTkdwiDu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhlW0n0o.js";import"./preload-helper-D9m9ft9F.js";import"./PdfViewer-Dr7BZOG6.js";import"./index-vUAebvBG.js";import"./BasePdfViewer-BDg-Ol8N.js";import"./BasePdfViewer.module.css-NCqWbj0t.js";import"./PdfViewerAnnotationLayer-DcYutjrY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXH626Yd.js";import"./PdfViewerOutlineSidebar-C6LrY8_G.js";import"./PdfViewerSidebarHeader-U1K-xfRk.js";import"./useBaseUiId-BNzPhzzT.js";import"./useControlled-C9J3sV3W.js";import"./CompositeRoot-YMnd1XlV.js";import"./CompositeItem-CfrnZWNF.js";import"./ToolbarRootContext-BHNpAEXV.js";import"./composite-zry2u9iy.js";import"./svgIconContainer-DP_9rndU.js";import"./PdfViewerSearchBar-F0tRYkad.js";import"./chevron-up-CEf50eii.js";import"./chevron-down-BrdASUtV.js";import"./cross-CLCYSP7-.js";import"./PdfViewerSidebar-CSIiGaRp.js";import"./index-CaQKQtm_.js";import"./index-IitVmvoQ.js";import"./index-DDa4qDBw.js";import"./PdfViewerToolbar-WibhCxUd.js";import"./Button-Eng2VAlv.js";import"./chevron-right-C_QMMCk_.js";import"./Input-B4zROYTD.js";import"./search-Bcd3upv2.js";import"./spin-Dj7cl7M-.js";import"./error-CgXh1tPF.js";import"./withOsdkMetrics-BPDsAwtw.js";import"./makeExternalStore-BkKmabtu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
