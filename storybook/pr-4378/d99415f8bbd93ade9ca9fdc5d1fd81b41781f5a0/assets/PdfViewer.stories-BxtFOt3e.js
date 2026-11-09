import{j as r,M as s}from"./iframe-DpLKkykb.js";import{P as p}from"./pdf-viewer-DedIPlWO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VTcfhg1y.js";import"./preload-helper-B-LnzVrM.js";import"./PdfViewer-Nw8Cq9by.js";import"./index-CGUYPJOd.js";import"./BasePdfViewer-BOzw0drC.js";import"./BasePdfViewer.module.css-uSrRS6lQ.js";import"./PdfViewerAnnotationLayer-D4bEhBdL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8bXjBCH3.js";import"./PdfViewerOutlineSidebar-D91bSgwk.js";import"./PdfViewerSidebarHeader-BXAHX_85.js";import"./useBaseUiId-exgAqZMu.js";import"./useControlled-DGS0wgFX.js";import"./CompositeRoot-iLqwmgoG.js";import"./CompositeItem-iDk6P1qU.js";import"./ToolbarRootContext-9nybivRl.js";import"./composite-B2s1GcRp.js";import"./svgIconContainer-CZQsWSbp.js";import"./PdfViewerSearchBar-Fk0B3WnS.js";import"./chevron-up-DUMYhYIg.js";import"./chevron-down-C95_Fq08.js";import"./cross-CXiMlBtd.js";import"./PdfViewerSidebar-DeY98KN7.js";import"./index-CLl-8Y0S.js";import"./index-M0qwvu5p.js";import"./index-gBz-IH4J.js";import"./PdfViewerToolbar-DOMFpvnb.js";import"./Button-CWQ4920K.js";import"./chevron-right-CdDajfjw.js";import"./Input-BRg86MD8.js";import"./search-DHqp7hab.js";import"./spin-BUtmggmZ.js";import"./error-B4GY5Ke1.js";import"./withOsdkMetrics-DU1BWRzI.js";import"./makeExternalStore-CIehlGBq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
