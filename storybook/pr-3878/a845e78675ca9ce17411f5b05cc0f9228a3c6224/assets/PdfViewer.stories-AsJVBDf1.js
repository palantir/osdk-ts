import{j as r,M as s}from"./iframe-nlmHRzbs.js";import{P as p}from"./pdf-viewer-Rk-Vr0TU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ctYZw-kn.js";import"./preload-helper-Bb4XP1JR.js";import"./PdfViewer-DywrpU8E.js";import"./index-BgU0BklA.js";import"./BasePdfViewer-DsBWbRSF.js";import"./BasePdfViewer.module.css-DMCfhlY5.js";import"./PdfViewerAnnotationLayer-9MdOyOZp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D7dLXXOf.js";import"./PdfViewerOutlineSidebar-COqmc3NI.js";import"./PdfViewerSidebarHeader-B5C_FrQB.js";import"./useBaseUiId-BvXBgh7R.js";import"./useControlled-CL-2sXEB.js";import"./CompositeRoot-D1o41xJY.js";import"./CompositeItem-DKy9HSNC.js";import"./ToolbarRootContext-C84AlWji.js";import"./composite-9JvUOFhV.js";import"./svgIconContainer-DS8QHuIj.js";import"./PdfViewerSearchBar-BhHhFo40.js";import"./chevron-up-CaxJAPWI.js";import"./chevron-down-DrD3cVw1.js";import"./cross-BQ8TIcPZ.js";import"./PdfViewerSidebar-okxC1aGi.js";import"./index-B9KsoBHZ.js";import"./index-BBKiIpPq.js";import"./index-DrPWGN5f.js";import"./PdfViewerToolbar-CEW2Pprf.js";import"./Button-u5u7l_L-.js";import"./chevron-right-CyA-G3ju.js";import"./Input-C_WMBA0h.js";import"./search-KdHomzFH.js";import"./spin-D7Wos1Dk.js";import"./error-D0sD9myM.js";import"./withOsdkMetrics-CYPNcnBx.js";import"./makeExternalStore-CDFtpytl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
