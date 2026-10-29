import{j as r,M as s}from"./iframe-CDOSHHrT.js";import{P as p}from"./pdf-viewer-BzYc78ea.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClIHiZuw.js";import"./preload-helper-C7s0GH2x.js";import"./PdfViewer-D3oeKigB.js";import"./index-B49rYjrW.js";import"./BasePdfViewer-CnJpZXti.js";import"./BasePdfViewer.module.css-CK7SCanb.js";import"./PdfViewerAnnotationLayer-BcuMixf5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEYr19Ct.js";import"./PdfViewerOutlineSidebar-BNLAydwW.js";import"./PdfViewerSidebarHeader-D6UQhnHN.js";import"./useBaseUiId-DTVz5o-p.js";import"./useControlled-C7Ep-7i8.js";import"./CompositeRoot-Cr8XxINj.js";import"./CompositeItem-CaCo0rwH.js";import"./ToolbarRootContext-B8w6xXAv.js";import"./composite-ClRcggKL.js";import"./svgIconContainer-De09oUFB.js";import"./PdfViewerSearchBar-66jS2uQl.js";import"./chevron-up-lppoM-0Z.js";import"./chevron-down-BmuDMVTK.js";import"./cross-BFylRGnd.js";import"./PdfViewerSidebar-mJvADfrW.js";import"./index-CpJ8i9_a.js";import"./index-CMiNXGca.js";import"./index-DGmOJSLl.js";import"./PdfViewerToolbar-BbRXwJky.js";import"./Button-BvdBUf3P.js";import"./chevron-right-BDaclFj_.js";import"./Input-BurDSqz5.js";import"./search-CEcnnij_.js";import"./spin-vlEfORgr.js";import"./error-C4hjwR0B.js";import"./withOsdkMetrics-RGxpItz-.js";import"./makeExternalStore-D4uD5G65.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
