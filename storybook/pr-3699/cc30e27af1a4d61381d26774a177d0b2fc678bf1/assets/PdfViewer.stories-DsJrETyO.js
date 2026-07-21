import{j as r,M as s}from"./iframe-CEzTjPrX.js";import{P as p}from"./pdf-viewer-BHguczfP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Djo7cYmy.js";import"./preload-helper-DUTwDOF_.js";import"./PdfRenderer-DjX2ceBG.js";import"./index-Bxks1lYR.js";import"./PdfViewer-DCfA2FTo.js";import"./PdfViewer.module.css-BLGg9FI1.js";import"./PdfViewerAnnotationLayer-spVYVZs7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGL6gOho.js";import"./PdfViewerOutlineSidebar-E5LtRwB-.js";import"./PdfViewerSidebarHeader-ZRkgkz0G.js";import"./useBaseUiId-BgFGhdF-.js";import"./useControlled-Ivw8qQ8S.js";import"./CompositeRoot-rkeTClPM.js";import"./CompositeItem-_SDwp0eF.js";import"./ToolbarRootContext-CPNq27yP.js";import"./composite-CVmkB6SM.js";import"./svgIconContainer-CKFVWuuf.js";import"./PdfViewerSearchBar-CxEh0IBX.js";import"./chevron-up-I3aEv0wx.js";import"./chevron-down-SfT6NQyX.js";import"./cross-CwAqkswM.js";import"./PdfViewerSidebar-CqZv73H-.js";import"./index-0p1gArIw.js";import"./index-C9eueXWb.js";import"./index-DvuOpWIH.js";import"./PdfViewerToolbar-0gDX5AbT.js";import"./Button-Czzg7E_D.js";import"./chevron-right-DwHVodKr.js";import"./Input-DVRi4ofR.js";import"./search-CcE_VMNk.js";import"./spin-oUDcQ5Ps.js";import"./error-B1ipXgKY.js";import"./withOsdkMetrics-DrcUYiC0.js";import"./makeExternalStore-C9gV0ZCP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
