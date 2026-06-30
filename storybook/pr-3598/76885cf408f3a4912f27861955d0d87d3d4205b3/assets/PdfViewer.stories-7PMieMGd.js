import{j as r,M as s}from"./iframe-D1OesapM.js";import{P as p}from"./pdf-viewer-Xk1C9zTS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQRuI86I.js";import"./preload-helper-CWyFRo_B.js";import"./PdfRenderer-C66KB9JI.js";import"./index-DMtCjLJY.js";import"./PdfViewer-Obhd-sXY.js";import"./PdfViewer.module.css-B0JicejU.js";import"./PdfViewerAnnotationLayer-_muYc9Yb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtEX_Mf_.js";import"./PdfViewerOutlineSidebar-BIsfG6QS.js";import"./PdfViewerSidebarHeader-23XXpXGD.js";import"./useBaseUiId-kB4ggmLy.js";import"./useControlled-8kjH-NtT.js";import"./CompositeRoot-DEhxLl4N.js";import"./CompositeItem-c0SeRm0i.js";import"./ToolbarRootContext-K7kL1Y4Z.js";import"./composite-vHTE3Mr2.js";import"./svgIconContainer-DXytnXt-.js";import"./PdfViewerSearchBar-Xhh89lxZ.js";import"./chevron-up-Czj7DOeY.js";import"./chevron-down-rIZQARrO.js";import"./cross-feoG7Ztk.js";import"./PdfViewerSidebar-BJHUXTyY.js";import"./index-Ck-dowE7.js";import"./index-Duv15EQw.js";import"./index-iLiemBjV.js";import"./PdfViewerToolbar-Ci2NdMYn.js";import"./Button-CSxxyQxV.js";import"./chevron-right-DOJKryNe.js";import"./Input-D9xER9fc.js";import"./minus-D6vzs1_J.js";import"./search-BDr6JmbH.js";import"./spin-05Uo04pj.js";import"./error-BGk2V_gx.js";import"./withOsdkMetrics-BIdW4CAc.js";import"./makeExternalStore-C7V9DMZC.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
