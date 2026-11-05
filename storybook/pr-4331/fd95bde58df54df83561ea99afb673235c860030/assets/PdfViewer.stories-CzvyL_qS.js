import{j as r,M as s}from"./iframe-DfKl0JGk.js";import{P as p}from"./pdf-viewer-D5F7wzjD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D26DqVEs.js";import"./preload-helper-D2qZKtpg.js";import"./PdfViewer-B_1x0a6G.js";import"./index-aB099sio.js";import"./BasePdfViewer-nl7pyFyI.js";import"./BasePdfViewer.module.css-BAk1_Nvz.js";import"./PdfViewerAnnotationLayer-C6HLhCMT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN1G3qXu.js";import"./PdfViewerOutlineSidebar-CdsHkRgg.js";import"./PdfViewerSidebarHeader-DnbmkF3e.js";import"./useBaseUiId-BFnbzIXU.js";import"./useControlled-CuqWKABX.js";import"./CompositeRoot-DRavsj11.js";import"./CompositeItem-DCu8K_u-.js";import"./ToolbarRootContext-Djhkt96c.js";import"./composite-DoivXE_r.js";import"./svgIconContainer-BAQrNZDY.js";import"./PdfViewerSearchBar-BLgaaNQO.js";import"./chevron-up-DPoCXFRN.js";import"./chevron-down-CdRuI-bU.js";import"./cross-BNEnN7HL.js";import"./PdfViewerSidebar-DM3xBGj4.js";import"./index-B1rjjc3Y.js";import"./index-CPvTwKaJ.js";import"./index-Cu8ZN5fR.js";import"./PdfViewerToolbar-DfJLc7eq.js";import"./Button-B7sS73TJ.js";import"./chevron-right-DHxLGT8U.js";import"./Input-DOLGbI8I.js";import"./search-BwIUQD_S.js";import"./spin-DBfYABtQ.js";import"./error-Ci3w5MtL.js";import"./withOsdkMetrics-DiSdxyjG.js";import"./makeExternalStore-CSIEjtLx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
