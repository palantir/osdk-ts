import{j as r,M as s}from"./iframe-B5sOYknB.js";import{P as p}from"./pdf-viewer-BZtXLXj6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B_U1eY6J.js";import"./preload-helper-D9dw2WPS.js";import"./PdfRenderer-DVTpjzUU.js";import"./index-DXa5xaN7.js";import"./PdfViewer-CbaBme_k.js";import"./PdfViewer.module.css-DaIqWziQ.js";import"./PdfViewerAnnotationLayer-DHKaZN25.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxbfPHgw.js";import"./PdfViewerOutlineSidebar-B7OjbWnM.js";import"./PdfViewerSidebarHeader-DTwWdKj-.js";import"./useBaseUiId-Dx-UmPey.js";import"./useControlled-CCPUp8nx.js";import"./CompositeRoot-JaKZlc5t.js";import"./CompositeItem-BVRs5M7S.js";import"./ToolbarRootContext-CaQpawgI.js";import"./composite-Bh5IviOX.js";import"./svgIconContainer-Bm-AvMZM.js";import"./PdfViewerSearchBar-DdFDIskd.js";import"./chevron-up-CrSvDVuJ.js";import"./chevron-down-Bfpbv1f0.js";import"./cross-C8QYKCz4.js";import"./PdfViewerSidebar-DMfKNk6y.js";import"./index-Cslg85HU.js";import"./index-KsrOMrxo.js";import"./index-7_8bNiOK.js";import"./PdfViewerToolbar-BNgad7x4.js";import"./Button-g0uUMokr.js";import"./chevron-right-CynU8WhB.js";import"./Input-DPBiEFk6.js";import"./minus-C3pu2Lvz.js";import"./search-DmDl6Qzn.js";import"./spin-CCVNWruR.js";import"./error-C1B8oH3J.js";import"./withOsdkMetrics-DNYDo4hY.js";import"./makeExternalStore-A3NBjC7P.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
