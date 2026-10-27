import{j as r,M as s}from"./iframe-COVETwhx.js";import{P as p}from"./pdf-viewer-CszDL1aW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B2KUC979.js";import"./preload-helper-B-xfSmD6.js";import"./PdfViewer-DgPuGBjG.js";import"./index-bOxlMW9W.js";import"./BasePdfViewer-BST2obIz.js";import"./BasePdfViewer.module.css-BXDj77-n.js";import"./PdfViewerAnnotationLayer-9Fuus5Yv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRKXLIbg.js";import"./PdfViewerOutlineSidebar-B-UlM2Jl.js";import"./PdfViewerSidebarHeader-CFMjP6Ns.js";import"./useBaseUiId-2z9ajXTy.js";import"./useControlled-eVeEVm0U.js";import"./CompositeRoot-Ch55eIai.js";import"./CompositeItem-Dg_iEtAz.js";import"./ToolbarRootContext-ra_8dAxJ.js";import"./composite-kZubSwMs.js";import"./svgIconContainer-gsbuNadi.js";import"./PdfViewerSearchBar-s0fK0noG.js";import"./chevron-up-BQFuekNF.js";import"./chevron-down-Kndiv9KN.js";import"./cross-CCyLZ_a3.js";import"./PdfViewerSidebar-CQv_4d6e.js";import"./index-Qpmu02z_.js";import"./index-SM4cV6TD.js";import"./index-BadFZGVY.js";import"./PdfViewerToolbar-B_UTU5eR.js";import"./Button-D7hgHtqc.js";import"./chevron-right-CgUgu2hs.js";import"./Input-DDxMXv2L.js";import"./search-2wDgAEqi.js";import"./spin-DVljfccV.js";import"./error-Dso-ncgj.js";import"./withOsdkMetrics-DVwyRo2Q.js";import"./makeExternalStore-BjWwL6YG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
