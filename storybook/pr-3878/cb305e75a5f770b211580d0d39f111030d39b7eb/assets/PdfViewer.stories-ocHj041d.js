import{j as r,M as s}from"./iframe-BXJnohbt.js";import{P as p}from"./pdf-viewer-BU5R6mvP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZdhnkzT.js";import"./preload-helper-tvnGn4jg.js";import"./PdfViewer-BIsD_58G.js";import"./index-DJBlipGi.js";import"./BasePdfViewer-BNn7wMNJ.js";import"./BasePdfViewer.module.css-3Id7R3L2.js";import"./PdfViewerAnnotationLayer-bhuRtU-E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUlRXSiE.js";import"./PdfViewerOutlineSidebar-Uu-Ib1AK.js";import"./PdfViewerSidebarHeader-jVRsCdeL.js";import"./useBaseUiId-sZ35m2bM.js";import"./useControlled--cyQ52Ku.js";import"./CompositeRoot-BeB5NSzA.js";import"./CompositeItem-DxHmEQaB.js";import"./ToolbarRootContext-DWK2aFvr.js";import"./composite-DdNHLfsp.js";import"./svgIconContainer-VhJmqTox.js";import"./PdfViewerSearchBar-CHI4I7kG.js";import"./chevron-up-C2Hylzc9.js";import"./chevron-down-CyQUuZQm.js";import"./cross-Q-_g4ZFQ.js";import"./PdfViewerSidebar-DmVmD6xi.js";import"./index-DCSxP7tL.js";import"./index-DbER6lkg.js";import"./index-DIxniVKs.js";import"./PdfViewerToolbar-OF-PgyXu.js";import"./Button-k1fX7wnM.js";import"./chevron-right-fh0fBiTP.js";import"./Input-DFgR57Ky.js";import"./search-Bwx9I6xK.js";import"./spin-BsXuYyv4.js";import"./error-Du-8Vb6N.js";import"./withOsdkMetrics-DBlk2yrx.js";import"./makeExternalStore-Nh0J-rEN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
