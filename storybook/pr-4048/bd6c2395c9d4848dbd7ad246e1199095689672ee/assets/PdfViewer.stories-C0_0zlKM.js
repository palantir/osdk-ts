import{j as r,M as s}from"./iframe-cfVHShSW.js";import{P as p}from"./pdf-viewer-DsG2-IpI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D_QKcZtm.js";import"./preload-helper-DIuXOY3G.js";import"./PdfViewer-Bb9No5O8.js";import"./index-Dh0_pJy1.js";import"./BasePdfViewer-BhPRnapd.js";import"./BasePdfViewer.module.css-CcP80ArY.js";import"./PdfViewerAnnotationLayer-BJqlNTR5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vT1TcKtW.js";import"./PdfViewerOutlineSidebar-FdbS57tC.js";import"./PdfViewerSidebarHeader-ClPb7kaO.js";import"./useBaseUiId-Dx0z8IdG.js";import"./useControlled-DRr_lzX9.js";import"./CompositeRoot-C0V_9FR8.js";import"./CompositeItem-BNd8aIDX.js";import"./ToolbarRootContext-rTwoUfWD.js";import"./composite-DGFet_96.js";import"./svgIconContainer-shdj6Qbw.js";import"./PdfViewerSearchBar-DWeMyLxd.js";import"./chevron-up-7TDXb1Rh.js";import"./chevron-down-SG4gwSm2.js";import"./cross-CQMpStFn.js";import"./PdfViewerSidebar-DjwgH0x5.js";import"./index-C9sGbhZ7.js";import"./index-DyU-H2ls.js";import"./index-B1nRcBho.js";import"./PdfViewerToolbar-CjBxf0_J.js";import"./Button-2DUkL7w7.js";import"./chevron-right--KguG4oQ.js";import"./Input-CRQW49QU.js";import"./search-HP5frDaz.js";import"./spin-CrzG3aES.js";import"./error-DFzqEfiP.js";import"./withOsdkMetrics-C8YqvKiy.js";import"./makeExternalStore-ClpC--FM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
