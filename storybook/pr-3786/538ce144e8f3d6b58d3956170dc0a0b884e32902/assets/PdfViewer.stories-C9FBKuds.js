import{j as r,M as s}from"./iframe-D73P9nKc.js";import{P as p}from"./pdf-viewer-cOPyr_eK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_cKLdr5.js";import"./preload-helper-BjEBufMF.js";import"./PdfRenderer-DKCSHBLs.js";import"./index-CirTIIDW.js";import"./PdfViewer-tinmgHWJ.js";import"./PdfViewer.module.css-CRPM5vgk.js";import"./PdfViewerAnnotationLayer-BSyVhVmJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-wDGzEX.js";import"./PdfViewerOutlineSidebar-B1ysagb_.js";import"./PdfViewerSidebarHeader-ByNHp3eQ.js";import"./useBaseUiId-xBTezciU.js";import"./useControlled-RQ2ruCMn.js";import"./CompositeRoot-Bp0eorV4.js";import"./CompositeItem-Ppg2q6Wh.js";import"./ToolbarRootContext-DnVqj7ts.js";import"./composite-edjiBCvk.js";import"./svgIconContainer-CeFk8pT0.js";import"./PdfViewerSearchBar-DCbpTezq.js";import"./chevron-up-rWCAh1VE.js";import"./chevron-down-WD0BiTuk.js";import"./cross-Dfl2KnYN.js";import"./PdfViewerSidebar-B-3Yu4yH.js";import"./index-gmmWqW7B.js";import"./index-Dwedegj9.js";import"./index-NbMM9cDd.js";import"./PdfViewerToolbar-CvpWrzJo.js";import"./Button-C_5kgWUY.js";import"./chevron-right-BSj72Hz6.js";import"./Input-DJcl3DDq.js";import"./search-Dt1g4XkD.js";import"./spin-ipZi8Yn3.js";import"./error-CVdJWrUx.js";import"./withOsdkMetrics-BFaCjj6O.js";import"./makeExternalStore-fGwEBPTV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
