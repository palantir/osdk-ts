import{j as r,M as s}from"./iframe-DBDT7cai.js";import{P as p}from"./pdf-viewer-BIaJw0Tq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DVzCg8LT.js";import"./preload-helper-CZUIUplp.js";import"./PdfViewer-Da6qtx_u.js";import"./index-DNPTs4g2.js";import"./BasePdfViewer-Bl2kGDKJ.js";import"./BasePdfViewer.module.css-CzS1R_zn.js";import"./PdfViewerAnnotationLayer-DSA0vRz_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uBQ5kQh2.js";import"./PdfViewerOutlineSidebar-DkXxoBV0.js";import"./PdfViewerSidebarHeader-CcftiD0N.js";import"./useBaseUiId-PRKCGqGz.js";import"./useControlled-BkrcSri5.js";import"./CompositeRoot-COrMMVoC.js";import"./CompositeItem-LxcE4aIz.js";import"./ToolbarRootContext-CsenKUBi.js";import"./composite-L0L9oW-4.js";import"./svgIconContainer-DGCHmuI4.js";import"./PdfViewerSearchBar-CBNQWGu6.js";import"./chevron-up-C3mNsh_9.js";import"./chevron-down-BPXQkSQg.js";import"./cross-DXxcDe7j.js";import"./PdfViewerSidebar-CYqxTMN-.js";import"./index-CBFMIrtK.js";import"./index-BsC2sM8x.js";import"./index-kRLOqZpZ.js";import"./PdfViewerToolbar-D4SsfpAa.js";import"./Button-DP4lNjcp.js";import"./chevron-right-DJNF187T.js";import"./Input-CitZWzLR.js";import"./search-CWHw7Uqg.js";import"./spin-BN8C2zey.js";import"./error-OvuTWF-e.js";import"./withOsdkMetrics-C04fN_3L.js";import"./makeExternalStore-CP2a49qE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
