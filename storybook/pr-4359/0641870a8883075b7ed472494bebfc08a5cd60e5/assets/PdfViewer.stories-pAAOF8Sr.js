import{j as r,M as s}from"./iframe-BZzSz7BH.js";import{P as p}from"./pdf-viewer-YFWMq4Jn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHRxH5DS.js";import"./preload-helper-CNCm3N6L.js";import"./PdfViewer-xYAygNKg.js";import"./index-B0_2NaMN.js";import"./BasePdfViewer-Bas0EbJT.js";import"./BasePdfViewer.module.css-2hZHI_wu.js";import"./PdfViewerAnnotationLayer-BywAbGjm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Clv_60Y8.js";import"./PdfViewerOutlineSidebar-CR7bWkpO.js";import"./PdfViewerSidebarHeader-DPhDZZLE.js";import"./useBaseUiId-DkyKYNDq.js";import"./useControlled-DTdqQX0O.js";import"./CompositeRoot-96hpSuFG.js";import"./CompositeItem-B-WQrem9.js";import"./ToolbarRootContext-BbBpvcok.js";import"./composite-BTQMDNX2.js";import"./svgIconContainer-Dhl9__RH.js";import"./PdfViewerSearchBar-BIclPpET.js";import"./chevron-up-Bjrspjdo.js";import"./chevron-down-BtcR6Z3d.js";import"./cross-DZZxBCNz.js";import"./PdfViewerSidebar-DzIcbUWN.js";import"./index-CKPZYnP1.js";import"./index-BRGRaTrf.js";import"./index-CuHAqEhQ.js";import"./PdfViewerToolbar-CGyDFNj1.js";import"./Button-DjbJHqTl.js";import"./chevron-right-l1XoDR9M.js";import"./Input-D_wnf1zt.js";import"./search-Bp2lXg3F.js";import"./spin-C9zRgI05.js";import"./error-CUMr5i6e.js";import"./withOsdkMetrics-EMHKCnPx.js";import"./makeExternalStore-8dQqHLia.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
