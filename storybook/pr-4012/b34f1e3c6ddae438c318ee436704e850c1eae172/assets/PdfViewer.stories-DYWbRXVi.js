import{j as r,M as s}from"./iframe-BW9rbZjN.js";import{P as p}from"./pdf-viewer-IezIH4af.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQi0gf38.js";import"./preload-helper-_oZNT5AE.js";import"./PdfViewer-d6-lM-nz.js";import"./index-qZzwlkOA.js";import"./BasePdfViewer-DZ_kGaVb.js";import"./BasePdfViewer.module.css-W-r4qvBM.js";import"./PdfViewerAnnotationLayer-CHbxW5Xc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-lU1wi2.js";import"./PdfViewerOutlineSidebar-BdbqgGvX.js";import"./PdfViewerSidebarHeader-D4i20_Ig.js";import"./useBaseUiId-bQLFYp4J.js";import"./useControlled-C9bKjxUP.js";import"./CompositeRoot-D409zc-C.js";import"./CompositeItem-CfT9zTJr.js";import"./ToolbarRootContext-tp4wTZqh.js";import"./composite-DIc49Li7.js";import"./svgIconContainer-c8HYcTYH.js";import"./PdfViewerSearchBar-CYavJNwQ.js";import"./chevron-up-BSlkLdOJ.js";import"./chevron-down-DnA8hxYU.js";import"./cross-BMKp4c2D.js";import"./PdfViewerSidebar-uZ3xTu7I.js";import"./index-DQfloIhJ.js";import"./index-C88Pj_Ew.js";import"./index-CRuyPTCE.js";import"./PdfViewerToolbar-Czww4rNI.js";import"./Button-DXKWCxc8.js";import"./chevron-right-CxvskIAC.js";import"./Input-DapIOR9y.js";import"./search-CKuArl9i.js";import"./spin-DkJl7Eo3.js";import"./error-DKZCTWAx.js";import"./withOsdkMetrics-C9bjwSD5.js";import"./makeExternalStore-RW-A0j4x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
