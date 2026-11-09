import{j as r,M as s}from"./iframe-DqApX63y.js";import{P as p}from"./pdf-viewer-CwuPJ0my.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BvAzzseh.js";import"./preload-helper-Bec-Ia2T.js";import"./PdfViewer-ijVg7SZv.js";import"./index-CyvkUScE.js";import"./BasePdfViewer-Bxs6Z3ZC.js";import"./BasePdfViewer.module.css-DLqwArO_.js";import"./PdfViewerAnnotationLayer-D1dcp_Mn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VNrv71yB.js";import"./PdfViewerOutlineSidebar-D67-aBNy.js";import"./PdfViewerSidebarHeader-2NgX3nhQ.js";import"./useBaseUiId-BKFVtTe-.js";import"./useControlled-dziTOMb-.js";import"./CompositeRoot-BD9dbC-t.js";import"./CompositeItem-D1qVgSi4.js";import"./ToolbarRootContext-Dv213T19.js";import"./composite-CRmy7_bC.js";import"./svgIconContainer-6cRzMh8j.js";import"./PdfViewerSearchBar-DIYVGiUh.js";import"./chevron-up-CaNjSDpS.js";import"./chevron-down-DvNVUZis.js";import"./cross-C5bmvSOT.js";import"./PdfViewerSidebar-CB-W2u1R.js";import"./index-Drho1d5n.js";import"./index-BOcOla9y.js";import"./index-DRbiLs21.js";import"./PdfViewerToolbar-CvRjx2I1.js";import"./Button-ChF1ZUI_.js";import"./chevron-right-CnuQl9tu.js";import"./Input-DEWSCfWZ.js";import"./search-DWIX6Qtd.js";import"./spin-B_GHqehE.js";import"./error-D4Jl5yqC.js";import"./withOsdkMetrics-K4E-rs8a.js";import"./makeExternalStore-71T0xGUT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
