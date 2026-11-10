import{j as r,M as s}from"./iframe-DlEUhHi7.js";import{P as p}from"./pdf-viewer-Duj4syFj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CI_YyD3u.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DAXSk-iR.js";import"./index-BdObmdSk.js";import"./BasePdfViewer-CxicWF5J.js";import"./BasePdfViewer.module.css-BoVWES2x.js";import"./PdfViewerAnnotationLayer-D2KvQGkc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C8fFFxrz.js";import"./PdfViewerOutlineSidebar-CgVeaXBf.js";import"./PdfViewerSidebarHeader-BdxbbtZK.js";import"./useBaseUiId-tb0rTi4h.js";import"./useControlled-DUY1KYlM.js";import"./CompositeRoot-D7T1GYKa.js";import"./CompositeItem-Ds-80rJN.js";import"./ToolbarRootContext-B2EyZNnQ.js";import"./composite-C8IR1RxG.js";import"./svgIconContainer-Bju_1rFh.js";import"./PdfViewerSearchBar-BlxQ-SNn.js";import"./chevron-up-b0hlIUdw.js";import"./chevron-down-DMneEgPP.js";import"./cross-qXDV-79n.js";import"./PdfViewerSidebar-JUovNQNN.js";import"./index-BpuBCpUI.js";import"./index-BZc9O5Mh.js";import"./index-BetcjBuf.js";import"./PdfViewerToolbar-DEJGIvWS.js";import"./Button-B-c1jfrq.js";import"./chevron-right-B1li63Bp.js";import"./Input-LD__uDdD.js";import"./search-DpAuH-Nq.js";import"./spin-BbHPZi42.js";import"./error-CpjEBkuC.js";import"./withOsdkMetrics-CgnK2w0k.js";import"./makeExternalStore-CQqAo0Kp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
