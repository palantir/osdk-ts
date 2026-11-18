import{j as r,M as s}from"./iframe-A3cFOKcN.js";import{P as p}from"./pdf-viewer-DVguEn1G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-gyCgPRU7.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DtVSB-7F.js";import"./index-BdisvGQs.js";import"./BasePdfViewer-DaF8pg4f.js";import"./BasePdfViewer.module.css-lDfPmNVL.js";import"./PdfViewerAnnotationLayer-DsSQAEbP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C0DChOdt.js";import"./PdfViewerOutlineSidebar-dB6IdjH-.js";import"./PdfViewerSidebarHeader-b03yUXRJ.js";import"./useBaseUiId-f8SNshup.js";import"./useControlled-lPa7KKsj.js";import"./CompositeRoot-Dmcjr0aY.js";import"./CompositeItem-Brp6gpS6.js";import"./ToolbarRootContext-iK84Y3hB.js";import"./composite-CO4egJyo.js";import"./svgIconContainer-Cx_x83Vw.js";import"./PdfViewerSearchBar-C-HGzhoh.js";import"./chevron-up-DTMZmNRU.js";import"./chevron-down-BNVc1UKn.js";import"./cross-BpCzBhcu.js";import"./PdfViewerSidebar-D2Ye7pW_.js";import"./index-C28TVULp.js";import"./index-iwijohJb.js";import"./index-DC_i6GYR.js";import"./PdfViewerToolbar-DInrQKrq.js";import"./Button-BioOQfQu.js";import"./chevron-right-CLNnK6lM.js";import"./Input-D8Sxy-AW.js";import"./search-CjzZlMWT.js";import"./spin-B3j6vtUR.js";import"./error-oGpxxWLn.js";import"./withOsdkMetrics-BHdLGHRT.js";import"./makeExternalStore-1BwNCmLf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
