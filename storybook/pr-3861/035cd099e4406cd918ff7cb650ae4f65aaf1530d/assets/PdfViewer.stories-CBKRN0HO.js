import{j as r,M as s}from"./iframe-w1UAnkHZ.js";import{P as p}from"./pdf-viewer-B_mKQ0UI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmKmX7jd.js";import"./preload-helper-G_k10dw4.js";import"./PdfViewer-B-KbU769.js";import"./index-DAjwvQw3.js";import"./BasePdfViewer-C9Lp2a0-.js";import"./BasePdfViewer.module.css-l5LI2u7S.js";import"./PdfViewerAnnotationLayer-Caur7h4e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbrkyJz0.js";import"./PdfViewerOutlineSidebar-KPZmddju.js";import"./PdfViewerSidebarHeader-DNtWF-uS.js";import"./useBaseUiId-B91xIf3E.js";import"./useControlled-CyfOlT88.js";import"./CompositeRoot-D4pxYwFT.js";import"./CompositeItem-BFhWCO7j.js";import"./ToolbarRootContext-c5WYrsd5.js";import"./composite-BpZVqO51.js";import"./svgIconContainer-D_dZC5hw.js";import"./PdfViewerSearchBar-CTMNO7Uv.js";import"./chevron-up-wWgD8XwP.js";import"./chevron-down-B9i1zJjC.js";import"./cross-DKbNK5yX.js";import"./PdfViewerSidebar-Dl1ApmOr.js";import"./index-CyLlbcvz.js";import"./index-Dbx2XJAZ.js";import"./index-Btv6-V1K.js";import"./PdfViewerToolbar-U0Cb9-FR.js";import"./Button-Bh0hjCLH.js";import"./chevron-right-CHy0x744.js";import"./Input-tf1Imv2g.js";import"./search-DeM19rtD.js";import"./spin-D_1KKOj8.js";import"./error-CkfO44o7.js";import"./withOsdkMetrics-DrpjUk54.js";import"./makeExternalStore-BvX6IRpK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
