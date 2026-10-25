import{j as r,M as s}from"./iframe-C9eTmg5F.js";import{P as p}from"./pdf-viewer-De6et9ud.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-r3Lx0Lk4.js";import"./preload-helper-MBuTZogN.js";import"./PdfViewer-BWjy1I8d.js";import"./index-Cl06-CY3.js";import"./BasePdfViewer-7ak1H5cQ.js";import"./BasePdfViewer.module.css-Dzz8BVcW.js";import"./PdfViewerAnnotationLayer-P6iRON7u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2vVip4b.js";import"./PdfViewerOutlineSidebar-CNLj4PWi.js";import"./PdfViewerSidebarHeader-CgOxuUbn.js";import"./useBaseUiId-CarAhcX4.js";import"./useControlled-D63t172P.js";import"./CompositeRoot-rlPU3saq.js";import"./CompositeItem-QTP5J2AO.js";import"./ToolbarRootContext-MN-0Ldxt.js";import"./composite-BG0FW9Gv.js";import"./svgIconContainer-B8-j9zbf.js";import"./PdfViewerSearchBar-3FQn2raq.js";import"./chevron-up-UDJ4VimO.js";import"./chevron-down-BJBNlRqs.js";import"./cross-BNf72m15.js";import"./PdfViewerSidebar-B4--vGVY.js";import"./index--xwF9EYW.js";import"./index-DawaRm_6.js";import"./index-UInLMRBx.js";import"./PdfViewerToolbar-DON-xjJo.js";import"./Button-CrIJmJlm.js";import"./chevron-right-Dj4cvc_m.js";import"./Input-RYWRwt9M.js";import"./search-BBX0widz.js";import"./spin-B9vUT6j-.js";import"./error-BYbnYzlx.js";import"./withOsdkMetrics-Dy0OWLdL.js";import"./makeExternalStore-CAiiZnZr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
