import{j as r,M as s}from"./iframe-BLF6zRqG.js";import{P as p}from"./pdf-viewer-DIu0Tj_J.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BO3qbpHh.js";import"./preload-helper-BDaxV4R2.js";import"./PdfViewer-DcKg22aR.js";import"./index-BLFrbzvg.js";import"./BasePdfViewer-H_uVqB2Q.js";import"./BasePdfViewer.module.css-Ba-UIVRk.js";import"./PdfViewerAnnotationLayer-Cd8Nqu-Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BS5EYFZC.js";import"./PdfViewerOutlineSidebar-Dmz4qOR1.js";import"./PdfViewerSidebarHeader-DpD3vT1u.js";import"./useBaseUiId-Zjs0lNV0.js";import"./useControlled-CoQlBX4R.js";import"./CompositeRoot-ChKLWTSW.js";import"./CompositeItem-DtwY3yqS.js";import"./ToolbarRootContext-2-p_DBQP.js";import"./composite-CcKV35Kr.js";import"./svgIconContainer-B1hh76l8.js";import"./PdfViewerSearchBar-B-tlf3-U.js";import"./chevron-up-63sGUHDL.js";import"./chevron-down-D3B34KT6.js";import"./cross-BA9FjJ9G.js";import"./PdfViewerSidebar-eOy90xAb.js";import"./index-ccXt1NIS.js";import"./index-CLYhFphF.js";import"./index-ByFfno_8.js";import"./PdfViewerToolbar-qC4SXFDx.js";import"./Button-9qWiKKY-.js";import"./chevron-right-DIZObQsx.js";import"./Input-CCDmeNBI.js";import"./search-9jU6Q1us.js";import"./spin-tlW4bJtZ.js";import"./error-CBG8l0PN.js";import"./withOsdkMetrics-CRvkKsTN.js";import"./makeExternalStore-GX9DdVy4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
