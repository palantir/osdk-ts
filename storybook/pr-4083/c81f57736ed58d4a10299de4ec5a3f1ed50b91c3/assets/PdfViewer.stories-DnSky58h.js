import{j as r,M as s}from"./iframe-C9OBkxCO.js";import{P as p}from"./pdf-viewer-DU5rMO-i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-Eviqez.js";import"./preload-helper-DzUjaibC.js";import"./PdfViewer-CaxrYPpQ.js";import"./index-CFjFkJ-v.js";import"./BasePdfViewer-BihyW2Fl.js";import"./BasePdfViewer.module.css-BXyGWW9t.js";import"./PdfViewerAnnotationLayer-d3xBcYPR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQ-9lMns.js";import"./PdfViewerOutlineSidebar-BRUskyoi.js";import"./PdfViewerSidebarHeader-BiojLjE4.js";import"./useBaseUiId-DrS8qHSd.js";import"./useControlled-B3h0MmL1.js";import"./CompositeRoot-z7aM2QO0.js";import"./CompositeItem-ByNf42qV.js";import"./ToolbarRootContext-BjF8crHV.js";import"./composite-BI-3SHGF.js";import"./svgIconContainer-BvHwqNKP.js";import"./PdfViewerSearchBar-c4gL2PNO.js";import"./chevron-up-Bg5sdZNr.js";import"./chevron-down-CRsfqdiU.js";import"./cross-DLECAn5_.js";import"./PdfViewerSidebar-CwNB9nxC.js";import"./index-N_Ci-Ahv.js";import"./index-Ddu0h4gv.js";import"./index-_alj9X0j.js";import"./PdfViewerToolbar-DfYGPYKX.js";import"./Button-DNW3Z-M9.js";import"./chevron-right-9ACQLWEv.js";import"./Input-DCcVeBLD.js";import"./search-Cdrrqif2.js";import"./spin-Bphr14p4.js";import"./error-uXY_ifTf.js";import"./withOsdkMetrics-BMU2Z44Q.js";import"./makeExternalStore-C1NBDQik.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
