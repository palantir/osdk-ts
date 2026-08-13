import{j as r,M as s}from"./iframe-9i1qquD3.js";import{P as p}from"./pdf-viewer-CPvyuE2m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-biZ9DeEZ.js";import"./preload-helper-CaE5xEm4.js";import"./PdfViewer-YgXK-WSF.js";import"./index-Cn_PtrCz.js";import"./BasePdfViewer-DqPR-SSP.js";import"./BasePdfViewer.module.css-B9bqj5ts.js";import"./PdfViewerAnnotationLayer-DtZsCsjs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bc7TV6XY.js";import"./PdfViewerOutlineSidebar-BRKHQ0Si.js";import"./PdfViewerSidebarHeader-DJiYe_-B.js";import"./useBaseUiId-DJQfhcf8.js";import"./useControlled-BNPeKpmg.js";import"./CompositeRoot-C_zt_K6u.js";import"./CompositeItem-DH17Zr6A.js";import"./ToolbarRootContext-go0Pv47B.js";import"./composite-DM30W4Iq.js";import"./svgIconContainer-D5imF1LH.js";import"./PdfViewerSearchBar-C8x6rHSb.js";import"./chevron-up-CPJtD7Ix.js";import"./chevron-down-9Tly55P9.js";import"./cross-ycERs_gP.js";import"./PdfViewerSidebar-DXIYRc26.js";import"./index-CNJNx8DW.js";import"./index-D3xl72Ni.js";import"./index-_6ga9HMD.js";import"./PdfViewerToolbar-DRhx_c0W.js";import"./Button-C3QXTj2Z.js";import"./chevron-right-Clgg1pd8.js";import"./Input-CYnOeAhZ.js";import"./search-KbjOGA9O.js";import"./spin-BwYuLXr3.js";import"./error-DLTX-bVv.js";import"./withOsdkMetrics-COOg86OH.js";import"./makeExternalStore-DL0J9LaB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
