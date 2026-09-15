import{j as r,M as s}from"./iframe-ClXV96ol.js";import{P as p}from"./pdf-viewer-C6rI7ikm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dpo3JVZQ.js";import"./preload-helper-GIvq9Fgh.js";import"./PdfViewer-CJGz_TCn.js";import"./index-BS_93M16.js";import"./BasePdfViewer-_rCZs_QH.js";import"./BasePdfViewer.module.css-pEfy0Gba.js";import"./PdfViewerAnnotationLayer-DCqP7hIB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1vgWzHX.js";import"./PdfViewerOutlineSidebar-Culy3WCa.js";import"./PdfViewerSidebarHeader-C4lXacYd.js";import"./useBaseUiId-CeQ_TKpW.js";import"./useControlled-Bvg52cep.js";import"./CompositeRoot-BPjaPetv.js";import"./CompositeItem-UA3lXUwr.js";import"./ToolbarRootContext-dOFs4mME.js";import"./composite-C0Fpedst.js";import"./svgIconContainer-BzIt4vSD.js";import"./PdfViewerSearchBar-Bioi1o55.js";import"./chevron-up-Ct3xhYdE.js";import"./chevron-down-BtcKUO_9.js";import"./cross-DTt9RaJo.js";import"./PdfViewerSidebar-Chm9rkDU.js";import"./index-BEQyJeIH.js";import"./index-Bkk5ODU2.js";import"./index-CLBh2Emm.js";import"./PdfViewerToolbar-D5ViC7ek.js";import"./Button-DpTMspMt.js";import"./chevron-right-Zyv87DdO.js";import"./Input-CzDuGki_.js";import"./search-C1vc_KSz.js";import"./spin-Di5uSHkT.js";import"./error-JR-fCQaz.js";import"./withOsdkMetrics-CY10LFb-.js";import"./makeExternalStore-CMtJRYT9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
