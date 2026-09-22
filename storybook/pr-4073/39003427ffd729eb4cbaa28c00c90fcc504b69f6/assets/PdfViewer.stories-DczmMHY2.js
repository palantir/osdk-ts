import{j as r,M as s}from"./iframe-CNVlK6B5.js";import{P as p}from"./pdf-viewer-DBeH4XUr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CRS9QbMs.js";import"./preload-helper-D6U9hvSn.js";import"./PdfViewer-De4keue5.js";import"./index-BIcFjsCk.js";import"./BasePdfViewer-C27dRsp9.js";import"./BasePdfViewer.module.css-DHruiNe-.js";import"./PdfViewerAnnotationLayer-CkiKjN4S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DT7Ksyoo.js";import"./PdfViewerOutlineSidebar-D_yOsdYk.js";import"./PdfViewerSidebarHeader-DdTn3oBw.js";import"./useBaseUiId-oIpQHClg.js";import"./useControlled-CIn-ajlC.js";import"./CompositeRoot-CWbC-1lW.js";import"./CompositeItem-DhWvIZCc.js";import"./ToolbarRootContext-B65PxelA.js";import"./composite-9AJkVSIl.js";import"./svgIconContainer-CkEgUKYH.js";import"./PdfViewerSearchBar-BI8-SC6n.js";import"./chevron-up-BZUKeeD1.js";import"./chevron-down-D3H5NEc0.js";import"./cross-Cd5yBkhc.js";import"./PdfViewerSidebar-e73kpo-U.js";import"./index-_ZOs9p_u.js";import"./index-CRgut8Os.js";import"./index-CRWNiz7H.js";import"./PdfViewerToolbar-C0zjhhSB.js";import"./Button-BTD6ABzp.js";import"./chevron-right-C0sZ9H1C.js";import"./Input-BcMyy9hm.js";import"./search-CqRM5I4x.js";import"./spin-h6VKveWy.js";import"./error-Cf_L3Bxv.js";import"./withOsdkMetrics-oHno8_nm.js";import"./makeExternalStore-AThIzlcn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
