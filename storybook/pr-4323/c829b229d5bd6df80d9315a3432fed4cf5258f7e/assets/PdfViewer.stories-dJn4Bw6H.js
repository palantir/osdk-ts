import{j as r,M as s}from"./iframe-DywpB1hE.js";import{P as p}from"./pdf-viewer-GMOkQvQ3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1CKyZRlf.js";import"./preload-helper-C9IGOhE9.js";import"./PdfViewer-Baqek34j.js";import"./index-DmgiNEb3.js";import"./BasePdfViewer-BONuhKV3.js";import"./BasePdfViewer.module.css-CIqfi5Mc.js";import"./PdfViewerAnnotationLayer-25pg7CAt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-oHnQtKRF.js";import"./PdfViewerOutlineSidebar-CqS1LzVI.js";import"./PdfViewerSidebarHeader-qEPeLr_r.js";import"./useBaseUiId-J99Ack0x.js";import"./useControlled-vk6jUFHs.js";import"./CompositeRoot-9jjcsh-H.js";import"./CompositeItem-D-O0kvjn.js";import"./ToolbarRootContext-DhYqu86z.js";import"./composite-Cr11nkBG.js";import"./svgIconContainer-BDFx6Zxn.js";import"./PdfViewerSearchBar-DRNb1gyy.js";import"./chevron-up-JlLgHj79.js";import"./chevron-down-B3UYxdX4.js";import"./cross-aTqn6PnT.js";import"./PdfViewerSidebar-DKlrgOTQ.js";import"./index-CiTdpWDW.js";import"./index-BtGsUy0O.js";import"./index-BtfNmnmI.js";import"./PdfViewerToolbar-DHeUyht8.js";import"./Button-Ctxa2jTP.js";import"./chevron-right-2QE4p-Wj.js";import"./Input-DaT49KS2.js";import"./search-DVZ7S7-1.js";import"./spin-GL6FRBR8.js";import"./error-zG4ckKPW.js";import"./withOsdkMetrics-BM9yLZRB.js";import"./makeExternalStore-CFrW1DiS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
