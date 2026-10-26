import{j as r,M as s}from"./iframe-CoFJxwHv.js";import{P as p}from"./pdf-viewer-CoUQoXOZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQWj6Wy7.js";import"./preload-helper-D-SgnzBV.js";import"./PdfViewer-CwesApNk.js";import"./index--Ea47wZq.js";import"./BasePdfViewer-T4MBB-Oz.js";import"./BasePdfViewer.module.css-EfdzlFa6.js";import"./PdfViewerAnnotationLayer-DlLwWDwd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tAeTv5iO.js";import"./PdfViewerOutlineSidebar--JSmxwy_.js";import"./PdfViewerSidebarHeader-Bmr6GjeI.js";import"./useBaseUiId-2pTyOHN-.js";import"./useControlled-BYI1O7tr.js";import"./CompositeRoot-n-fypNAx.js";import"./CompositeItem-Ca1TKgPn.js";import"./ToolbarRootContext-wMltP8Ko.js";import"./composite-D_cfAskA.js";import"./svgIconContainer-DEFqmnfP.js";import"./PdfViewerSearchBar-CGHPKlrl.js";import"./chevron-up-CUdrqehh.js";import"./chevron-down-BlDOgSlD.js";import"./cross-OzyUyhBS.js";import"./PdfViewerSidebar-B05j5Th-.js";import"./index-DqO9YIyX.js";import"./index-Cisz4sZL.js";import"./index-DB_u2R0T.js";import"./PdfViewerToolbar-DVUagNBd.js";import"./Button-2n8pstyv.js";import"./chevron-right-pckY_Tt_.js";import"./Input-DKwzPwJ8.js";import"./search-XDurstN3.js";import"./spin-DqpWOw0o.js";import"./error-D5A6w5ju.js";import"./withOsdkMetrics-CWJx0Uh8.js";import"./makeExternalStore-w2_wLIak.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
