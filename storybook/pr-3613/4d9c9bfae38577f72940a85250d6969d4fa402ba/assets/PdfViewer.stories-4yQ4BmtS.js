import{j as r,M as s}from"./iframe-DfaOXHY8.js";import{P as p}from"./pdf-viewer-DauqNLzc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVvJHql8.js";import"./preload-helper-_Gg8458t.js";import"./PdfRenderer-Cq5W1aPN.js";import"./index-Bjxj1tkO.js";import"./PdfViewer-BxILHXOo.js";import"./PdfViewer.module.css-Cx2r6grJ.js";import"./PdfViewerAnnotationLayer-C0rklrwf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nrniaSwb.js";import"./PdfViewerOutlineSidebar-cGILtKr2.js";import"./PdfViewerSidebarHeader-VkpNeM9x.js";import"./useBaseUiId-CsvoVm3N.js";import"./useControlled-D2gXgYy-.js";import"./CompositeRoot-t-beg7Es.js";import"./CompositeItem-CUcdxzEq.js";import"./ToolbarRootContext-QVqQbnOh.js";import"./composite-BlIxJPzT.js";import"./svgIconContainer-C3cwmkoL.js";import"./PdfViewerSearchBar-CP7KJkdk.js";import"./chevron-up-DYpkTHCP.js";import"./chevron-down-Dt8PXYmB.js";import"./cross-RBJjUkQM.js";import"./PdfViewerSidebar-BFYMiomK.js";import"./index-DmcNtB5d.js";import"./index-GdTA9zcE.js";import"./index-51x_2MVZ.js";import"./PdfViewerToolbar-D7_hgRkh.js";import"./Button-Cw7UjT1Z.js";import"./chevron-right-VqIn58rx.js";import"./Input-BkSb-_GL.js";import"./search-DTwcP5yV.js";import"./spin-BomJ8BIN.js";import"./error-P3ErUBgd.js";import"./withOsdkMetrics-CCwtJm1e.js";import"./makeExternalStore-D015M79r.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
