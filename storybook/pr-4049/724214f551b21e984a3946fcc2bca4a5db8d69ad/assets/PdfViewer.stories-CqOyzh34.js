import{j as r,M as s}from"./iframe-DcYOqu2U.js";import{P as p}from"./pdf-viewer-CxWZ8Xrz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D03LXqi0.js";import"./preload-helper-S82--H9u.js";import"./PdfViewer-C5tuOxdz.js";import"./index-DiVuESi1.js";import"./BasePdfViewer-Tjx_-4wI.js";import"./BasePdfViewer.module.css-CAPDHOxQ.js";import"./PdfViewerAnnotationLayer-B4kF0fdv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFnsWyOG.js";import"./PdfViewerOutlineSidebar-B1S_elu2.js";import"./PdfViewerSidebarHeader-HeYVWSm_.js";import"./useBaseUiId-BCzIH_us.js";import"./useControlled-BUaPb3-r.js";import"./CompositeRoot-fDb1G_2Z.js";import"./CompositeItem-DDIaKXMB.js";import"./ToolbarRootContext-_iXFA-YU.js";import"./composite-z-1xLKDd.js";import"./svgIconContainer-yWnKapjH.js";import"./PdfViewerSearchBar-CMV-P3k3.js";import"./chevron-up-B_Nni4TF.js";import"./chevron-down-CJhuOc7o.js";import"./cross-CDM50iQ0.js";import"./PdfViewerSidebar-C0QcBa_z.js";import"./index-DC8s7Au8.js";import"./index-EYomkAWT.js";import"./index-0CesUQZv.js";import"./PdfViewerToolbar-Dl4hQZcC.js";import"./Button-_cT9fEiv.js";import"./chevron-right-B2ypLuxV.js";import"./Input-BDRGIKaZ.js";import"./search-DkFuHynJ.js";import"./spin-DmzgOlZw.js";import"./error-CugXhAIj.js";import"./withOsdkMetrics-D3ra-NNv.js";import"./makeExternalStore-DkFMYs8N.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
