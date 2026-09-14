import{j as r,M as s}from"./iframe-B5oWllHx.js";import{P as p}from"./pdf-viewer-8bMgPOZ3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-J905_r.js";import"./preload-helper-AL0pxeKM.js";import"./PdfViewer-Dvs_Kh6n.js";import"./index-E8TGJhq9.js";import"./BasePdfViewer-B_oFhqTK.js";import"./BasePdfViewer.module.css-DjhdmK4V.js";import"./PdfViewerAnnotationLayer-AWtt2E7W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyUTLQRR.js";import"./PdfViewerOutlineSidebar-CxfovRhd.js";import"./PdfViewerSidebarHeader-BvgngQ-F.js";import"./useBaseUiId-B80HrYnI.js";import"./useControlled-C1shr7sK.js";import"./CompositeRoot-DI1BocWH.js";import"./CompositeItem-CBT7H_tD.js";import"./ToolbarRootContext-CY1iwJN5.js";import"./composite-CxNKGIFj.js";import"./svgIconContainer-DmiPRoPR.js";import"./PdfViewerSearchBar-BEeZCf7c.js";import"./chevron-up-COUYdAn5.js";import"./chevron-down-843gHNxT.js";import"./cross-D0UFXm2L.js";import"./PdfViewerSidebar-CukJH9O7.js";import"./index-DKR3YkoY.js";import"./index-DpBh8txy.js";import"./index-1oTvxXM7.js";import"./PdfViewerToolbar-Do0uVX5p.js";import"./Button-DESnIp7_.js";import"./chevron-right-CTfLwsH4.js";import"./Input-CHGFhXTJ.js";import"./search-CweXIS3_.js";import"./spin-DUtr2dDA.js";import"./error-FAfGOJk1.js";import"./withOsdkMetrics-Ct5oqpuP.js";import"./makeExternalStore-4UJfUQkh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
