import{j as r,M as s}from"./iframe-8RY7zcAm.js";import{P as p}from"./pdf-viewer-DBlQs0p7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXacekPi.js";import"./preload-helper-BGkfdM1d.js";import"./PdfViewer-Br5palVE.js";import"./index-F16GWZJ_.js";import"./BasePdfViewer-DBpg7Vn_.js";import"./BasePdfViewer.module.css-COoRl9qp.js";import"./PdfViewerAnnotationLayer-Di5cNn1r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrN4FHGW.js";import"./PdfViewerOutlineSidebar-Dp_lMI8Y.js";import"./PdfViewerSidebarHeader-DfLptrSg.js";import"./useBaseUiId-D3Is5SDV.js";import"./useControlled-knRgQYvS.js";import"./CompositeRoot-BeDj6e0l.js";import"./CompositeItem-CgF-gvX4.js";import"./ToolbarRootContext-xvpkFEWT.js";import"./composite-BDnjYEG7.js";import"./svgIconContainer-Bnw3Cx_6.js";import"./PdfViewerSearchBar-H5lTU4td.js";import"./chevron-up-CfJhacN-.js";import"./chevron-down-h5bw2Tva.js";import"./cross-aMDWg1-0.js";import"./PdfViewerSidebar-Cd32AaM1.js";import"./index-RRcFr7Yl.js";import"./index-DR56g2UK.js";import"./index-CFR66S1o.js";import"./PdfViewerToolbar-BjyNov8c.js";import"./Button-CAL7_9_d.js";import"./chevron-right-BW2-vxp_.js";import"./Input-CMi9rgRv.js";import"./search-C17XLT_W.js";import"./spin-DsVm2p1V.js";import"./error-DN4E4s-5.js";import"./withOsdkMetrics-DZUKZj-t.js";import"./makeExternalStore-C5QucHCB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
