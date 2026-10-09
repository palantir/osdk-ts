import{j as r,M as s}from"./iframe-BpL6s-zg.js";import{P as p}from"./pdf-viewer-DEWCMD-Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D_JYdm3L.js";import"./preload-helper-uTT7htns.js";import"./PdfViewer-Dn6CwcS1.js";import"./index-6LlZ2BiN.js";import"./BasePdfViewer-huzoH9sv.js";import"./BasePdfViewer.module.css-onkH1KZC.js";import"./PdfViewerAnnotationLayer-D_8SReop.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-oY3_fcpE.js";import"./PdfViewerOutlineSidebar-BAz1zoTq.js";import"./PdfViewerSidebarHeader-DYCu3DWZ.js";import"./useBaseUiId-1PhUK91a.js";import"./useControlled-CkduZeJ8.js";import"./CompositeRoot-CAGNNEzQ.js";import"./CompositeItem-Dr9l_3tm.js";import"./ToolbarRootContext-DExmINYo.js";import"./composite-CCy_hQsH.js";import"./svgIconContainer-9i-2F4mS.js";import"./PdfViewerSearchBar-js5_Hv4C.js";import"./chevron-up-CAGqmS9Y.js";import"./chevron-down-CE2IRiE6.js";import"./cross-B7Srqs_a.js";import"./PdfViewerSidebar-D7kZqec2.js";import"./index-DW6U2psz.js";import"./index-BQedclYz.js";import"./index-D0tUKd5l.js";import"./PdfViewerToolbar-MjTEyERj.js";import"./Button-D6y5uRFv.js";import"./chevron-right-BWVPO0NY.js";import"./Input-CLHBBGaB.js";import"./search-RLZBnffN.js";import"./spin-BqQI5Zx_.js";import"./error-DthClOU-.js";import"./withOsdkMetrics-BI3kiEc3.js";import"./makeExternalStore-CYzPQh_a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
