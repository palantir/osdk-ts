import{j as r,M as s}from"./iframe-Bln2S2Hd.js";import{P as p}from"./pdf-viewer-DpVx_8GM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhGpmIJ1.js";import"./preload-helper-D4XaSru4.js";import"./PdfViewer-BRu8CyWv.js";import"./index-D1Ietrlj.js";import"./BasePdfViewer-CeIRvMAq.js";import"./BasePdfViewer.module.css-0rwYn4UE.js";import"./PdfViewerAnnotationLayer-ClbouhGm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hdh9qXSr.js";import"./PdfViewerOutlineSidebar-CR8xbx3b.js";import"./PdfViewerSidebarHeader-k80mBlOw.js";import"./useBaseUiId-DzFDj8Yr.js";import"./useControlled-BG_GY85e.js";import"./CompositeRoot-BAgoEH8y.js";import"./CompositeItem-D6F0jU5J.js";import"./ToolbarRootContext-z7yzW3tg.js";import"./composite-BlSW-C1U.js";import"./svgIconContainer-BTYpKb3Z.js";import"./PdfViewerSearchBar-DVHqnLLh.js";import"./chevron-up-Dzy9tRBv.js";import"./chevron-down-B_NZATAC.js";import"./cross-wcRc-diA.js";import"./PdfViewerSidebar-hnDxYVCe.js";import"./index-BHIpZYxv.js";import"./index-BOpwrJ-W.js";import"./index-CnTqZcox.js";import"./PdfViewerToolbar-CgjUmPDy.js";import"./Button-B9XMX6ms.js";import"./chevron-right-CvbVXkPn.js";import"./Input-CVgkuK1P.js";import"./search-DNt_4LqU.js";import"./spin-ChBg3Ba7.js";import"./error-wBBSXgAg.js";import"./withOsdkMetrics-BkrRXFvl.js";import"./makeExternalStore-CXv5fKfm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
