import{j as r,M as s}from"./iframe-BPsV-cND.js";import{P as p}from"./pdf-viewer-8dx76JBx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CIrdH2aS.js";import"./preload-helper-B1nX7WCL.js";import"./PdfViewer-CHD62Ffn.js";import"./index-npdz9ccL.js";import"./BasePdfViewer-D_5IyGkn.js";import"./BasePdfViewer.module.css-C52ffXZK.js";import"./PdfViewerAnnotationLayer-Bmnwg3Ld.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRJwJcPI.js";import"./PdfViewerOutlineSidebar-CWUZ2TSg.js";import"./PdfViewerSidebarHeader-DW06ndzP.js";import"./useBaseUiId-CFNxIaBI.js";import"./useControlled-DoUE8kJv.js";import"./CompositeRoot-DJK5ItIQ.js";import"./CompositeItem-HwzticEg.js";import"./ToolbarRootContext-B-c1meOe.js";import"./composite-Cd7xAWbk.js";import"./svgIconContainer-CZZJ1Sam.js";import"./PdfViewerSearchBar-C8Vbmfq3.js";import"./chevron-up-CZhrZea4.js";import"./chevron-down-C-mS6li4.js";import"./cross-e0Z9OM7S.js";import"./PdfViewerSidebar-BqAJxGeh.js";import"./index-arYZ6QX0.js";import"./index-g7oHnE4A.js";import"./index-DLTSwoUf.js";import"./PdfViewerToolbar-a24Xs5M8.js";import"./Button-DLrft56q.js";import"./chevron-right-BhS6BaSh.js";import"./Input-BkWiOI8x.js";import"./search-hkaYb7x5.js";import"./spin-OzBfjH6j.js";import"./error-Cql48BE9.js";import"./withOsdkMetrics-DzJKMlE9.js";import"./makeExternalStore-CCTjlDRd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
