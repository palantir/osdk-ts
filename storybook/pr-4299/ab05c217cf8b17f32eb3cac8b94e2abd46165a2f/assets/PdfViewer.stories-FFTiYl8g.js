import{j as r,M as s}from"./iframe-BR4-xVYI.js";import{P as p}from"./pdf-viewer-CjLONA_Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHC0aw3h.js";import"./preload-helper-DbBEOmrA.js";import"./PdfViewer-Ccg-PiuS.js";import"./index-Bl34zl0T.js";import"./BasePdfViewer-BdsIrxVo.js";import"./BasePdfViewer.module.css-B55j6wwF.js";import"./PdfViewerAnnotationLayer-CpINt9es.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yJHNsQRt.js";import"./PdfViewerOutlineSidebar-Crqs0DVb.js";import"./PdfViewerSidebarHeader-D6PGt4GT.js";import"./useBaseUiId-BYzMy68a.js";import"./useControlled-DN7CYAB2.js";import"./CompositeRoot-B78GDGW9.js";import"./CompositeItem-CeAvgtlv.js";import"./ToolbarRootContext-DPLqybB9.js";import"./composite-B5Ni56Yc.js";import"./svgIconContainer-DsRlczG5.js";import"./PdfViewerSearchBar-DWKL87k8.js";import"./chevron-up-sR2e5foT.js";import"./chevron-down-B00usCld.js";import"./cross-C0jaUfu0.js";import"./PdfViewerSidebar-DYh8u98K.js";import"./index-DEPbvTfn.js";import"./index-CeuhUjnH.js";import"./index-ucjEhEXO.js";import"./PdfViewerToolbar-D8jCJ8Uh.js";import"./Button-B43-ydWW.js";import"./chevron-right-DYZwrNyg.js";import"./Input-D7vx6zqX.js";import"./search-WudRV3Lk.js";import"./spin-oDXt0-V6.js";import"./error-DEM7tD3T.js";import"./withOsdkMetrics-kvzuwV_e.js";import"./makeExternalStore-BG7GijXm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
