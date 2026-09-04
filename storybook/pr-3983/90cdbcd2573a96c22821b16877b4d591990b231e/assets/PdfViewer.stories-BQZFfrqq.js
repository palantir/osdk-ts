import{j as r,M as s}from"./iframe-CJ4psHOg.js";import{P as p}from"./pdf-viewer-4__PDR95.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DdD8uhvP.js";import"./preload-helper-CnvWLU9s.js";import"./PdfViewer-BZwMXUe8.js";import"./index-C3yQNnbT.js";import"./BasePdfViewer-BGbo2LaG.js";import"./BasePdfViewer.module.css-Ch62XxGD.js";import"./PdfViewerAnnotationLayer-hDElcK0N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqNcAZvi.js";import"./PdfViewerOutlineSidebar-DzDMClvZ.js";import"./PdfViewerSidebarHeader-D3L2zhZJ.js";import"./useBaseUiId-DyrOymcM.js";import"./useControlled-FXpF1HMA.js";import"./CompositeRoot-BOsY6xRO.js";import"./CompositeItem-CwkxMYBx.js";import"./ToolbarRootContext-C-4jRAr6.js";import"./composite-BxTUVSqW.js";import"./svgIconContainer-BaNWfr18.js";import"./PdfViewerSearchBar-DQ2BjcJy.js";import"./chevron-up-v8dgVcmY.js";import"./chevron-down-BegRN8q-.js";import"./cross-Bare-byH.js";import"./PdfViewerSidebar-BYY7qgL2.js";import"./index-d1HP_js7.js";import"./index-B0t-MH7Z.js";import"./index-Cld24Chi.js";import"./PdfViewerToolbar-D1RCdAUb.js";import"./Button-23ABSMgl.js";import"./chevron-right-dAsgXWhf.js";import"./Input-C8hdlhUf.js";import"./search-B2UifxoD.js";import"./spin-zc7255ZI.js";import"./error-Bn4V0LpQ.js";import"./withOsdkMetrics-DlR5OldO.js";import"./makeExternalStore-CZxqc8La.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
