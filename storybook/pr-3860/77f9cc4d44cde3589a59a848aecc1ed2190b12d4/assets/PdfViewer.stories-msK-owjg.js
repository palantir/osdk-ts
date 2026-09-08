import{j as r,M as s}from"./iframe-DlM-48cS.js";import{P as p}from"./pdf-viewer-wP0fmFj-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DD-ZhBXC.js";import"./preload-helper-DmLvY0Ro.js";import"./PdfViewer-BDwMnlHn.js";import"./index-DQySynAe.js";import"./BasePdfViewer-Cx3GW3Ns.js";import"./BasePdfViewer.module.css-sgdU8cG_.js";import"./PdfViewerAnnotationLayer-Degk33LZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeC7x7uZ.js";import"./PdfViewerOutlineSidebar-BMgAnfmw.js";import"./PdfViewerSidebarHeader-DtQtODvs.js";import"./useBaseUiId-BL7ajxcr.js";import"./useControlled-Cds1c1L2.js";import"./CompositeRoot-DE165pSV.js";import"./CompositeItem-DnzFCdD-.js";import"./ToolbarRootContext-DaIwolue.js";import"./composite-CCDJ76ow.js";import"./svgIconContainer-BSW0qWgw.js";import"./PdfViewerSearchBar-Dd48QqxL.js";import"./chevron-up-Cfhc42Mw.js";import"./chevron-down-P2rFBgt2.js";import"./cross-DwTMpwkP.js";import"./PdfViewerSidebar-BKjNnlu-.js";import"./index-zmbIiHRb.js";import"./index-oiGtd9Nq.js";import"./index-DD03Ubzs.js";import"./PdfViewerToolbar-JC1be1_W.js";import"./Button-CS46bS-Y.js";import"./chevron-right-COOz7LYR.js";import"./Input-BgLmo8kc.js";import"./search-CPnwrFbd.js";import"./spin-Smeowgqn.js";import"./error-CpOA0Xju.js";import"./withOsdkMetrics-D-ub6zdF.js";import"./makeExternalStore-CFNSwXMM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
