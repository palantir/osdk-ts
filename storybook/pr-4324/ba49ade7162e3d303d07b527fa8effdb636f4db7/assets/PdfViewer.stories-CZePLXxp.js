import{j as r,M as s}from"./iframe-DEUQfbyJ.js";import{P as p}from"./pdf-viewer-DC3rbtxD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bs8tm1uc.js";import"./preload-helper-DDtbSBML.js";import"./PdfViewer-DQ2gdTDc.js";import"./index-C6_mThYo.js";import"./BasePdfViewer-CKYKRSCm.js";import"./BasePdfViewer.module.css-BI0s1Am5.js";import"./PdfViewerAnnotationLayer-D_m4jJtu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtKSv4nb.js";import"./PdfViewerOutlineSidebar-BLZi8-q-.js";import"./PdfViewerSidebarHeader-8EdPib00.js";import"./useBaseUiId-CRei-m-p.js";import"./useControlled-BF2EiofB.js";import"./CompositeRoot-CMnQGokI.js";import"./CompositeItem-zXsqXwGS.js";import"./ToolbarRootContext-D3nYLoXj.js";import"./composite-Bu1RP316.js";import"./svgIconContainer-Cb_T1wEM.js";import"./PdfViewerSearchBar-D5LOimRE.js";import"./chevron-up-CrPG7RZK.js";import"./chevron-down-Dri7QTYH.js";import"./cross-BJMUt8op.js";import"./PdfViewerSidebar-4qpJMW8h.js";import"./index-Cb73vfBj.js";import"./index-5cIFHse-.js";import"./index-DlbzGHlu.js";import"./PdfViewerToolbar-Bhvt8s_m.js";import"./Button-PnV_trQF.js";import"./chevron-right-BOvfoCSq.js";import"./Input-Bp3cyvX_.js";import"./search-bO4Ln9fx.js";import"./spin-D7ZyVHiP.js";import"./error-CqWSLLge.js";import"./withOsdkMetrics-GkFpiJAY.js";import"./makeExternalStore-DBpHlW_G.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
