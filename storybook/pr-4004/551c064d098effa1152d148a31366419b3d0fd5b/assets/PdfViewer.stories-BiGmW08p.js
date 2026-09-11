import{j as r,M as s}from"./iframe-B-HGqiQv.js";import{P as p}from"./pdf-viewer-DoVeFEQG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DbAKgaIH.js";import"./preload-helper-f0nf4odL.js";import"./PdfViewer-CgCzHPeb.js";import"./index-bxDwllqb.js";import"./BasePdfViewer-BNCYyaI4.js";import"./BasePdfViewer.module.css-B3dEvuyM.js";import"./PdfViewerAnnotationLayer-Ca9q9wAG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9vZVNKf.js";import"./PdfViewerOutlineSidebar-BWr1J0F6.js";import"./PdfViewerSidebarHeader-BmAQLEIf.js";import"./useBaseUiId-SjVBW8d9.js";import"./useControlled-DE8TYXcZ.js";import"./CompositeRoot-BAOXPCu2.js";import"./CompositeItem-BdVijetn.js";import"./ToolbarRootContext-BLNyP9iz.js";import"./composite-Bss2rQnJ.js";import"./svgIconContainer-CcOwnLsJ.js";import"./PdfViewerSearchBar-DvVhG_iL.js";import"./chevron-up-nGRzPudY.js";import"./chevron-down-CPXc6U4P.js";import"./cross-EGyIlo5-.js";import"./PdfViewerSidebar-CLYl2SDP.js";import"./index-CdwYncCO.js";import"./index-BtG-qeps.js";import"./index-CEiCEyzQ.js";import"./PdfViewerToolbar-Cq6GAa6Y.js";import"./Button-DbLRaPaP.js";import"./chevron-right-C5Qtf454.js";import"./Input-DQz318CF.js";import"./search-2b7SykPm.js";import"./spin-BnP_UHMG.js";import"./error-BZh_GVh6.js";import"./withOsdkMetrics-jKzwJRkL.js";import"./makeExternalStore-Bg6-61eg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
