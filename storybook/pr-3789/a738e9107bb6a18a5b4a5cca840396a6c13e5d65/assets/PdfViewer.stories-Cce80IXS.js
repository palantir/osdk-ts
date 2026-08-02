import{j as r,M as s}from"./iframe-BXc0SdYp.js";import{P as p}from"./pdf-viewer-CaTDh9E5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-oo8fyOjl.js";import"./preload-helper-Dgu0aCKG.js";import"./PdfRenderer-BbIQ1gXL.js";import"./index-sKZCAMiv.js";import"./PdfViewer-CFhz5I6u.js";import"./PdfViewer.module.css-DUlgzi1s.js";import"./PdfViewerAnnotationLayer-BJAF4VAB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmDs8wXM.js";import"./PdfViewerOutlineSidebar-MBt8gCGz.js";import"./PdfViewerSidebarHeader-BAnQ6bJt.js";import"./useBaseUiId-DqkkvKBG.js";import"./useControlled-BTSH1hwb.js";import"./CompositeRoot-B1IU0CCp.js";import"./CompositeItem-Bes2HBqU.js";import"./ToolbarRootContext-rpzDDNOx.js";import"./composite-BosRxt1T.js";import"./svgIconContainer-CtLj_lp3.js";import"./PdfViewerSearchBar-oA5Fb3DP.js";import"./chevron-up-CG0_y_0X.js";import"./chevron-down-B0Age7bb.js";import"./cross-DSir2KfQ.js";import"./PdfViewerSidebar-4igNbf_i.js";import"./index-DBAAGxWp.js";import"./index-xPUR9HDc.js";import"./index-ZxZ1oX-Q.js";import"./PdfViewerToolbar-w8XpyAPZ.js";import"./Button-V6iaqNOS.js";import"./chevron-right-2cNyP2h9.js";import"./Input-CtK5iVsJ.js";import"./search-B6X43A4Z.js";import"./spin-BP3vXwCf.js";import"./error-B7ytnZ8A.js";import"./withOsdkMetrics-D6nw3VcK.js";import"./makeExternalStore-CVfYdLVr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
