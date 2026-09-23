import{j as r,M as s}from"./iframe-JE3hAilc.js";import{P as p}from"./pdf-viewer-CqokjVaC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgcFeji2.js";import"./preload-helper-D3m3uLck.js";import"./PdfViewer-BHo7ZluF.js";import"./index-BpOIoYeP.js";import"./BasePdfViewer-Bamm3e0g.js";import"./BasePdfViewer.module.css-BFHHxJ1s.js";import"./PdfViewerAnnotationLayer-1rOgRvT_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DIDBwVS7.js";import"./PdfViewerOutlineSidebar-DrjqWdBK.js";import"./PdfViewerSidebarHeader-VVxhZZHz.js";import"./useBaseUiId-CU6aYJhX.js";import"./useControlled-i7oJhE2J.js";import"./CompositeRoot-l44Dep54.js";import"./CompositeItem-CBdxcvZ2.js";import"./ToolbarRootContext-BAaYeDZ8.js";import"./composite-OBLfyo_g.js";import"./svgIconContainer-DxcHQg7k.js";import"./PdfViewerSearchBar-CICdZLr5.js";import"./chevron-up-09Ec3rPg.js";import"./chevron-down-CzaF57dY.js";import"./cross-B3dok42m.js";import"./PdfViewerSidebar-ColJcpNq.js";import"./index-B4_-u_rP.js";import"./index-NMATibBb.js";import"./index-D1wHMkU8.js";import"./PdfViewerToolbar-39NeFwuw.js";import"./Button-C-mwssM2.js";import"./chevron-right-DX44GKpz.js";import"./Input-BBWCNVeu.js";import"./search-CVE6ZsP3.js";import"./spin-DAohsaQp.js";import"./error-7AaWXBYs.js";import"./withOsdkMetrics-Dv_mGpze.js";import"./makeExternalStore-C3Po_h2x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
