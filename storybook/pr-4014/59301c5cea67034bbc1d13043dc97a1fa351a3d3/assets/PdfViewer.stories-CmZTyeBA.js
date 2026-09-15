import{j as r,M as s}from"./iframe-B5xJqKl6.js";import{P as p}from"./pdf-viewer-DfDab8D8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CRgnxTWh.js";import"./preload-helper-Ne8FQQgc.js";import"./PdfViewer-BxIsNQ58.js";import"./index-CCjfPqEl.js";import"./BasePdfViewer-CPeGz6oG.js";import"./BasePdfViewer.module.css-CpgDilar.js";import"./PdfViewerAnnotationLayer-BfFhxY-6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DlG2L1yS.js";import"./PdfViewerOutlineSidebar-BPu0hh1S.js";import"./PdfViewerSidebarHeader-BFObbKf1.js";import"./useBaseUiId-Cotk4UXc.js";import"./useControlled-Cyv6PlBx.js";import"./CompositeRoot-seDd-uhE.js";import"./CompositeItem-CLpB1ycb.js";import"./ToolbarRootContext-C6Gq0LMZ.js";import"./composite-BjyS4v5o.js";import"./svgIconContainer-B69lMk25.js";import"./PdfViewerSearchBar-Du6DCm9P.js";import"./chevron-up-ChndvNYI.js";import"./chevron-down-Dbn0Vtw3.js";import"./cross-C5VNjLCx.js";import"./PdfViewerSidebar-CMxb-snT.js";import"./index-6kBwbZOO.js";import"./index-D_ZLDl4o.js";import"./index-CGviHfV1.js";import"./PdfViewerToolbar-rfQjYKUc.js";import"./Button-qyC1OAbF.js";import"./chevron-right-B0NYUytP.js";import"./Input-WDAACwdq.js";import"./search-DaqXKDSx.js";import"./spin-AdKR5cRg.js";import"./error-DFd4_H53.js";import"./withOsdkMetrics-DKzJkasc.js";import"./makeExternalStore-DLfdYAzs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
