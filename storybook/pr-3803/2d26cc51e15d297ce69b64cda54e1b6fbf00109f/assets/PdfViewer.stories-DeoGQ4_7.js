import{j as r,M as s}from"./iframe-BHGDbtGe.js";import{P as p}from"./pdf-viewer-C3h8FW_l.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-qfgNaKvK.js";import"./preload-helper-D5OaizyV.js";import"./PdfRenderer-BZgAIFuf.js";import"./index-BGbjnL0r.js";import"./PdfViewer-BGx-Kx5L.js";import"./PdfViewer.module.css-Bn52aC86.js";import"./PdfViewerAnnotationLayer-D0Pr6yjp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vTkTJ_ra.js";import"./PdfViewerOutlineSidebar-Dq4R-NYO.js";import"./PdfViewerSidebarHeader-qn1BBTy3.js";import"./useBaseUiId-BxePW4ZZ.js";import"./useControlled-CIItNp9c.js";import"./CompositeRoot-CZad-BbM.js";import"./CompositeItem-C05Q1deB.js";import"./ToolbarRootContext-Dd8UM72f.js";import"./composite-DLWXPmjE.js";import"./svgIconContainer-CZX0yke1.js";import"./PdfViewerSearchBar-Ljjq3lAu.js";import"./chevron-up-qcdXTdMI.js";import"./chevron-down-Ddfl__cg.js";import"./cross-DV8hBvU3.js";import"./PdfViewerSidebar-DGj47JyG.js";import"./index-BIC30L0-.js";import"./index-Q7uht_3R.js";import"./index-DOkphcqk.js";import"./PdfViewerToolbar-BoaQlUge.js";import"./Button-CWnsWqv5.js";import"./chevron-right-C-34_56Y.js";import"./Input-CI0ds8FO.js";import"./search-D5NN5dep.js";import"./spin-634PHbrc.js";import"./error-DTLowD9G.js";import"./withOsdkMetrics-BNlgOp0v.js";import"./makeExternalStore-BcDoXpGE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
