import{j as r,M as s}from"./iframe-Dh2xvDPL.js";import{P as p}from"./pdf-viewer-CpLGO4ng.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPyqVBu4.js";import"./preload-helper-SAHcs0zZ.js";import"./PdfViewer-CRSGyP9B.js";import"./index-Dr7bSUf-.js";import"./BasePdfViewer-C0imE5oE.js";import"./BasePdfViewer.module.css-CeP4noSc.js";import"./PdfViewerAnnotationLayer-BRe_xVli.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C4kIkDq7.js";import"./PdfViewerOutlineSidebar-D9M3vhAB.js";import"./PdfViewerSidebarHeader-B6ze4E3e.js";import"./useBaseUiId-X9Y2KA52.js";import"./useControlled-Cuxd_f5K.js";import"./CompositeRoot-BaMuCCzO.js";import"./CompositeItem-DLX8hiU0.js";import"./ToolbarRootContext-D8HNRzfl.js";import"./composite-KqTwPrS-.js";import"./svgIconContainer-BHSUSAvD.js";import"./PdfViewerSearchBar-CzMHiuyw.js";import"./chevron-up-BqauzORh.js";import"./chevron-down-Bnx_kJUl.js";import"./cross-ZJLJ2cFd.js";import"./PdfViewerSidebar-CLFHL5NO.js";import"./index-DSLCj2ev.js";import"./index-CT9Bx1MM.js";import"./index-n6Qd_eA8.js";import"./PdfViewerToolbar-mrSEHKwb.js";import"./Button-YpbDPlK1.js";import"./chevron-right-DWBBKeL9.js";import"./Input-D6WeFSc3.js";import"./search-DmyvADcW.js";import"./spin-DBKlp7vO.js";import"./error-DKTxybZv.js";import"./withOsdkMetrics-DzUlIuBm.js";import"./makeExternalStore-DYD0iaqF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
