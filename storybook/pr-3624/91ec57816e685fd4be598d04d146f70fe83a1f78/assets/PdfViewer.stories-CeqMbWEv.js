import{j as r,M as s}from"./iframe-BwHy6jNp.js";import{P as p}from"./pdf-viewer-DJ3QRtJC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CdYhV2mG.js";import"./preload-helper-dGNyEUc1.js";import"./PdfRenderer-CnqfWvOO.js";import"./index-Dasdbcjr.js";import"./PdfViewer-BJKMmnrt.js";import"./PdfViewer.module.css-BvmtfFtT.js";import"./PdfViewerAnnotationLayer-39x-A4A0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bi3wXRlm.js";import"./PdfViewerOutlineSidebar-CQq_R_tg.js";import"./PdfViewerSidebarHeader-DDWSo7y6.js";import"./useBaseUiId-qGsuF-jp.js";import"./useControlled-B-i-VBct.js";import"./CompositeRoot-BWQXkHec.js";import"./CompositeItem-Dil8Emsp.js";import"./ToolbarRootContext-CmpaGdh2.js";import"./composite-BIdSyq5t.js";import"./svgIconContainer-PLSPni8G.js";import"./PdfViewerSearchBar-DQKF3Xef.js";import"./chevron-up-DgxNgFoQ.js";import"./chevron-down-CPpQwi7c.js";import"./cross-Db8iPSLr.js";import"./PdfViewerSidebar-DFz68RMP.js";import"./index-DDF4AR0S.js";import"./index-txdT0O1n.js";import"./index-Jym9_uxM.js";import"./PdfViewerToolbar-CO4-5l0A.js";import"./Button-vyjTHj83.js";import"./chevron-right-JzkatfgJ.js";import"./Input-CV2PF8aI.js";import"./search-bdoPWgW8.js";import"./spin-DVfGyZ3K.js";import"./error-Be2nVXGI.js";import"./withOsdkMetrics-koDwF7yx.js";import"./makeExternalStore-Dpn2B5JC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
