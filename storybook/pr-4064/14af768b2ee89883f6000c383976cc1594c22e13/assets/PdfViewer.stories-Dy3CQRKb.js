import{j as r,M as s}from"./iframe-DkFy_hb4.js";import{P as p}from"./pdf-viewer-6VOwimf0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-JlZj_CiD.js";import"./preload-helper-BICWnFyb.js";import"./PdfViewer-BgMY9v3H.js";import"./index-CVhUa1cn.js";import"./BasePdfViewer-DfOXQZ0D.js";import"./BasePdfViewer.module.css-CuOvFX2U.js";import"./PdfViewerAnnotationLayer-CfBV1Y7F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ip2UMZI0.js";import"./PdfViewerOutlineSidebar-C6Psu-2h.js";import"./PdfViewerSidebarHeader-D7oOrzQY.js";import"./useBaseUiId-o_BwtbxA.js";import"./useControlled-DzWKWqDT.js";import"./CompositeRoot-BCsYAhY1.js";import"./CompositeItem-CdeIEk-d.js";import"./ToolbarRootContext-h2PUW2Ai.js";import"./composite-BGBfqcyM.js";import"./svgIconContainer-Cc9-LdUz.js";import"./PdfViewerSearchBar-By7DdJtv.js";import"./chevron-up-CLGql31j.js";import"./chevron-down-DpJL6cgz.js";import"./cross-BZRmfado.js";import"./PdfViewerSidebar-CkIj5oVX.js";import"./index-BdEt_Nen.js";import"./index-CYtpQu4o.js";import"./index-BKrHpELt.js";import"./PdfViewerToolbar-4aCmoxpF.js";import"./Button-CIX_sEiv.js";import"./chevron-right-RF41Ln4n.js";import"./Input-NAoVb_RW.js";import"./search-CLZw3WrP.js";import"./spin-D4WRHMWE.js";import"./error-GJosWbv9.js";import"./withOsdkMetrics-BuzdoqQa.js";import"./makeExternalStore-C1G5lVa7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
