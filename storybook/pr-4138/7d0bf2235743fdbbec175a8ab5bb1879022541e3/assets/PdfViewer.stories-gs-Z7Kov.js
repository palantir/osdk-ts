import{j as r,M as s}from"./iframe-rp70fwwu.js";import{P as p}from"./pdf-viewer-Bd9zbSA9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--rwPsj1i.js";import"./preload-helper-EME5q9Jz.js";import"./PdfViewer-DeIeswnm.js";import"./index-B4gvWsM6.js";import"./BasePdfViewer-CMGXVJ1Q.js";import"./BasePdfViewer.module.css-B3XhMXD9.js";import"./PdfViewerAnnotationLayer-DdeSKNvg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQHUyzc8.js";import"./PdfViewerOutlineSidebar-BJuTtRKz.js";import"./PdfViewerSidebarHeader-D9vHX-W2.js";import"./useBaseUiId-DldllHCL.js";import"./useControlled-CHM7HnpL.js";import"./CompositeRoot-VrJdpJ3U.js";import"./CompositeItem-Dn7oIdOY.js";import"./ToolbarRootContext-CoUfjY-d.js";import"./composite-CuPJzJjA.js";import"./svgIconContainer-CDe1DB3O.js";import"./PdfViewerSearchBar-CMPQzFk1.js";import"./chevron-up-D1pHSNIt.js";import"./chevron-down-Ba1aP0dz.js";import"./cross-DNFUYcP8.js";import"./PdfViewerSidebar-kuiij1DA.js";import"./index-B9gm3rqX.js";import"./index-ChLpCK4q.js";import"./index-HM1ZzYao.js";import"./PdfViewerToolbar-BCjysokC.js";import"./Button-iCfiBEgd.js";import"./chevron-right-Co2frQps.js";import"./Input-DVBMxCln.js";import"./search-BsQb9YNR.js";import"./spin-DDl1KZqo.js";import"./error-BMFKsVka.js";import"./withOsdkMetrics-Dg07kNzb.js";import"./makeExternalStore-povODIJu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
