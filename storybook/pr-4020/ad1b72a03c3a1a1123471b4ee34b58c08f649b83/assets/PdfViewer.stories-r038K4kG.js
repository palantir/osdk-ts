import{j as r,M as s}from"./iframe-CNG5tC4E.js";import{P as p}from"./pdf-viewer-ChS40WZB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DeuqRK8c.js";import"./preload-helper-BwzygQFT.js";import"./PdfViewer-Bw-2UwMj.js";import"./index-CSa6QMaP.js";import"./BasePdfViewer-CceehPyH.js";import"./BasePdfViewer.module.css-BjVTfVZe.js";import"./PdfViewerAnnotationLayer-CayFRT-q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVz96tkq.js";import"./PdfViewerOutlineSidebar-IpydYw_1.js";import"./PdfViewerSidebarHeader-u7SdUozK.js";import"./useBaseUiId-UgguMUEz.js";import"./useControlled-BH2W_bUS.js";import"./CompositeRoot-BCHPP4qG.js";import"./CompositeItem-xBsV_YGf.js";import"./ToolbarRootContext-DSeyjEFW.js";import"./composite-dppvJbki.js";import"./svgIconContainer-fYOu3R0h.js";import"./PdfViewerSearchBar-2gLqyI3C.js";import"./chevron-up-B-JXNK6W.js";import"./chevron-down-C5OyQZRE.js";import"./cross-BUDfzWsm.js";import"./PdfViewerSidebar--Husc48V.js";import"./index-D0ktSt50.js";import"./index-D7WVWh6p.js";import"./index-CdYyMgNT.js";import"./PdfViewerToolbar-BScL5F5Q.js";import"./Button-DGS3jG4k.js";import"./chevron-right-MLXH-fj0.js";import"./Input-60lh5u04.js";import"./search-B5Nc1pS1.js";import"./spin-BVLhFH0E.js";import"./error-CwmCTB3X.js";import"./withOsdkMetrics-DclC6FPN.js";import"./makeExternalStore-BmYZSn43.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
