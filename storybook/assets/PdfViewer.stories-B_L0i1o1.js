import{j as r,M as s}from"./iframe-C9Yk6gDU.js";import{P as p}from"./pdf-viewer-DFUP9Law.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-Qn7bTV.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BvUXnF8V.js";import"./index-C1LUXaZv.js";import"./BasePdfViewer-9-3vFHKI.js";import"./BasePdfViewer.module.css-Ds8delOD.js";import"./PdfViewerAnnotationLayer-DMHmOOP4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbTohQDR.js";import"./PdfViewerOutlineSidebar-OjezmGgw.js";import"./PdfViewerSidebarHeader-CXHqLUjK.js";import"./useBaseUiId-b5v8aEB7.js";import"./useControlled-DMm9xSYk.js";import"./CompositeRoot-CBufOtjp.js";import"./CompositeItem-BZYu3hRC.js";import"./ToolbarRootContext-mnplRdcK.js";import"./composite-DaJF-Ug9.js";import"./svgIconContainer-Vc9A0mR-.js";import"./PdfViewerSearchBar-C_W1DnYm.js";import"./chevron-up-s6PJ3s7h.js";import"./chevron-down-C4Xw0sT3.js";import"./cross--AbW-HvV.js";import"./PdfViewerSidebar-DnAb-pxh.js";import"./index-iqHzidmh.js";import"./index-BqzRBHu8.js";import"./index-CvC-GtCK.js";import"./PdfViewerToolbar-CEwnXeoC.js";import"./Button-y2WBjgut.js";import"./chevron-right-BBrq7kMr.js";import"./Input-DAXz4YJS.js";import"./search-7dKohem7.js";import"./spin-B6KCqhmx.js";import"./error-c-8HRK8d.js";import"./withOsdkMetrics-OfArat_u.js";import"./makeExternalStore-BIsaNjNd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
