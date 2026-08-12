import{j as r,M as s}from"./iframe-DNE97pGZ.js";import{P as p}from"./pdf-viewer-CDm20bU2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B-DcpMLM.js";import"./preload-helper-BahKFp3m.js";import"./PdfRenderer-CCXFHy2M.js";import"./index-Bp-5OsF-.js";import"./PdfViewer-DFob7YeD.js";import"./PdfViewer.module.css-WbPwz6Gl.js";import"./PdfViewerAnnotationLayer-xznO42XK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHehzjjt.js";import"./PdfViewerOutlineSidebar-CVaStvOW.js";import"./PdfViewerSidebarHeader-CuUYZSzt.js";import"./useBaseUiId-Cp65BJC6.js";import"./useControlled-B0ujXEQq.js";import"./CompositeRoot--lIBlDFu.js";import"./CompositeItem-Bs6wEv0j.js";import"./ToolbarRootContext-DBqoJQeM.js";import"./composite-CzLwjv4f.js";import"./svgIconContainer-CRfNt06m.js";import"./PdfViewerSearchBar-DgsdV2Z5.js";import"./chevron-up-B82OG2BY.js";import"./chevron-down-DzX2K_Xp.js";import"./cross-Dx5ZxZuM.js";import"./PdfViewerSidebar-CZP_ykW1.js";import"./index-BrQsf66R.js";import"./index-Dp0A1Fy8.js";import"./index-D5b6Elzx.js";import"./PdfViewerToolbar-BENqsbi9.js";import"./Button-DHAmSgJm.js";import"./chevron-right-D5_MlSTh.js";import"./Input-BzjIqYHe.js";import"./search-BNuo8zTf.js";import"./spin-DV4rHCjx.js";import"./error-Cc9LB0hd.js";import"./withOsdkMetrics-B6lPkcGy.js";import"./makeExternalStore-BUUHdmfH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
