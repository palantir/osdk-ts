import{j as r,M as s}from"./iframe-gdP396qb.js";import{P as p}from"./pdf-viewer-S5Lk4LH4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5c2SlZv.js";import"./preload-helper-C9uq-iVz.js";import"./PdfViewer-BGLF1e9E.js";import"./index-ClCZ0Ati.js";import"./BasePdfViewer-4cTHRDma.js";import"./BasePdfViewer.module.css-DZ5t_WlT.js";import"./PdfViewerAnnotationLayer-DNhP8K9t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CH88WlEU.js";import"./PdfViewerOutlineSidebar-CHXN1PRb.js";import"./PdfViewerSidebarHeader-BqDXgGT_.js";import"./useBaseUiId-C_ToupKC.js";import"./useControlled-D2ey04Mp.js";import"./CompositeRoot-Iw6eGwg_.js";import"./CompositeItem-CmcqEdwc.js";import"./ToolbarRootContext-txczp7dw.js";import"./composite-BvrmChzz.js";import"./svgIconContainer-afKcLYb0.js";import"./PdfViewerSearchBar-4GpSV7qZ.js";import"./chevron-up-B9Qz01f6.js";import"./chevron-down-D4IdPQsy.js";import"./cross-DtCUEBMv.js";import"./PdfViewerSidebar-D2HjcHM9.js";import"./index-DchLPEO5.js";import"./index-BNFLba0z.js";import"./index-mgQPQKNR.js";import"./PdfViewerToolbar-CMb6xxzj.js";import"./Button-CTlmrId0.js";import"./chevron-right-SdtuMxh6.js";import"./Input-DWlBDhXd.js";import"./search-CRn0JbZd.js";import"./spin-Cwgu3siw.js";import"./error-CUjlToFo.js";import"./withOsdkMetrics-CDl4GesU.js";import"./makeExternalStore-Cq8wmohV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
