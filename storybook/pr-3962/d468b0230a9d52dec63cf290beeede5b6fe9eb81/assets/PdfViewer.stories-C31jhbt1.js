import{j as r,M as s}from"./iframe-Cd3dv8cT.js";import{P as p}from"./pdf-viewer-C232_U1l.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CVLmmcCw.js";import"./preload-helper-BvamZNkq.js";import"./PdfViewer-DXPdecgW.js";import"./index-DLxjxb8e.js";import"./BasePdfViewer-tmpaRoxa.js";import"./BasePdfViewer.module.css-B_Hz1VqG.js";import"./PdfViewerAnnotationLayer-D_TmcdEf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI1uQsIE.js";import"./PdfViewerOutlineSidebar-DMRrMY0k.js";import"./PdfViewerSidebarHeader-Cbx57bb4.js";import"./useBaseUiId-BaOg2aY4.js";import"./useControlled-qyMNC85h.js";import"./CompositeRoot-DKyKaFnZ.js";import"./CompositeItem-DmsI5HvC.js";import"./ToolbarRootContext-u0Mal7kP.js";import"./composite-CPkJv0Aj.js";import"./svgIconContainer-D-NoPjGJ.js";import"./PdfViewerSearchBar-CKzBBX9B.js";import"./chevron-up-x__Uo9m9.js";import"./chevron-down-DhFVxk1n.js";import"./cross-Dn7ydKbM.js";import"./PdfViewerSidebar-CT_-5nxP.js";import"./index-DSi4pYyx.js";import"./index-BhTIZT2w.js";import"./index-BxHsjHcu.js";import"./PdfViewerToolbar-BbNQ5XPf.js";import"./Button-BFlN4NNG.js";import"./chevron-right-DBpUeqQT.js";import"./Input-BqALFs3C.js";import"./search-DEQVu4Kn.js";import"./spin-pq4LDDvY.js";import"./error-Dg3cLmkh.js";import"./withOsdkMetrics-B9V-TBGu.js";import"./makeExternalStore-D4XV0ltY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
