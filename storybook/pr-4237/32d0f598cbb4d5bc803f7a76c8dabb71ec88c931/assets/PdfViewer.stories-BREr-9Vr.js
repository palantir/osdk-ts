import{j as r,M as s}from"./iframe-D46iQmwz.js";import{P as p}from"./pdf-viewer-Dzvu838q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CFx-9pzG.js";import"./preload-helper-CD5q78pN.js";import"./PdfViewer-BN9GZWgO.js";import"./index-aAuOiy4H.js";import"./BasePdfViewer-3MsIlK5m.js";import"./BasePdfViewer.module.css-QvuVWnVD.js";import"./PdfViewerAnnotationLayer-C2QXdGBE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kNMyt-jt.js";import"./PdfViewerOutlineSidebar-CHG78Yai.js";import"./PdfViewerSidebarHeader-DmBFJ0DG.js";import"./useBaseUiId-CzYRzxTP.js";import"./useControlled-B0hedhV2.js";import"./CompositeRoot-Dq0N1Y5H.js";import"./CompositeItem-K2_1UaBE.js";import"./ToolbarRootContext-D_lRWVni.js";import"./composite-DKDexQnG.js";import"./svgIconContainer-B30Y3J7X.js";import"./PdfViewerSearchBar-DCUEJwXo.js";import"./chevron-up-DzgvA9uv.js";import"./chevron-down-CLNkT6er.js";import"./cross-DILS2Eyl.js";import"./PdfViewerSidebar-DuCSg9bV.js";import"./index-BcX9m2km.js";import"./index-B9mI2qXL.js";import"./index-B11g5eQq.js";import"./PdfViewerToolbar-D_UVWuYm.js";import"./Button-C713JtES.js";import"./chevron-right-BKhbcvXH.js";import"./Input-Y05_-7l4.js";import"./search-CTXiTDhB.js";import"./spin-CPPwPeVQ.js";import"./error-C1HeeVQA.js";import"./withOsdkMetrics-BBV3u7Lm.js";import"./makeExternalStore-BRMHbBWy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
