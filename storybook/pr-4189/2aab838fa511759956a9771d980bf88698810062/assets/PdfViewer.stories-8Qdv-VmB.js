import{j as r,M as s}from"./iframe-CyyLqEr6.js";import{P as p}from"./pdf-viewer-CwwDx1DZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BgjpZp90.js";import"./preload-helper-CLKx56fr.js";import"./PdfViewer-DwKmBsDG.js";import"./index-CXVe_-qM.js";import"./BasePdfViewer-DyhaisrU.js";import"./BasePdfViewer.module.css-CHS32ybw.js";import"./PdfViewerAnnotationLayer-Du6fRxMp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-XU1B1w.js";import"./PdfViewerOutlineSidebar-BBY6n2Wg.js";import"./PdfViewerSidebarHeader-B4W2Opp2.js";import"./useBaseUiId-DNRq1Vj2.js";import"./useControlled-SLbcZlz1.js";import"./CompositeRoot-DZK8iigt.js";import"./CompositeItem-4N3XpUmD.js";import"./ToolbarRootContext-Dx3qy1zP.js";import"./composite-Cu366ztE.js";import"./svgIconContainer-BXEQoARc.js";import"./PdfViewerSearchBar-BL7hbkaA.js";import"./chevron-up-BjAPyZMM.js";import"./chevron-down-C0fFk26N.js";import"./cross-aF3LHT_W.js";import"./PdfViewerSidebar-BdEfgz-R.js";import"./index-BNa8gt2p.js";import"./index-Btxr5vyt.js";import"./index-DplZ--1V.js";import"./PdfViewerToolbar-C1IGg0sy.js";import"./Button-CE0RBh88.js";import"./chevron-right-BiqUGfz_.js";import"./Input-CGZ9tgdl.js";import"./search-9XevuXRY.js";import"./spin-CsEv9Dw2.js";import"./error-Dp6C50rF.js";import"./withOsdkMetrics-D87Y42PU.js";import"./makeExternalStore-B6005TWn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
