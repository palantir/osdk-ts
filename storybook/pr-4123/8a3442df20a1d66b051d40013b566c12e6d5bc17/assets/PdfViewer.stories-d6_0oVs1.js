import{j as r,M as s}from"./iframe-B4_LdmvC.js";import{P as p}from"./pdf-viewer-DQ0CwVfr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQaIw52L.js";import"./preload-helper-NaiMF-0L.js";import"./PdfViewer-D0-Nsv9O.js";import"./index-DjXxmUSg.js";import"./BasePdfViewer-DUxmae7k.js";import"./BasePdfViewer.module.css-kWcE0zn7.js";import"./PdfViewerAnnotationLayer--6HObKCs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cggsx4lH.js";import"./PdfViewerOutlineSidebar-ZqTcy-13.js";import"./PdfViewerSidebarHeader-CpWUu1Pn.js";import"./useBaseUiId-D49bnhC0.js";import"./useControlled-BCVYzpl3.js";import"./CompositeRoot-Bqepm-wk.js";import"./CompositeItem-Te1LxRX_.js";import"./ToolbarRootContext-IBMmFjEY.js";import"./composite-C8-JBw2s.js";import"./svgIconContainer-CqdyD_06.js";import"./PdfViewerSearchBar-42zEU0wn.js";import"./chevron-up-sZgoCKpY.js";import"./chevron-down-C6pppJ5O.js";import"./cross-ByyhMC0G.js";import"./PdfViewerSidebar-wXIpSdoi.js";import"./index-Dw8kDIA3.js";import"./index-CDFbUPsJ.js";import"./index-DMnPNpwI.js";import"./PdfViewerToolbar-DeRMs_Kk.js";import"./Button-DMJfC-Jo.js";import"./chevron-right-BaAargzN.js";import"./Input-D84OA9Cn.js";import"./search-CuDduKs4.js";import"./spin-BQeYY4GR.js";import"./error-De7UK8KB.js";import"./withOsdkMetrics-gLpSEa_H.js";import"./makeExternalStore-DG8fJp9Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
