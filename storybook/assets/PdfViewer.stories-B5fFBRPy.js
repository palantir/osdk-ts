import{j as r,M as s}from"./iframe-BLfBkU7c.js";import{P as p}from"./pdf-viewer-Cy039uvZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-X-pFzuGs.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-D3XKzx4x.js";import"./index-Cd1weDkz.js";import"./PdfViewer-CN-l7Ate.js";import"./PdfViewer.module.css-C1FKkkD-.js";import"./PdfViewerAnnotationLayer-B4mg-IUL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTAZa2IY.js";import"./PdfViewerOutlineSidebar-BXVZxqNb.js";import"./PdfViewerSidebarHeader-CY6no8fY.js";import"./useBaseUiId-CLtvZEwH.js";import"./useControlled-CjKAHLhK.js";import"./CompositeRoot-BzB_6O03.js";import"./CompositeItem-24AhdNq5.js";import"./ToolbarRootContext-ByAIklDJ.js";import"./composite-Cbye_36A.js";import"./svgIconContainer-Cf593s56.js";import"./PdfViewerSearchBar-CfKkUIDG.js";import"./chevron-up-D1zMuXNg.js";import"./chevron-down-CNVJHkYO.js";import"./cross-6JE2X0ld.js";import"./PdfViewerSidebar-DLFYebFh.js";import"./index-_yx_jyGy.js";import"./index-D2H6BtrG.js";import"./index-B0gO-SUD.js";import"./PdfViewerToolbar-B7tI0tvH.js";import"./Button-6ROdSkPj.js";import"./chevron-right-Bb3G_3_4.js";import"./Input-DOxnnVCU.js";import"./search-0LJGK5RR.js";import"./spin-D-ng8oVL.js";import"./error-DVQkpXV7.js";import"./withOsdkMetrics-BHPjsBct.js";import"./makeExternalStore-Bgc2loVA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
