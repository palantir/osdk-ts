import{j as r,M as s}from"./iframe-BTDvHL3g.js";import{P as p}from"./pdf-viewer-3VzR3yK-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpgS0sHx.js";import"./preload-helper-D9Z_UkK8.js";import"./PdfViewer-DXlQNCLx.js";import"./index-C2WocGyz.js";import"./BasePdfViewer-Cz9Bj0wT.js";import"./BasePdfViewer.module.css-CyCjbGOb.js";import"./PdfViewerAnnotationLayer-DYxK6u42.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6I3KP2-.js";import"./PdfViewerOutlineSidebar--36p3Na0.js";import"./PdfViewerSidebarHeader-BDbZ6Tt-.js";import"./useBaseUiId-Ca42jcOp.js";import"./useControlled-DZa6FNla.js";import"./CompositeRoot-DjSKGjLy.js";import"./CompositeItem-SQA_IIyG.js";import"./ToolbarRootContext-D_KZXAup.js";import"./composite-CR_T3dDP.js";import"./svgIconContainer-Dt86stim.js";import"./PdfViewerSearchBar-D0TsoG7Y.js";import"./chevron-up-C1KNjqHU.js";import"./chevron-down-B2G_smGI.js";import"./cross-Cp0W9YlM.js";import"./PdfViewerSidebar-By_30SDO.js";import"./index-B7w2hjNg.js";import"./index-CtTeoyvV.js";import"./index-Cs7K0AYs.js";import"./PdfViewerToolbar-zSdPHA77.js";import"./Button-2AhFByte.js";import"./chevron-right-lWXLioiL.js";import"./Input-B9motj4l.js";import"./search-BZZDgwTx.js";import"./spin-2bUwdHFg.js";import"./error-7FvWp7D0.js";import"./withOsdkMetrics-BVhEzQUJ.js";import"./makeExternalStore-D99Ax1Zi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
