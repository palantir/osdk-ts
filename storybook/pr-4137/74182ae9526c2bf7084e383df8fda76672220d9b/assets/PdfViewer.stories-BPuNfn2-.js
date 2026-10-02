import{j as r,M as s}from"./iframe-UiMnRuuf.js";import{P as p}from"./pdf-viewer-BnHo5wq6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8RjgQnN.js";import"./preload-helper-D9-KtqjS.js";import"./PdfViewer-7WNQXY35.js";import"./index-0Ixo6srr.js";import"./BasePdfViewer-BSamUk7l.js";import"./BasePdfViewer.module.css-DolNboCA.js";import"./PdfViewerAnnotationLayer-CrynnoV9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7JdUjGpW.js";import"./PdfViewerOutlineSidebar-B3ksBdzF.js";import"./PdfViewerSidebarHeader-BTNNMSYX.js";import"./useBaseUiId-BENer-r-.js";import"./useControlled-BRDQspVd.js";import"./CompositeRoot-DUQjDJ72.js";import"./CompositeItem-BAINckPf.js";import"./ToolbarRootContext-B5RqdBSK.js";import"./composite-jFy9GvzG.js";import"./svgIconContainer-Dm9tYT__.js";import"./PdfViewerSearchBar-D34YLLdA.js";import"./chevron-up-mLNM90Gi.js";import"./chevron-down-CpxF8NNT.js";import"./cross-CN0okcjD.js";import"./PdfViewerSidebar-OA22B0tq.js";import"./index-DHTqVbcd.js";import"./index-e-D0c2mh.js";import"./index-DBgZ08g1.js";import"./PdfViewerToolbar-ogWd_1Ze.js";import"./Button-rRx38Mfg.js";import"./chevron-right-B6BMbkd8.js";import"./Input-CNfnK_9k.js";import"./search-Cp4CoIwR.js";import"./spin-Bxgvcb2h.js";import"./error-Cy2KrzuU.js";import"./withOsdkMetrics-D6UjXomb.js";import"./makeExternalStore-pWUg2aV2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
