import{j as r,M as s}from"./iframe-JhP61fmQ.js";import{P as p}from"./pdf-viewer-CuzAix7k.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYvMRm4U.js";import"./preload-helper-Dv4AHPyi.js";import"./PdfViewer-D2Z1fUN5.js";import"./index-BSmeSe50.js";import"./BasePdfViewer-CfmunWJ-.js";import"./BasePdfViewer.module.css-DhGAIrCj.js";import"./PdfViewerAnnotationLayer-5g7pDHxq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcD3YOJq.js";import"./PdfViewerOutlineSidebar-oFeP3xQ_.js";import"./PdfViewerSidebarHeader-DbOcdYHj.js";import"./useBaseUiId-CA99nDKM.js";import"./useControlled-CmxJ51VA.js";import"./CompositeRoot-B5L22UnF.js";import"./CompositeItem-9QryHf4D.js";import"./ToolbarRootContext-D0sVvk8L.js";import"./composite-BB4dZRYR.js";import"./svgIconContainer-DKp8J6V9.js";import"./PdfViewerSearchBar-DYc2SCtT.js";import"./chevron-up-zn51GN14.js";import"./chevron-down-B0H-_dR_.js";import"./cross-Dsbhsz94.js";import"./PdfViewerSidebar-bHqrbzVl.js";import"./index-DkeojneP.js";import"./index-D3ENcNCA.js";import"./index-hdo2lGgd.js";import"./PdfViewerToolbar-BgK0yQLY.js";import"./Button-CndCZNKo.js";import"./chevron-right-DL1mbFuk.js";import"./Input-CRfOnocM.js";import"./search-CT7W-ise.js";import"./spin-CWbZhu4P.js";import"./error-Cz6c6olR.js";import"./withOsdkMetrics-BFR4d_uj.js";import"./makeExternalStore-CSQl7Sbm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
