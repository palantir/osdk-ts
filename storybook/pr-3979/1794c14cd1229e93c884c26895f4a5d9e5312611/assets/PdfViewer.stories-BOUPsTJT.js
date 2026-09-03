import{j as r,M as s}from"./iframe-g6xxvyIV.js";import{P as p}from"./pdf-viewer-B5GLzn9x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CwcZnMGD.js";import"./preload-helper-VtRw9ZxB.js";import"./PdfViewer-KjXlUnyy.js";import"./index-CswLMQ0k.js";import"./BasePdfViewer-BvNAZfya.js";import"./BasePdfViewer.module.css-BQ2q3JVA.js";import"./PdfViewerAnnotationLayer-D_hssroh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BhQMnXFW.js";import"./PdfViewerOutlineSidebar-DH47Te9O.js";import"./PdfViewerSidebarHeader-Ds-dP4st.js";import"./useBaseUiId-DXMdH-da.js";import"./useControlled-DBzkXlO9.js";import"./CompositeRoot-Bv12sE0u.js";import"./CompositeItem-D8bzrW1A.js";import"./ToolbarRootContext-CnYeU0vp.js";import"./composite-CidrPxyb.js";import"./svgIconContainer-TEGni_EK.js";import"./PdfViewerSearchBar-DsVHgoVR.js";import"./chevron-up-BEGzBVMx.js";import"./chevron-down-CkRfYs8Z.js";import"./cross-ClaRDnYq.js";import"./PdfViewerSidebar-CetCjM9Y.js";import"./index-DuMOiw4h.js";import"./index-B1T8sIVD.js";import"./index-Df1hA2tb.js";import"./PdfViewerToolbar-BOk6Yfi3.js";import"./Button-BX2PLV5j.js";import"./chevron-right-DehdbGdZ.js";import"./Input-DvVClOUT.js";import"./search-CoUKVa3J.js";import"./spin-_u1eDREe.js";import"./error-BGoiu4dF.js";import"./withOsdkMetrics-CfHIwfTt.js";import"./makeExternalStore-BrS-ebeG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
