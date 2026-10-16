import{j as r,M as s}from"./iframe-DCDy9VYS.js";import{P as p}from"./pdf-viewer-BkO9S1CM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dir5hb4Z.js";import"./preload-helper-DYzeOhdi.js";import"./PdfViewer-DEVP4vvb.js";import"./index-As1ywJYE.js";import"./BasePdfViewer-Dk_ZBFnk.js";import"./BasePdfViewer.module.css-DsY_nMVL.js";import"./PdfViewerAnnotationLayer-uSS3Rrkl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU8ONwOP.js";import"./PdfViewerOutlineSidebar-49CPW0Os.js";import"./PdfViewerSidebarHeader-KTUH8O_X.js";import"./useBaseUiId-BwVm2U7U.js";import"./useControlled-Ck2v8yj-.js";import"./CompositeRoot-ClZxIwF5.js";import"./CompositeItem-DLLGFuyo.js";import"./ToolbarRootContext-cMntifXn.js";import"./composite-c9aHe9jO.js";import"./svgIconContainer-D9qShJuw.js";import"./PdfViewerSearchBar-Ch0BV9TB.js";import"./chevron-up-f_d5u9Gd.js";import"./chevron-down-hGs_IVeQ.js";import"./cross-BJlA6QIm.js";import"./PdfViewerSidebar-D-Zg7nEr.js";import"./index-CMTxTXNi.js";import"./index-CvF6o7Ro.js";import"./index-Dg2YILHW.js";import"./PdfViewerToolbar-BCbWyfqs.js";import"./Button-CEFR6_SV.js";import"./chevron-right-wnm_fRSM.js";import"./Input-1IBLw1l4.js";import"./search-Nu3soqfg.js";import"./spin-q9ixOul7.js";import"./error-5cMYD3vI.js";import"./withOsdkMetrics-D5GlFsUX.js";import"./makeExternalStore-BQWaZP2I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
