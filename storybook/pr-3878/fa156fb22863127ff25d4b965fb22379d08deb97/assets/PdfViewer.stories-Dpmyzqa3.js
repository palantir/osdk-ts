import{j as r,M as s}from"./iframe-5UDGUP80.js";import{P as p}from"./pdf-viewer-BkbdGkAd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCUHXmPx.js";import"./preload-helper-C4oCDBip.js";import"./PdfViewer-DH57Rlq3.js";import"./index-Bugktx71.js";import"./BasePdfViewer-Dld4UQ6l.js";import"./BasePdfViewer.module.css-Dlf5vpbE.js";import"./PdfViewerAnnotationLayer-JmjE0aO0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-eM2PfeaK.js";import"./PdfViewerOutlineSidebar-jzMu4_d6.js";import"./PdfViewerSidebarHeader-CvrRwvZ3.js";import"./useBaseUiId-BJavFBRa.js";import"./useControlled--GaTcUFv.js";import"./CompositeRoot-D8RYvCE3.js";import"./CompositeItem-CF8sbYQc.js";import"./ToolbarRootContext-D-36hmPD.js";import"./composite-BocxrVtD.js";import"./svgIconContainer-BQ_U4GID.js";import"./PdfViewerSearchBar-C9RD9E-n.js";import"./chevron-up-CF15OzA0.js";import"./chevron-down-D3oAKYgi.js";import"./cross-CxetxkJH.js";import"./PdfViewerSidebar-Cyz4WWTT.js";import"./index-Dok_ldqO.js";import"./index-B43ppQJK.js";import"./index-CFmBTWdv.js";import"./PdfViewerToolbar-D5ocXOzV.js";import"./Button-_SyP2AI3.js";import"./chevron-right-jprzU2SK.js";import"./Input-Dk-R4cjA.js";import"./search-DXPDoI0I.js";import"./spin-cd-RfB7R.js";import"./error-BTC-cXwr.js";import"./withOsdkMetrics-iD8vruam.js";import"./makeExternalStore-DwYufUqB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
