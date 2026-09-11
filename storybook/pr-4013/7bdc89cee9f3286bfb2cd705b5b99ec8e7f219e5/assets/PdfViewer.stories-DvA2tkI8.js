import{j as r,M as s}from"./iframe-B8NhUX_0.js";import{P as p}from"./pdf-viewer-C_UpbCVE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CEwbYQmx.js";import"./preload-helper-DjGFPnLe.js";import"./PdfViewer-ChJdS8b7.js";import"./index-qsMi88gm.js";import"./BasePdfViewer-BgmzxomI.js";import"./BasePdfViewer.module.css-BHCRcCqL.js";import"./PdfViewerAnnotationLayer-DUnRFFxV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcgPgwJ_.js";import"./PdfViewerOutlineSidebar-By3fHeGi.js";import"./PdfViewerSidebarHeader-Cqa7o8fb.js";import"./useBaseUiId-Cn8iX50p.js";import"./useControlled-Bf5eet3i.js";import"./CompositeRoot-DWiKmzI3.js";import"./CompositeItem-C5ZLF5hx.js";import"./ToolbarRootContext-bf_wSBCX.js";import"./composite-BwIOwpx5.js";import"./svgIconContainer-Bf9SOHJ7.js";import"./PdfViewerSearchBar-CS9QwfhE.js";import"./chevron-up-UPXgI0xV.js";import"./chevron-down-DxRnKcur.js";import"./cross-D9Q-WwoP.js";import"./PdfViewerSidebar-BIavrPGF.js";import"./index-CtzR-IoK.js";import"./index-CQvGYdFy.js";import"./index-DWq__3H-.js";import"./PdfViewerToolbar-Uz7nywgp.js";import"./Button-DNRq2HIP.js";import"./chevron-right-DgVgZa50.js";import"./Input-SBCQtK3z.js";import"./search-BmvHXAW1.js";import"./spin-C69hjpv9.js";import"./error-CPePVciD.js";import"./withOsdkMetrics-BzqeXglY.js";import"./makeExternalStore-BpOl3JpH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
