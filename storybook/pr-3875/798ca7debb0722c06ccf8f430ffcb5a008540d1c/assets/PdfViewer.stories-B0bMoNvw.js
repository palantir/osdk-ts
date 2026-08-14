import{j as r,M as s}from"./iframe-C3XbZWen.js";import{P as p}from"./pdf-viewer-BWr_7PHu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ChBJY1f8.js";import"./preload-helper-Bd8vTro1.js";import"./PdfViewer-DzKk586P.js";import"./index-Cbx6a8hz.js";import"./BasePdfViewer-EIcpClzD.js";import"./BasePdfViewer.module.css-tmlkOgpa.js";import"./PdfViewerAnnotationLayer-WM2qXY_m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxW-zXNF.js";import"./PdfViewerOutlineSidebar-CHRZZ_m9.js";import"./PdfViewerSidebarHeader-HJ-Lc01U.js";import"./useBaseUiId-DhsKY9ve.js";import"./useControlled-RhoVVMbd.js";import"./CompositeRoot-PfA0y-BJ.js";import"./CompositeItem-CDPEnVwM.js";import"./ToolbarRootContext-CLeDTtLu.js";import"./composite-DWbLdHMu.js";import"./svgIconContainer-MmaHaGlI.js";import"./PdfViewerSearchBar-BS3Sbunj.js";import"./chevron-up-DYQFPNje.js";import"./chevron-down-DqIBtDWK.js";import"./cross-CPx39Rqk.js";import"./PdfViewerSidebar-DLCF6ESZ.js";import"./index-LyhSYXkQ.js";import"./index-DIlMfn_R.js";import"./index-BjtPHMiR.js";import"./PdfViewerToolbar-D9q2RQ9H.js";import"./Button-D5gsrDav.js";import"./chevron-right-OGpZddy5.js";import"./Input-C6CMN-6w.js";import"./search-BWwFBwJa.js";import"./spin-D0mtTZQZ.js";import"./error-BB9ysK2b.js";import"./withOsdkMetrics-B9g6zipx.js";import"./makeExternalStore-DZjltypg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
