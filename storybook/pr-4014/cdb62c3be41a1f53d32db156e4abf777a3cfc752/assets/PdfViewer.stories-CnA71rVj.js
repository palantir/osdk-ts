import{j as r,M as s}from"./iframe-BYyS3cG-.js";import{P as p}from"./pdf-viewer-CW-Ym0E8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DoX-nvsV.js";import"./preload-helper-BXbEnpda.js";import"./PdfViewer-CvMW7Lx-.js";import"./index-BXxvc4Z_.js";import"./BasePdfViewer-BUb6qwHb.js";import"./BasePdfViewer.module.css-DcgtTJDp.js";import"./PdfViewerAnnotationLayer-DgT1xAJZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9V-s3M-.js";import"./PdfViewerOutlineSidebar-DAKi1h0n.js";import"./PdfViewerSidebarHeader-B9KEq4mM.js";import"./useBaseUiId-CGKSvxjI.js";import"./useControlled-Br7xWf3M.js";import"./CompositeRoot-DaXVn6BX.js";import"./CompositeItem-GKFr0mZp.js";import"./ToolbarRootContext-dI5H3gst.js";import"./composite-ZjlJlMFO.js";import"./svgIconContainer-Dk59z4vq.js";import"./PdfViewerSearchBar-DHzq5G3d.js";import"./chevron-up-C5RiP6tL.js";import"./chevron-down-QowdN_dJ.js";import"./cross-K2cagqs8.js";import"./PdfViewerSidebar-DDK-lhs4.js";import"./index-Bi1g2iim.js";import"./index-D2gKK-6z.js";import"./index-DvCEvxA7.js";import"./PdfViewerToolbar-BiM-jxsD.js";import"./Button-DO8jDkqh.js";import"./chevron-right-CqdwaAjj.js";import"./Input-C27Z_igv.js";import"./search-Can7HIrw.js";import"./spin-DnlOYQYj.js";import"./error-BijATQGq.js";import"./withOsdkMetrics-DhZ_7yXB.js";import"./makeExternalStore-DxNQWYP7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
