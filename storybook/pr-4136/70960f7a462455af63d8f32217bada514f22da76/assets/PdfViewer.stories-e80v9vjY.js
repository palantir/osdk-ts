import{j as r,M as s}from"./iframe-CPz-wzhp.js";import{P as p}from"./pdf-viewer-DZqVRThV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DN8KoFgY.js";import"./preload-helper-B3PLv50W.js";import"./PdfViewer-B-UEeKCc.js";import"./index-CtV6ZPdt.js";import"./BasePdfViewer-4Sty3XDA.js";import"./BasePdfViewer.module.css-BxLiw04T.js";import"./PdfViewerAnnotationLayer-BYOvfuyy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PAVDiebQ.js";import"./PdfViewerOutlineSidebar-CNs-4Wfc.js";import"./PdfViewerSidebarHeader-CC9uguXO.js";import"./useBaseUiId-bEyq9hSb.js";import"./useControlled-7vp-sIj7.js";import"./CompositeRoot-C8X-4Z7i.js";import"./CompositeItem-t2T-QHuZ.js";import"./ToolbarRootContext-ClJ_sUWs.js";import"./composite-Dda615xV.js";import"./svgIconContainer-B99gTCIO.js";import"./PdfViewerSearchBar-CLQ8_-iW.js";import"./chevron-up-DuRMlZ8v.js";import"./chevron-down-BNy5Nzph.js";import"./cross-DRBzl1mu.js";import"./PdfViewerSidebar-DVP5Hldk.js";import"./index-CbuVsfr5.js";import"./index-DzRVDHUw.js";import"./index-BRVvkZ9q.js";import"./PdfViewerToolbar-J6bO5xZP.js";import"./Button-6LWfTNU-.js";import"./chevron-right-C1tzrdVi.js";import"./Input-BO6jo4k5.js";import"./search-CPfH1VP1.js";import"./spin-TSMazN24.js";import"./error-BD3e32HB.js";import"./withOsdkMetrics-BXgZN6T2.js";import"./makeExternalStore-Ba5nMm5U.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
