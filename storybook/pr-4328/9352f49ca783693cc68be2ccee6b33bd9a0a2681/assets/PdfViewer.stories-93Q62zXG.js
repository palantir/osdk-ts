import{j as r,M as s}from"./iframe-CzN2QreI.js";import{P as p}from"./pdf-viewer-CBDkW7io.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BsT9PURY.js";import"./preload-helper-BXZu3mB8.js";import"./PdfViewer-O_H3GLUH.js";import"./index-Bj6GQi9V.js";import"./BasePdfViewer-Dxid9-dz.js";import"./BasePdfViewer.module.css-BgDJlyGb.js";import"./PdfViewerAnnotationLayer-Cnschia8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dqo5628h.js";import"./PdfViewerOutlineSidebar-4lJOTSfQ.js";import"./PdfViewerSidebarHeader-BgHybyjI.js";import"./useBaseUiId-XpXvVpGq.js";import"./useControlled-DC4k4z6-.js";import"./CompositeRoot-3N5Pesrn.js";import"./CompositeItem-C2xi6NQ8.js";import"./ToolbarRootContext-CKTJAN59.js";import"./composite-CvZGZMr_.js";import"./svgIconContainer-DJR2Y9nG.js";import"./PdfViewerSearchBar-DnV_kRgW.js";import"./chevron-up-DQgGPusN.js";import"./chevron-down-CQ9C1iv5.js";import"./cross-B7QKnjh-.js";import"./PdfViewerSidebar-Ch9K6TMc.js";import"./index-DT9lB2o2.js";import"./index-CP-vzmXq.js";import"./index-_8V292Ph.js";import"./PdfViewerToolbar-BPhI9KEm.js";import"./Button-CdEdBbWo.js";import"./chevron-right-Dy_ga6Yv.js";import"./Input-CegjBPQP.js";import"./search-CBwzahSV.js";import"./spin-Ban_EYuC.js";import"./error-Ds-mn25o.js";import"./withOsdkMetrics-2pGXUPgq.js";import"./makeExternalStore-zsuQEbmY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
