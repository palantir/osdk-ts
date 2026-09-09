import{j as r,M as s}from"./iframe-9-OswRKS.js";import{P as p}from"./pdf-viewer-DEDihnqU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DXr_xAyV.js";import"./preload-helper-DYL5InEO.js";import"./PdfViewer-BYxwwwFX.js";import"./index-SvIFWBde.js";import"./BasePdfViewer-D_1xxqG0.js";import"./BasePdfViewer.module.css-DRQ-8ySg.js";import"./PdfViewerAnnotationLayer-BR7KsvGS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6cGwjwGY.js";import"./PdfViewerOutlineSidebar-CjJuuPTe.js";import"./PdfViewerSidebarHeader-904j0_O-.js";import"./useBaseUiId-CXx1U6Z5.js";import"./useControlled-CGEFCoiG.js";import"./CompositeRoot-BEz_RrX4.js";import"./CompositeItem-TZo4ZNUL.js";import"./ToolbarRootContext-DtmptTL0.js";import"./composite-BDc56zIL.js";import"./svgIconContainer-DVdpIesk.js";import"./PdfViewerSearchBar-BEC5brIB.js";import"./chevron-up-DL9e-aG3.js";import"./chevron-down-B8yYoTwv.js";import"./cross-C9OnvPLu.js";import"./PdfViewerSidebar-B22IlgmA.js";import"./index-D44_FbgA.js";import"./index-HMIJrenA.js";import"./index-D2h7VYDA.js";import"./PdfViewerToolbar-BX5EOfj3.js";import"./Button-gzjofzeF.js";import"./chevron-right-BfcgshwP.js";import"./Input-0npSrlPh.js";import"./search-DPzUsQds.js";import"./spin-31AgOvRh.js";import"./error-BLLqk3sD.js";import"./withOsdkMetrics-DVJybCh6.js";import"./makeExternalStore-D5luXUgx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
