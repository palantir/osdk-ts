import{j as r,M as s}from"./iframe-UMA_W4zg.js";import{P as p}from"./pdf-viewer-v5xsDAjs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZcQVGwS.js";import"./preload-helper-DaWmOC6j.js";import"./PdfViewer-CCLKBLt_.js";import"./index-DErLZjti.js";import"./BasePdfViewer-DPvipBdH.js";import"./BasePdfViewer.module.css-BfFFJeWR.js";import"./PdfViewerAnnotationLayer-DKqiK813.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0thMlNcg.js";import"./PdfViewerOutlineSidebar-v8r1Q1g4.js";import"./PdfViewerSidebarHeader-DJshUxmb.js";import"./useBaseUiId-DrNqzCDV.js";import"./useControlled-CE_jt1bn.js";import"./CompositeRoot-B5e6HIoO.js";import"./CompositeItem-CW8dWwRY.js";import"./ToolbarRootContext-BoABXtXA.js";import"./composite-cvyf7rpJ.js";import"./svgIconContainer-9DAz-xsT.js";import"./PdfViewerSearchBar-R-nGoxN9.js";import"./chevron-up-CL38ih1s.js";import"./chevron-down-Bl-z4KIc.js";import"./cross-uHksr5pp.js";import"./PdfViewerSidebar-C4BMoFEC.js";import"./index-CpBKtjMD.js";import"./index-Dh7ukoT2.js";import"./index-CEcWMbm3.js";import"./PdfViewerToolbar-d3hJC1iN.js";import"./Button-CX0KG7k8.js";import"./chevron-right-Cfb34noM.js";import"./Input-B7UvCAbi.js";import"./search-DDqiAHNJ.js";import"./spin-BzBEFXkA.js";import"./error-CSAcfTyc.js";import"./withOsdkMetrics-SDJh6Z2p.js";import"./makeExternalStore-Cw5EimAG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
