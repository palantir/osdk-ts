import{j as r,M as s}from"./iframe-CBNJ8HWE.js";import{P as p}from"./pdf-viewer-BtzikAAY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B474GMzC.js";import"./preload-helper-D-aeZqn2.js";import"./PdfViewer-Yq_IWdLU.js";import"./index-Dae7Nrzr.js";import"./BasePdfViewer-DdZuu7bK.js";import"./BasePdfViewer.module.css-BhyWesxG.js";import"./PdfViewerAnnotationLayer-Dvj4YLx_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_sqgnGfQ.js";import"./PdfViewerOutlineSidebar-DDYyMiZe.js";import"./PdfViewerSidebarHeader-CEEQyxj4.js";import"./useBaseUiId-OM3pRXHK.js";import"./useControlled-BpsS1h83.js";import"./CompositeRoot-D1r1QqxZ.js";import"./CompositeItem-CFJInvfd.js";import"./ToolbarRootContext-DGgj03xf.js";import"./composite-DVVFhOLL.js";import"./svgIconContainer-Cmsji56X.js";import"./PdfViewerSearchBar-6PhpXWXT.js";import"./chevron-up-D3ci6q-C.js";import"./chevron-down-Df7Rgxm0.js";import"./cross-IIpRFnCv.js";import"./PdfViewerSidebar-1dMWl_SX.js";import"./index-Dre4GzRs.js";import"./index-BDSNEOy8.js";import"./index-BbBV-ipX.js";import"./PdfViewerToolbar-BYKERye3.js";import"./Button-nKcb30G0.js";import"./chevron-right-DfVK0bp5.js";import"./Input-j-S77mRt.js";import"./search-ctIWqbIr.js";import"./spin-NyNKPqOk.js";import"./error-CtfkQOQ0.js";import"./withOsdkMetrics-CqZNs336.js";import"./makeExternalStore-BJGSOQw4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
