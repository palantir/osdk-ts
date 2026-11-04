import{j as r,M as s}from"./iframe-B8HV8iQM.js";import{P as p}from"./pdf-viewer-BepIASEl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BUJ-fNBh.js";import"./preload-helper-BJL_29SE.js";import"./PdfViewer-BZZ0c-HM.js";import"./index-DfArBtGw.js";import"./BasePdfViewer-F7zkEI-9.js";import"./BasePdfViewer.module.css-KcEXCCZ1.js";import"./PdfViewerAnnotationLayer-J1diVnC2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtadMKpr.js";import"./PdfViewerOutlineSidebar-DJPQQ6N5.js";import"./PdfViewerSidebarHeader-ClQzmkA3.js";import"./useBaseUiId-DIsSmRfw.js";import"./useControlled-Bmw28nji.js";import"./CompositeRoot-wu9Ucg76.js";import"./CompositeItem-B4-eeroY.js";import"./ToolbarRootContext-CMP0qHsY.js";import"./composite-Csop57qo.js";import"./svgIconContainer-CSeiJgb1.js";import"./PdfViewerSearchBar-CwW5U7Oj.js";import"./chevron-up-BMFgUssv.js";import"./chevron-down-InHxZIxd.js";import"./cross-BUomV37k.js";import"./PdfViewerSidebar-CmYiDumI.js";import"./index-BtUOZ1zx.js";import"./index-6KHmLmfs.js";import"./index-UkSWMlbC.js";import"./PdfViewerToolbar-B9AYWwoD.js";import"./Button-C9_cOvqp.js";import"./chevron-right-DEHrbzD9.js";import"./Input-BDX0t5YK.js";import"./search-NJ19wZoC.js";import"./spin-CswJXPc0.js";import"./error-B8hDXUgK.js";import"./withOsdkMetrics-Qp2i-feo.js";import"./makeExternalStore-D-MiCBSb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
