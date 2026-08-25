import{j as r,M as s}from"./iframe-DxvjiuoG.js";import{P as p}from"./pdf-viewer-D3oAdS34.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D6yaVGjm.js";import"./preload-helper-2Cdctxvp.js";import"./PdfViewer-BhIQQYgw.js";import"./index-D2DXMnPC.js";import"./BasePdfViewer-CUNj-5V0.js";import"./BasePdfViewer.module.css-DyeyWcdn.js";import"./PdfViewerAnnotationLayer-Ds-K6kYn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcUxxzfX.js";import"./PdfViewerOutlineSidebar-B1mi7h4g.js";import"./PdfViewerSidebarHeader-Dp8YNL-O.js";import"./useBaseUiId-i2ghUAO7.js";import"./useControlled-D-Xx0mSD.js";import"./CompositeRoot-v4C1pPtX.js";import"./CompositeItem-CRP27kpk.js";import"./ToolbarRootContext-DuzuuZ_P.js";import"./composite-MpnK6H_E.js";import"./svgIconContainer-Bc-LX5w1.js";import"./PdfViewerSearchBar-xVyie7IE.js";import"./chevron-up-By32wGcB.js";import"./chevron-down-QZl6FCPt.js";import"./cross-CU5iUeZK.js";import"./PdfViewerSidebar-DJmF1bsp.js";import"./index-DzU4p4MN.js";import"./index-DN7VKkaP.js";import"./index-CgTiDnZY.js";import"./PdfViewerToolbar-DcjFKP2A.js";import"./Button-C-PpSW9Y.js";import"./chevron-right-Cc1HUOMp.js";import"./Input-B0kS4IYW.js";import"./search-fJEePfyI.js";import"./spin-Czta6F7V.js";import"./error-6Ostu_bN.js";import"./withOsdkMetrics-Vqy1EVn8.js";import"./makeExternalStore-BFeJ6DMi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
