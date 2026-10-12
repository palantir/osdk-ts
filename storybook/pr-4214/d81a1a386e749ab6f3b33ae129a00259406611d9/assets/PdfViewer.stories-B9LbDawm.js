import{j as r,M as s}from"./iframe-Dm4_VxTL.js";import{P as p}from"./pdf-viewer-DEG9Sa1B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DuXe_nDz.js";import"./preload-helper-CLzuKVE9.js";import"./PdfViewer-CGdNckiL.js";import"./index-DPnE6q58.js";import"./BasePdfViewer-DizMgBcK.js";import"./BasePdfViewer.module.css-D3f1FAuq.js";import"./PdfViewerAnnotationLayer-CVLHew5H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPBedREc.js";import"./PdfViewerOutlineSidebar-D-DszLap.js";import"./PdfViewerSidebarHeader-BF1siIGZ.js";import"./useBaseUiId-D93ZS7uD.js";import"./useControlled-B_aXLH8g.js";import"./CompositeRoot-BgEYe06a.js";import"./CompositeItem-CY6sGbtS.js";import"./ToolbarRootContext-BL7rYCZY.js";import"./composite-BJxyUUdi.js";import"./svgIconContainer-CxeeKywm.js";import"./PdfViewerSearchBar-Bep1r4vY.js";import"./chevron-up-DPTvidoe.js";import"./chevron-down-CO8_Do7Y.js";import"./cross-DHCOcICo.js";import"./PdfViewerSidebar-B13Kx1VC.js";import"./index-c6XPu-54.js";import"./index-BP8U4N-x.js";import"./index-T3ZNqMdJ.js";import"./PdfViewerToolbar-d3if_aIQ.js";import"./Button-Bzv6XgGX.js";import"./chevron-right-DY9vu_MU.js";import"./Input-i9kUqoLh.js";import"./search-D_26udtD.js";import"./spin-BRPJQMuT.js";import"./error-D_jQgHrY.js";import"./withOsdkMetrics-DBhVFgeV.js";import"./makeExternalStore-C9EcSKlD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
