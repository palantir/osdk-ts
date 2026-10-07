import{j as r,M as s}from"./iframe-BdOqqohK.js";import{P as p}from"./pdf-viewer-Dqu37dCB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B05UtGEM.js";import"./preload-helper-BM9HCPK9.js";import"./PdfViewer-B5WaJdWP.js";import"./index-CMkPjfDh.js";import"./BasePdfViewer-O5dMrF53.js";import"./BasePdfViewer.module.css-XamitKhc.js";import"./PdfViewerAnnotationLayer-D7iqYzRw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDPUF8kn.js";import"./PdfViewerOutlineSidebar-BUXw9eFg.js";import"./PdfViewerSidebarHeader-Cq6rVqtW.js";import"./useBaseUiId-D2aQCoEc.js";import"./useControlled-BYgnBDE7.js";import"./CompositeRoot-BvsoWMNP.js";import"./CompositeItem-FJMzn3o4.js";import"./ToolbarRootContext-CpSt7yAh.js";import"./composite-DBxA_VE8.js";import"./svgIconContainer-CxQ350M_.js";import"./PdfViewerSearchBar-C6MKAb-n.js";import"./chevron-up-PHK3sVe4.js";import"./chevron-down-DcdLMAVH.js";import"./cross-CBN09daJ.js";import"./PdfViewerSidebar-sPAJrn8K.js";import"./index-CZ8krK_n.js";import"./index-CVW6l3Ye.js";import"./index-DYHqv8nl.js";import"./PdfViewerToolbar-DD-29xIF.js";import"./Button-KdAdTzHS.js";import"./chevron-right-B4Mj3Txk.js";import"./Input-BunEo4l4.js";import"./search-et-5mZuo.js";import"./spin-R1G0hp9T.js";import"./error-BfW0iVfX.js";import"./withOsdkMetrics-ADnSdXzg.js";import"./makeExternalStore-Cfk45-cb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
