import{j as r,M as s}from"./iframe-BmwK0NB6.js";import{P as p}from"./pdf-viewer-DiSkj6tI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mbZExZgq.js";import"./preload-helper-CJI9HYts.js";import"./PdfViewer-CT62N7oU.js";import"./index-NnjawErR.js";import"./BasePdfViewer-BTfm42hb.js";import"./BasePdfViewer.module.css-_e6U9ymN.js";import"./PdfViewerAnnotationLayer-BYLiA9BR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B60W0Vui.js";import"./PdfViewerOutlineSidebar-BrPbgZgd.js";import"./PdfViewerSidebarHeader-4yZUIzeG.js";import"./useBaseUiId-DICqGIOz.js";import"./useControlled-D_GkEGnz.js";import"./CompositeRoot-Dd57Jg6S.js";import"./CompositeItem-BHcZzMjK.js";import"./ToolbarRootContext-ReHQQSwk.js";import"./composite-C06v5r-q.js";import"./svgIconContainer-DHRvXAx1.js";import"./PdfViewerSearchBar-B1UT6cHd.js";import"./chevron-up-Jn9qjjBj.js";import"./chevron-down-YY61_NRW.js";import"./cross-hgFEJfRa.js";import"./PdfViewerSidebar-DUfn22WM.js";import"./index-BpeS-KLN.js";import"./index-DuWg3JLn.js";import"./index-DiZc7AlS.js";import"./PdfViewerToolbar-wRsrYuEY.js";import"./Button-C7GE2_Px.js";import"./chevron-right-C-c31Te9.js";import"./Input-Bfu2n9eX.js";import"./search-Dm097x9N.js";import"./spin-BAVc9eUa.js";import"./error-CHia6_Yv.js";import"./withOsdkMetrics-BVS2eODs.js";import"./makeExternalStore-RuIAz4L3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
