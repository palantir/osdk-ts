import{j as r,M as s}from"./iframe-DFpZdgNU.js";import{P as p}from"./pdf-viewer-Do5K46dr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CqJ8KjVb.js";import"./preload-helper-BiKApNs9.js";import"./PdfViewer-DSNdY7sF.js";import"./index-DlVDHp89.js";import"./BasePdfViewer-XbjmgLn4.js";import"./BasePdfViewer.module.css-DZXkqqBY.js";import"./PdfViewerAnnotationLayer-CGlgLEwG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZnp3pTB.js";import"./PdfViewerOutlineSidebar-DxvI4HRT.js";import"./PdfViewerSidebarHeader-BhW-CPk2.js";import"./useBaseUiId-0zduKOPk.js";import"./useControlled-hOadE75D.js";import"./CompositeRoot-Dp2HXM8D.js";import"./CompositeItem-CHtvYS6F.js";import"./ToolbarRootContext-BYbbUH6Y.js";import"./composite-CM1n6GcK.js";import"./svgIconContainer-Bn3Ri9oc.js";import"./PdfViewerSearchBar-CNv-ksGf.js";import"./chevron-up-BxVPs6aP.js";import"./chevron-down-DGAHgV3w.js";import"./cross-BHvoIDr_.js";import"./PdfViewerSidebar-B2pZCsRA.js";import"./index-CP7LKd11.js";import"./index-DMpyqEyR.js";import"./index-CZjMLcuo.js";import"./PdfViewerToolbar-DeVKHY7S.js";import"./Button-BHbgtEyL.js";import"./chevron-right-C87Zpl9O.js";import"./Input-BpHQpMpf.js";import"./search-B6WVYs54.js";import"./spin-DfmK-JoG.js";import"./error-DAvK-lhg.js";import"./withOsdkMetrics-vWdfyIwO.js";import"./makeExternalStore-CAJutcEV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
