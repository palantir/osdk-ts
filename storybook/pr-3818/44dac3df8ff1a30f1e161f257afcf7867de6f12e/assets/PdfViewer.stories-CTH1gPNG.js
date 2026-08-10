import{j as r,M as s}from"./iframe-DDq7u4il.js";import{P as p}from"./pdf-viewer-DRhT8NFr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQ2RnTs6.js";import"./preload-helper-DchmjQ8j.js";import"./PdfRenderer-DQfb7w4g.js";import"./index-CRwX66Ho.js";import"./PdfViewer-Cd1I1q-A.js";import"./PdfViewer.module.css-CiHujIvu.js";import"./PdfViewerAnnotationLayer-CSPOA0kb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuJUuI48.js";import"./PdfViewerOutlineSidebar-CDDVQNeT.js";import"./PdfViewerSidebarHeader-D3MqlZ42.js";import"./useBaseUiId-DoF2emQC.js";import"./useControlled-8csFG6-s.js";import"./CompositeRoot-DP17xfo1.js";import"./CompositeItem-CgZOI2Nx.js";import"./ToolbarRootContext-Cnr8zXiz.js";import"./composite-24zZeo5k.js";import"./svgIconContainer-gjlLDHcU.js";import"./PdfViewerSearchBar-FgJF_nv-.js";import"./chevron-up-B3koRPOZ.js";import"./chevron-down-B0rjx85Q.js";import"./cross-CnhzJciY.js";import"./PdfViewerSidebar-MuG70QK2.js";import"./index-CyhobMXH.js";import"./index-wbPw0NdA.js";import"./index-i_VEQr3c.js";import"./PdfViewerToolbar-BGkr_tDe.js";import"./Button-0qAbUNya.js";import"./chevron-right-C_kZyNHG.js";import"./Input-Daps5nhV.js";import"./search-DW3qWj6H.js";import"./spin-CdazhHdj.js";import"./error-CVPt2IGW.js";import"./withOsdkMetrics-BzGj8Zi1.js";import"./makeExternalStore-BGBbZ4XE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
