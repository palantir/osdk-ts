import{j as r,M as s}from"./iframe-ByGxztuR.js";import{P as p}from"./pdf-viewer-CjJHpVfC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C87BhiXR.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-6tcfhezQ.js";import"./index-C_NmzukE.js";import"./BasePdfViewer-Cnes4_9R.js";import"./BasePdfViewer.module.css-DxECnwki.js";import"./PdfViewerAnnotationLayer-B6RjZuyi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5KlNDq9d.js";import"./PdfViewerOutlineSidebar-BRSvn_q-.js";import"./PdfViewerSidebarHeader-CjbHCC5s.js";import"./useBaseUiId-CwX2o4Wt.js";import"./useControlled-BeV8RDqE.js";import"./CompositeRoot-B-xRTWa6.js";import"./CompositeItem-CzWKxF8z.js";import"./ToolbarRootContext-CvTQ741x.js";import"./composite-DJoo4D6V.js";import"./svgIconContainer-GMqm2qsj.js";import"./PdfViewerSearchBar-EFtUbn6g.js";import"./chevron-up-BMyGvsIb.js";import"./chevron-down-Bod3Eu0k.js";import"./cross-EOhwFFJB.js";import"./PdfViewerSidebar-dmUoMVhV.js";import"./index-Bv7C6Zcf.js";import"./index-YFgfuOe9.js";import"./index-Das4h1Wa.js";import"./PdfViewerToolbar-Bgbx_U5H.js";import"./Button-BOr-KM70.js";import"./chevron-right-DLC2x0Bh.js";import"./Input-CuOC6fkL.js";import"./search-CzmiRz1J.js";import"./spin-DjSY5AmQ.js";import"./error-DHSjI_y4.js";import"./withOsdkMetrics-CzSXt9I1.js";import"./makeExternalStore-BO8GdXCg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
