import{j as r,M as s}from"./iframe-B2PftgNv.js";import{P as p}from"./pdf-viewer-BvkXu0ev.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ce7CLVd9.js";import"./preload-helper-CEJ8wrbo.js";import"./PdfViewer-BWW2-Ufk.js";import"./index-DLh6R3k3.js";import"./BasePdfViewer-DMs_JoRx.js";import"./BasePdfViewer.module.css-B5y4RdNx.js";import"./PdfViewerAnnotationLayer-DaVuDpYR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DY1Nvn2b.js";import"./PdfViewerOutlineSidebar-CUQ6CPCy.js";import"./PdfViewerSidebarHeader-CBEYOePn.js";import"./useBaseUiId-Z6N9hVn8.js";import"./useControlled-CrpHgYxN.js";import"./CompositeRoot-CaO9yV7P.js";import"./CompositeItem-DXQI1LIg.js";import"./ToolbarRootContext-DSVVLYlD.js";import"./composite-ClzGHvMl.js";import"./svgIconContainer-BpxY4u4w.js";import"./PdfViewerSearchBar-DlyQyTuS.js";import"./chevron-up-Cgye0_GJ.js";import"./chevron-down-CZZTKstq.js";import"./cross-DUUoKIdp.js";import"./PdfViewerSidebar-DFv8Lo2H.js";import"./index-D12Somt8.js";import"./index-CKDtR0br.js";import"./index-D5vOugya.js";import"./PdfViewerToolbar-BSqNojOP.js";import"./Button-B8NZKNU8.js";import"./chevron-right-Df6yZH0h.js";import"./Input-BtteuOYK.js";import"./search-By7WOD0U.js";import"./spin-CYAOrZnA.js";import"./error-DLN9t7ZG.js";import"./withOsdkMetrics-CoGkur03.js";import"./makeExternalStore-XDjeZ5H6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
