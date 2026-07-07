import{j as r,M as s}from"./iframe-HdcGgbdA.js";import{P as p}from"./pdf-viewer-D5Bep2tp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-COPKDYHw.js";import"./preload-helper-Dw_hR2Bn.js";import"./PdfRenderer-3HcOZE5X.js";import"./index-e9PaiC4c.js";import"./PdfViewer-Dlx2A306.js";import"./PdfViewer.module.css-CsUepEwx.js";import"./PdfViewerAnnotationLayer-qla9Nxhk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh3YO_e4.js";import"./PdfViewerOutlineSidebar-D2pmAoDF.js";import"./PdfViewerSidebarHeader-CGRvp6Bq.js";import"./useBaseUiId-bzLFpoWT.js";import"./useControlled-DKlPK4uU.js";import"./CompositeRoot-i-B5ipMf.js";import"./CompositeItem-Bop6ZfZQ.js";import"./ToolbarRootContext-BQxfk6gj.js";import"./composite-CUyk41eZ.js";import"./svgIconContainer-quT0DxzY.js";import"./PdfViewerSearchBar-BATt90i5.js";import"./chevron-up-BaWGMtuo.js";import"./chevron-down-pBVAZbVQ.js";import"./cross-BlrjY9iP.js";import"./PdfViewerSidebar-BuzkiZbW.js";import"./index-C2JC-hxO.js";import"./index-jZ7Wgdp9.js";import"./index-DgsRemEa.js";import"./PdfViewerToolbar-BDS82mnX.js";import"./Button-DFu1lsOn.js";import"./chevron-right-C-_Xa4lB.js";import"./Input-BY_Kw-ep.js";import"./search-BXojRFA9.js";import"./spin-CelAEmoM.js";import"./error-OlBsv4yQ.js";import"./withOsdkMetrics-E6333lzv.js";import"./makeExternalStore-DI7WV0pI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
