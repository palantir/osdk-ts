import{j as r,M as s}from"./iframe-Btqvg51n.js";import{P as p}from"./pdf-viewer-DlTifg68.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D0xZPCX6.js";import"./preload-helper-syhdZDkE.js";import"./PdfViewer-Bgt6BDEm.js";import"./index-BD28I-pc.js";import"./BasePdfViewer-D24Sxv7N.js";import"./BasePdfViewer.module.css-B_-7zOVN.js";import"./PdfViewerAnnotationLayer-BAP2xmkR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDYbHiX9.js";import"./PdfViewerOutlineSidebar-DiHlnM9T.js";import"./PdfViewerSidebarHeader-BPM8HH5c.js";import"./useBaseUiId-BkjQeUzK.js";import"./useControlled-sKyg4XQp.js";import"./CompositeRoot-D6Trz0k9.js";import"./CompositeItem-QpGH5PhM.js";import"./ToolbarRootContext-AyD5CGSz.js";import"./composite-DISAoOje.js";import"./svgIconContainer-DO6E7UDs.js";import"./PdfViewerSearchBar-BskYYvhg.js";import"./chevron-up-DLypuey8.js";import"./chevron-down-HGlEUxE6.js";import"./cross-4sLVfr-a.js";import"./PdfViewerSidebar-Cf7tzGo9.js";import"./index-DFfg-m3O.js";import"./index-C-bm7M0d.js";import"./index-DI6u9RXJ.js";import"./PdfViewerToolbar-WVneBPoy.js";import"./Button-Cjefz3Ec.js";import"./chevron-right-C2cRxbtS.js";import"./Input-DshYp2Vv.js";import"./search-CS3jZQxq.js";import"./spin-CRztlgxc.js";import"./error-BHl0yOWM.js";import"./withOsdkMetrics-D8UgdzXc.js";import"./makeExternalStore-D879CjGU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
