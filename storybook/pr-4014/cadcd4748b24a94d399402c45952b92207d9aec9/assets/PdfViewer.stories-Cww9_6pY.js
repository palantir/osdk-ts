import{j as r,M as s}from"./iframe-CUQ6pW6f.js";import{P as p}from"./pdf-viewer-LPj8qUDa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDMElHBH.js";import"./preload-helper-R0VkCi4m.js";import"./PdfViewer-DlhxeHAV.js";import"./index-h-DI9Lrm.js";import"./BasePdfViewer-CuPQeDED.js";import"./BasePdfViewer.module.css-XitecY1k.js";import"./PdfViewerAnnotationLayer-BcwXf7SW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJgjW1Aw.js";import"./PdfViewerOutlineSidebar-CikGTUpZ.js";import"./PdfViewerSidebarHeader-BDI40gDz.js";import"./useBaseUiId-io2D7EyL.js";import"./useControlled-zbqpEGsi.js";import"./CompositeRoot-GumS-HTn.js";import"./CompositeItem-BFFGDsSt.js";import"./ToolbarRootContext-Bu39Qel7.js";import"./composite-DVURSZ_Q.js";import"./svgIconContainer-DgxjXUVD.js";import"./PdfViewerSearchBar-DM8L88BU.js";import"./chevron-up-B1qykX4z.js";import"./chevron-down-s1tgkNuZ.js";import"./cross-DBScoIN6.js";import"./PdfViewerSidebar-mAB75rEn.js";import"./index-DF9wOV2c.js";import"./index-sOt4flAH.js";import"./index-B1pgXqxk.js";import"./PdfViewerToolbar-CWFB7BFm.js";import"./Button-C1Q3ab7J.js";import"./chevron-right-D0AUPlhy.js";import"./Input-BeRbTOIW.js";import"./search-NIM10vXd.js";import"./spin-0tkHu27e.js";import"./error-hc0pOP7n.js";import"./withOsdkMetrics-C6sVCQ7L.js";import"./makeExternalStore-Bm8o0kSK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
