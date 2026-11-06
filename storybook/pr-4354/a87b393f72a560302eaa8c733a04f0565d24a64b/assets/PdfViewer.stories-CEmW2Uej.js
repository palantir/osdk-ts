import{j as r,M as s}from"./iframe-CMoZd53O.js";import{P as p}from"./pdf-viewer-BOdKyxMq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-6jheRTby.js";import"./preload-helper-Bvb7-fL5.js";import"./PdfViewer-DleCV6vU.js";import"./index-BRB1GWD7.js";import"./BasePdfViewer-Bqo5DBVF.js";import"./BasePdfViewer.module.css-Bd3NWu2-.js";import"./PdfViewerAnnotationLayer-Dlnh-EYg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUSjmj0q.js";import"./PdfViewerOutlineSidebar-BbLmZWT3.js";import"./PdfViewerSidebarHeader-CuWriPyJ.js";import"./useBaseUiId-Qhb38DP0.js";import"./useControlled-BxfFaTP6.js";import"./CompositeRoot-CKDuVr7-.js";import"./CompositeItem-Djz6OTaL.js";import"./ToolbarRootContext-dQ-vGvin.js";import"./composite-ltKATKpa.js";import"./svgIconContainer-SBUhRCLt.js";import"./PdfViewerSearchBar-BYZ_s8o8.js";import"./chevron-up-CzwRLd6e.js";import"./chevron-down-BCXbJ6WN.js";import"./cross-CaFf6aAK.js";import"./PdfViewerSidebar-DlE7iyvJ.js";import"./index-fQcFOjTC.js";import"./index-D19nvIzc.js";import"./index-C8cm2zeY.js";import"./PdfViewerToolbar-BbCj0Y2D.js";import"./Button-BA8xBSZI.js";import"./chevron-right-9z6_5MpI.js";import"./Input-M24j8YBw.js";import"./search-DX4bcztW.js";import"./spin-D-kjppW-.js";import"./error-CjE7xCZl.js";import"./withOsdkMetrics-DG_FiXeR.js";import"./makeExternalStore-BA3QwJHc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
