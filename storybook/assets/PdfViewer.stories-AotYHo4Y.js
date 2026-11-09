import{j as r,M as s}from"./iframe-CwHoXHUu.js";import{P as p}from"./pdf-viewer-elWMNJLZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-I4WFkjHo.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-BMNWKNDZ.js";import"./index-CZaeEK6I.js";import"./BasePdfViewer-B9WZ43dz.js";import"./BasePdfViewer.module.css-D2i4wJIC.js";import"./PdfViewerAnnotationLayer-FOO9I4bE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sUbxWFAk.js";import"./PdfViewerOutlineSidebar-BkjJHgZI.js";import"./PdfViewerSidebarHeader-HU9oHYHZ.js";import"./useBaseUiId-BPVfLfjX.js";import"./useControlled-Hry_0x1f.js";import"./CompositeRoot-BGFrm1ka.js";import"./CompositeItem-D5ZABXe5.js";import"./ToolbarRootContext-Dnc8VcDU.js";import"./composite-DnjWTUQ2.js";import"./svgIconContainer-CCqCSEPy.js";import"./PdfViewerSearchBar-BSurzvUQ.js";import"./chevron-up-CbYH3cwH.js";import"./chevron-down-CJ7ExT0D.js";import"./cross-CbSe3IA2.js";import"./PdfViewerSidebar-Bh-URBqx.js";import"./index-CI3G919h.js";import"./index-Cd6vbhvO.js";import"./index-CfA2Hd3H.js";import"./PdfViewerToolbar-BD2-lD40.js";import"./Button-h45Z6oL5.js";import"./chevron-right-gJ5KqunM.js";import"./Input-D4zseZIs.js";import"./search-DFG6yLeC.js";import"./spin-CPKma7if.js";import"./error-fdiT2-40.js";import"./withOsdkMetrics-D3UK9v4M.js";import"./makeExternalStore-BVBAkPec.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
