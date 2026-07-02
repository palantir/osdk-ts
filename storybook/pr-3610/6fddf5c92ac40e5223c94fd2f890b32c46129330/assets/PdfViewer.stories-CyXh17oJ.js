import{j as r,M as s}from"./iframe-BKZSR25P.js";import{P as p}from"./pdf-viewer-FyZ9lvqA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQii3_0J.js";import"./preload-helper-u_-78QZb.js";import"./PdfRenderer-BWjrmNGz.js";import"./index-CKD_841s.js";import"./PdfViewer-qmbnxwQY.js";import"./PdfViewer.module.css-DT-YCy_T.js";import"./PdfViewerAnnotationLayer-CI2iEwoH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BBJ3IJSX.js";import"./PdfViewerOutlineSidebar--N2W57yS.js";import"./PdfViewerSidebarHeader-Djt-0qTU.js";import"./useBaseUiId-CJWX5oGV.js";import"./useControlled-CHsZd_KW.js";import"./CompositeRoot-Cjc0xnde.js";import"./CompositeItem-DPHOJj1V.js";import"./ToolbarRootContext-BTGWSX4f.js";import"./composite-B0ttgqjc.js";import"./svgIconContainer-DusdeQqA.js";import"./PdfViewerSearchBar-B187S7cg.js";import"./chevron-up-Lt3oVePv.js";import"./chevron-down-B6P62qST.js";import"./cross-CFIey-Yz.js";import"./PdfViewerSidebar-BmbJmzhk.js";import"./index-59_8WguB.js";import"./index-C1jxgw1d.js";import"./index-C6E5Sbqe.js";import"./PdfViewerToolbar-uXhaBzNK.js";import"./Button-C7oPWaoJ.js";import"./chevron-right-DOMmvora.js";import"./Input-CrgI8EjG.js";import"./minus-pdeqdZ2k.js";import"./search-Dl3F-NNz.js";import"./spin-ChwRLUqK.js";import"./error-CYRaCWyI.js";import"./withOsdkMetrics-DVMeuPzl.js";import"./makeExternalStore-D-H3VwiL.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
