import{j as r,M as s}from"./iframe-DuvqzVxr.js";import{P as p}from"./pdf-viewer-Cdy0gwx-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DnEgXfhh.js";import"./preload-helper-B8Qd9CCZ.js";import"./PdfViewer-C4uzeJgj.js";import"./index-CAuUDW48.js";import"./BasePdfViewer-TQxVuz2K.js";import"./BasePdfViewer.module.css-CuDj74Ac.js";import"./PdfViewerAnnotationLayer-iZvtyZk2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqjnQFQU.js";import"./PdfViewerOutlineSidebar-CrFPpy2F.js";import"./PdfViewerSidebarHeader-WcIxy1NJ.js";import"./useBaseUiId-CfATFv1v.js";import"./useControlled-DqFDREqa.js";import"./CompositeRoot-PKxcOaKu.js";import"./CompositeItem-Dls_a94V.js";import"./ToolbarRootContext-BTKqEH_P.js";import"./composite-CdnuQNOj.js";import"./svgIconContainer-D3ZSKuHH.js";import"./PdfViewerSearchBar-DvsNsmWM.js";import"./chevron-up-C71Omjwi.js";import"./chevron-down-DD8mUth2.js";import"./cross-D-jw0QJK.js";import"./PdfViewerSidebar-D4VnBE8u.js";import"./index-fBn-5OyE.js";import"./index-Bs6MnhUR.js";import"./index-BfNHcsKt.js";import"./PdfViewerToolbar-CP6ybEwv.js";import"./Button-D-ya50CL.js";import"./chevron-right-DenyRtF8.js";import"./Input-Wm8tLy-0.js";import"./search-BeCT36MA.js";import"./spin-CA7ALgKx.js";import"./error-BIPDQryL.js";import"./withOsdkMetrics-39xkLVPI.js";import"./makeExternalStore-pWtHUq0J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
