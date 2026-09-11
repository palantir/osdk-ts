import{j as r,M as s}from"./iframe-Cf0qyGmO.js";import{P as p}from"./pdf-viewer-BYE1mYxg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DgbsGSPB.js";import"./preload-helper-FPWMSdmp.js";import"./PdfViewer-qSrJmE8F.js";import"./index-BgodPvXa.js";import"./BasePdfViewer-CeM6Sz_v.js";import"./BasePdfViewer.module.css-2BsNw86_.js";import"./PdfViewerAnnotationLayer-BlI_GT5J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7NrMbCG.js";import"./PdfViewerOutlineSidebar-CbARuoy3.js";import"./PdfViewerSidebarHeader-CiIBxXH_.js";import"./useBaseUiId-BYXJoihF.js";import"./useControlled-BC5mDRRe.js";import"./CompositeRoot-DNYnltY6.js";import"./CompositeItem-Hv8dpGL2.js";import"./ToolbarRootContext-BEgrRK88.js";import"./composite-C4psFksR.js";import"./svgIconContainer-Cf6GYh8C.js";import"./PdfViewerSearchBar-BC0rhQ_6.js";import"./chevron-up-jTKpnbxO.js";import"./chevron-down-CciGsrf9.js";import"./cross-Dw3cMUV6.js";import"./PdfViewerSidebar-CTw7DxjQ.js";import"./index-DsFZ6bc6.js";import"./index-vIhG0vhZ.js";import"./index-_vrq9vUl.js";import"./PdfViewerToolbar-D9BhnOiV.js";import"./Button-QXRQZjdg.js";import"./chevron-right-D0-Bc27a.js";import"./Input-DeGiuUjm.js";import"./search-CjtKZYOm.js";import"./spin-DOfbekBQ.js";import"./error-CneFkgZH.js";import"./withOsdkMetrics-T_QycJJf.js";import"./makeExternalStore-Do5TdYdF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
