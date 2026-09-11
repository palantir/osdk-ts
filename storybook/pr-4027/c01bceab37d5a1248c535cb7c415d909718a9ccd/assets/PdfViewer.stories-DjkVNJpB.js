import{j as r,M as s}from"./iframe-C4E-g_Np.js";import{P as p}from"./pdf-viewer-DRwGXhw7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CWi4L-XN.js";import"./preload-helper-rW2p5jqX.js";import"./PdfViewer-DVzGDR8f.js";import"./index-CzqkLMMI.js";import"./BasePdfViewer-DGnjWvkP.js";import"./BasePdfViewer.module.css-CwTYn70_.js";import"./PdfViewerAnnotationLayer-BYDK9FBC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cx6CWEn3.js";import"./PdfViewerOutlineSidebar-v7_k5ABR.js";import"./PdfViewerSidebarHeader-BDV3Tx_N.js";import"./useBaseUiId-B-PzIYIN.js";import"./useControlled-CQT-2p8e.js";import"./CompositeRoot-Cnqg15jt.js";import"./CompositeItem-DpdLDIC_.js";import"./ToolbarRootContext-DAbASYAb.js";import"./composite-BnlE1__B.js";import"./svgIconContainer-i3Vzui20.js";import"./PdfViewerSearchBar-CNfMqbfQ.js";import"./chevron-up-BwfaiWeE.js";import"./chevron-down-CUSU7y7B.js";import"./cross-6-c7L2_r.js";import"./PdfViewerSidebar-DVfbrUW5.js";import"./index-4qPHZMUz.js";import"./index-D1JR9Ik6.js";import"./index-BMt0vC51.js";import"./PdfViewerToolbar-DZMzbSPE.js";import"./Button-kJtgGGYx.js";import"./chevron-right-Bk_fe5Dc.js";import"./Input-BPR-03z-.js";import"./search-CfqJuXpO.js";import"./spin-Be8YbP27.js";import"./error-2WKWP45F.js";import"./withOsdkMetrics-IbzZIByL.js";import"./makeExternalStore-o-ytUCUX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
