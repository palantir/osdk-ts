import{j as r,M as s}from"./iframe-DNRgqJZG.js";import{P as p}from"./pdf-viewer-DdZ8Gk-V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DB-qdJ-Q.js";import"./preload-helper-B4MzypZ7.js";import"./PdfViewer-COcL6OmB.js";import"./index--r_AATYa.js";import"./BasePdfViewer-DdjZjuNw.js";import"./BasePdfViewer.module.css-C24KR-hv.js";import"./PdfViewerAnnotationLayer-C15bDEnU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zZotvOQW.js";import"./PdfViewerOutlineSidebar-BoNVI98T.js";import"./PdfViewerSidebarHeader-zHxqY5B8.js";import"./useBaseUiId-k1HsK5LP.js";import"./useControlled-B0UDo4VH.js";import"./CompositeRoot-wORx0fzE.js";import"./CompositeItem-GzRDip0q.js";import"./ToolbarRootContext-DAyCAc-p.js";import"./composite-BhLw2OB1.js";import"./svgIconContainer-RGbg_3In.js";import"./PdfViewerSearchBar-B5pa-FY0.js";import"./chevron-up-BzEHjWeV.js";import"./chevron-down-BGaiaEhj.js";import"./cross-fnGpeSL_.js";import"./PdfViewerSidebar-BVnyaDJR.js";import"./index-CsEQ4i91.js";import"./index-D50m2_yv.js";import"./index-Bb2PTGBq.js";import"./PdfViewerToolbar-DR_-dJrS.js";import"./Button-DrBYvyjr.js";import"./chevron-right-B7oZB99s.js";import"./Input-DaU9Iq4Y.js";import"./search-2pDcyK1J.js";import"./spin-P3SX3iif.js";import"./error-DII-yisC.js";import"./withOsdkMetrics-B_v8QCh0.js";import"./makeExternalStore-D4vVBx2o.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
